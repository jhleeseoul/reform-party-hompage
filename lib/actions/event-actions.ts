"use server"

import { revalidatePath } from "next/cache"

// Types for event registration
export interface EventRegistrationData {
  eventId: string
  name: string
  email: string
  phone: string
  organization?: string
  question?: string
  agreePrivacy: boolean
}

export interface EventRegistrationResult {
  success: boolean
  message: string
  registrationId?: string
  error?: string
}

// Simulated database - in real app, this would be a proper database
const eventRegistrations = new Map<string, any[]>()
const registrationCounter = { count: 1000 }

// Event capacity limits (simulated database)
const eventCapacities = new Map([
  ["1", { capacity: 500, registered: 342 }],
  ["2", { capacity: 200, registered: 156 }],
  ["3", { capacity: 150, registered: 89 }],
  ["4", { capacity: 300, registered: 267 }],
  ["5", { capacity: 100, registered: 78 }],
  ["6", { capacity: 250, registered: 203 }],
])

// Validation helper functions
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^01[0-9]-?[0-9]{3,4}-?[0-9]{4}$/
  return phoneRegex.test(phone.replace(/\s/g, ""))
}

const validateName = (name: string): boolean => {
  return name.trim().length >= 2 && name.trim().length <= 50
}

// Main registration action
export async function registerForEvent(formData: FormData): Promise<EventRegistrationResult> {
  try {
    // Extract and validate form data
    const eventId = formData.get("eventId") as string
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const organization = formData.get("organization") as string
    const question = formData.get("question") as string
    const agreePrivacy = formData.get("agreePrivacy") === "true"

    // Validation
    if (!eventId || !name || !email || !phone) {
      return {
        success: false,
        message: "필수 정보를 모두 입력해주세요.",
        error: "MISSING_REQUIRED_FIELDS",
      }
    }

    if (!validateName(name)) {
      return {
        success: false,
        message: "이름은 2-50자 사이로 입력해주세요.",
        error: "INVALID_NAME",
      }
    }

    if (!validateEmail(email)) {
      return {
        success: false,
        message: "올바른 이메일 주소를 입력해주세요.",
        error: "INVALID_EMAIL",
      }
    }

    if (!validatePhone(phone)) {
      return {
        success: false,
        message: "올바른 휴대폰 번호를 입력해주세요. (예: 010-1234-5678)",
        error: "INVALID_PHONE",
      }
    }

    if (!agreePrivacy) {
      return {
        success: false,
        message: "개인정보 수집 및 이용에 동의해주세요.",
        error: "PRIVACY_NOT_AGREED",
      }
    }

    // Check event capacity
    const eventCapacity = eventCapacities.get(eventId)
    if (!eventCapacity) {
      return {
        success: false,
        message: "존재하지 않는 행사입니다.",
        error: "EVENT_NOT_FOUND",
      }
    }

    if (eventCapacity.registered >= eventCapacity.capacity) {
      return {
        success: false,
        message: "행사 정원이 마감되었습니다.",
        error: "EVENT_FULL",
      }
    }

    // Check for duplicate registration
    const existingRegistrations = eventRegistrations.get(eventId) || []
    const isDuplicate = existingRegistrations.some((reg) => reg.email === email || reg.phone === phone)

    if (isDuplicate) {
      return {
        success: false,
        message: "이미 등록된 이메일 또는 전화번호입니다.",
        error: "DUPLICATE_REGISTRATION",
      }
    }

    // Create registration record
    const registrationId = `REG-${eventId}-${String(registrationCounter.count++).padStart(4, "0")}`
    const registrationData = {
      id: registrationId,
      eventId,
      name: name.trim(),
      email: email.toLowerCase().trim(),
      phone: phone.replace(/\s/g, ""),
      organization: organization?.trim() || null,
      question: question?.trim() || null,
      agreePrivacy,
      registeredAt: new Date().toISOString(),
      status: "confirmed",
      confirmationSent: false,
    }

    // Save registration
    if (!eventRegistrations.has(eventId)) {
      eventRegistrations.set(eventId, [])
    }
    eventRegistrations.get(eventId)!.push(registrationData)

    // Update event capacity
    eventCapacity.registered += 1
    eventCapacities.set(eventId, eventCapacity)

    // Send confirmation email (simulated)
    await sendConfirmationEmail(registrationData)

    // Revalidate the event page to show updated registration count
    revalidatePath(`/participate/events/${eventId}`)
    revalidatePath("/participate/events")

    return {
      success: true,
      message: "행사 참가 신청이 완료되었습니다. 확인 이메일을 발송했습니다.",
      registrationId,
    }
  } catch (error) {
    console.error("Event registration error:", error)
    return {
      success: false,
      message: "시스템 오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
      error: "SYSTEM_ERROR",
    }
  }
}

