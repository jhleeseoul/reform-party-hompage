"use server"

import { revalidatePath } from "next/cache"

// Simulated newsletter database
const newsletterSubscribers = new Map<
  string,
  {
    email: string
    subscribedAt: Date
    preferences: string[]
    status: "active" | "unsubscribed"
  }
>()

export async function subscribeToNewsletter(formData: FormData) {
  try {
    const email = formData.get("email") as string

    // Validation
    if (!email || !email.includes("@")) {
      return {
        success: false,
        message: "유효한 이메일 주소를 입력해주세요.",
      }
    }

    // Check if already subscribed
    if (newsletterSubscribers.has(email)) {
      const subscriber = newsletterSubscribers.get(email)
      if (subscriber?.status === "active") {
        return {
          success: false,
          message: "이미 구독 중인 이메일 주소입니다.",
        }
      }
    }

    // Add subscriber
    newsletterSubscribers.set(email, {
      email,
      subscribedAt: new Date(),
      preferences: ["general"],
      status: "active",
    })

    // Simulate email sending
    console.log(`Newsletter subscription confirmation sent to: ${email}`)

    revalidatePath("/")

    return {
      success: true,
      message: "뉴스레터 구독이 완료되었습니다. 확인 이메일을 발송했습니다.",
    }
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return {
      success: false,
      message: "구독 처리 중 오류가 발생했습니다.",
    }
  }
}

export async function unsubscribeFromNewsletter(email: string) {
  try {
    const subscriber = newsletterSubscribers.get(email)

    if (!subscriber) {
      return {
        success: false,
        message: "구독 정보를 찾을 수 없습니다.",
      }
    }

    // Update status
    newsletterSubscribers.set(email, {
      ...subscriber,
      status: "unsubscribed",
    })

    console.log(`Newsletter unsubscription processed for: ${email}`)

    return {
      success: true,
      message: "뉴스레터 구독이 해지되었습니다.",
    }
  } catch (error) {
    console.error("Newsletter unsubscription error:", error)
    return {
      success: false,
      message: "구독 해지 처리 중 오류가 발생했습니다.",
    }
  }
}
