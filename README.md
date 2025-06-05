# Reform Party Website

개혁신당 공식 웹사이트 소스 코드입니다. 이 프로젝트는 정당의 정책 소개와 행사 안내, 당원 모집 등 다양한 정보를 제공하기 위해 제작되었습니다. 배포 도메인은 **[v0-reform-party-website-git-main-jhleeseouls-projects.vercel.app](https://v0-reform-party-website-git-main-jhleeseouls-projects.vercel.app)** 입니다.

## 주요 기능

- **홈**: 핵심 가치와 최신 뉴스, 예정된 행사를 한눈에 볼 수 있는 메인 페이지
- **정책 소개**: 분야별 정책 목록과 상세 페이지, 정책 제안 폼 제공
- **행사 참여 신청**: 자원봉사·청원·후원 탭을 포함한 참여 페이지와 행사 신청 폼
- **뉴스룸**: 최근 소식, 보도자료, 사진·영상 갤러리
- **당원 가입**: 단계별 신청 절차와 결제 폼을 갖춘 가입 페이지
- **뉴스레터 구독**: 이메일 입력 후 구독할 수 있는 컴포넌트
- **문의 페이지**: 일반 문의, 당원 가입, 언론 문의, 자원봉사 신청 등을 위한 다양한 폼

## 기술 스택

- **Next.js 15**
- **TypeScript**
- **Tailwind CSS**
- **Radix UI / shadcn/ui 컴포넌트**
- **pnpm** 패키지 매니저

## 설치 및 실행

1. 저장소 클론 후 의존성 설치
   ```bash
   pnpm install
   ```
2. 개발 서버 실행
   ```bash
   pnpm dev
   ```
   기본적으로 `http://localhost:3000`에서 앱을 확인할 수 있습니다.

## 빌드 및 배포

- 프로덕션 빌드
  ```bash
  pnpm build
  ```
- 로컬에서 빌드 결과 실행
  ```bash
  pnpm start
  ```

Next.js 빌드를 통해 생성된 정적 파일을 Vercel에 배포하며, 도메인은 위에 명시한 주소로 설정되어 있습니다. `next.config.mjs`에서 타입스크립트와 ESLint 오류를 빌드 시 무시하도록 설정되어 있으므로 배포 시 주의합니다.【F:next.config.mjs†L1-L13】

## 주요 디렉터리 구조

```
app/              Next.js App Router 페이지와 레이아웃
components/       재사용 가능한 React 컴포넌트 및 UI 요소
hooks/            커스텀 React 훅
lib/              서버 액션과 유틸리티 함수
public/           정적 파일 (이미지, 아이콘 등)
styles/           전역 스타일(Tailwind CSS)
next.config.mjs   Next.js 설정 파일
postcss.config.mjs PostCSS 설정
tailwind.config.ts Tailwind CSS 설정
```

각 페이지는 `app/` 폴더 하위에 디렉터리별로 구성되어 있으며, 예를 들어 `app/policy`에는 정책 목록과 상세 페이지가, `app/participate`에는 자원봉사·청원·후원 관련 페이지가 위치합니다.

## 라이선스

본 저장소는 개혁신당 웹사이트 구축을 위한 예제 코드로 사용되며 별도의 라이선스 조항이 명시되지 않았습니다.