// Cancel registration action
export async function cancelEventRegistration(registrationId: string, email: string): Promise<EventRegistrationResult> {
  try {
    // Find registration across all events
    let foundRegistration = null
    let eventId = null

    for (const [eId, registrations] of eventRegistrations.entries()) {
      const registration = registrations.find((reg) => reg.id === registrationId && reg.email === email)
      if (registration) {
        foundRegistration = registration
        eventId = eId
        break
      }
    }

    if (!foundRegistration || !eventId) {
      return {
        success: false,
        message: "등록 정보를 찾을 수 없습니다.",
        error: "REGISTRATION_NOT_FOUND",
      }
    }

    if (foundRegistration.status === "cancelled") {
      return {
        success: false,
        message: "이미 취소된 등록입니다.",
        error: "ALREADY_CANCELLED",
      }
    }

    // Update registration status
    foundRegistration.status = "cancelled"
    foundRegistration.cancelledAt = new Date().toISOString()

    // Update event capacity
    const eventCapacity = eventCapacities.get(eventId)
    if (eventCapacity) {
      eventCapacity.registered -= 1
      eventCapacities.set(eventId, eventCapacity)
    }

    // Send cancellation confirmation email
    await sendCancellationEmail(foundRegistration)

    // Revalidate pages
    revalidatePath(`/participate/events/${eventId}`)
    revalidatePath("/participate/events")

    return {
      success: true,
      message: "행사 참가 신청이 취소되었습니다.",
      registrationId,
    }
  } catch (error) {
    console.error("Event cancellation error:", error)
    return {
      success: false,
      message: "취소 처리 중 오류가 발생했습니다.",
      error: "SYSTEM_ERROR",
    }
  }
}

// Get registration details
export async function getEventRegistration(registrationId: string, email: string) {
  try {
    for (const [eventId, registrations] of eventRegistrations.entries()) {
      const registration = registrations.find((reg) => reg.id === registrationId && reg.email === email)
      if (registration) {
        return {
          success: true,
          registration: {
            ...registration,
            eventId,
          },
        }
      }
    }

    return {
      success: false,
      message: "등록 정보를 찾을 수 없습니다.",
    }
  } catch (error) {
    console.error("Get registration error:", error)
    return {
      success: false,
      message: "조회 중 오류가 발생했습니다.",
    }
  }
}

// Get event registration statistics
export async function getEventRegistrationStats(eventId: string) {
  try {
    const eventCapacity = eventCapacities.get(eventId)
    const registrations = eventRegistrations.get(eventId) || []

    const activeRegistrations = registrations.filter((reg) => reg.status === "confirmed")
    const cancelledRegistrations = registrations.filter((reg) => reg.status === "cancelled")

    return {
      success: true,
      stats: {
        capacity: eventCapacity?.capacity || 0,
        registered: activeRegistrations.length,
        cancelled: cancelledRegistrations.length,
        available: (eventCapacity?.capacity || 0) - activeRegistrations.length,
        registrationRate: eventCapacity?.capacity
          ? Math.round((activeRegistrations.length / eventCapacity.capacity) * 100)
          : 0,
      },
    }
  } catch (error) {
    console.error("Get stats error:", error)
    return {
      success: false,
      message: "통계 조회 중 오류가 발생했습니다.",
    }
  }
}

// Email simulation functions
async function sendConfirmationEmail(registration: any) {
  // Simulate email sending delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  console.log(`📧 Confirmation email sent to ${registration.email}`)
  console.log(`Registration ID: ${registration.id}`)
  console.log(`Event ID: ${registration.eventId}`)

  // In a real app, you would integrate with an email service like:
  // - SendGrid
  // - AWS SES
  // - Resend
  // - Nodemailer

  registration.confirmationSent = true
  return true
}

async function sendCancellationEmail(registration: any) {
  await new Promise((resolve) => setTimeout(resolve, 300))

  console.log(`📧 Cancellation email sent to ${registration.email}`)
  console.log(`Registration ID: ${registration.id}`)

  return true
}

// Admin functions for event management
export async function getEventRegistrations(eventId: string) {
  try {
    const registrations = eventRegistrations.get(eventId) || []

    return {
      success: true,
      registrations: registrations.map((reg) => ({
        ...reg,
        // Don't expose sensitive data in admin view
        phone: reg.phone.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2"),
      })),
    }
  } catch (error) {
    console.error("Get event registrations error:", error)
    return {
      success: false,
      message: "등록자 목록 조회 중 오류가 발생했습니다.",
    }
  }
}

// Bulk email functions
export async function sendEventReminder(eventId: string, message: string) {
  try {
    const registrations = eventRegistrations.get(eventId) || []
    const activeRegistrations = registrations.filter((reg) => reg.status === "confirmed")

    // Simulate sending emails to all registered participants
    for (const registration of activeRegistrations) {
      await new Promise((resolve) => setTimeout(resolve, 100))
      console.log(`📧 Reminder sent to ${registration.email}: ${message}`)
    }

    return {
      success: true,
      message: `${activeRegistrations.length}명에게 알림을 발송했습니다.`,
      sentCount: activeRegistrations.length,
    }
  } catch (error) {
    console.error("Send reminder error:", error)
    return {
      success: false,
      message: "알림 발송 중 오류가 발생했습니다.",
    }
  }
}
