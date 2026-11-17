import { useEffect, useState } from 'react'

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
]

const EXPERIENCES = [
  {
    company: '큐어소프트',
    role: '대리',
    period: '2023.04 ~ 2026.05',
    points: [
      'ITSTAT·미디어통계포털(KISDI STAT) 기능개선 및 유지보수',
      '성인지통계, 성평등 지식플랫폼, 장애통계데이터 아카이브, 과학기술인재정책플랫폼 유지·고도화',
      '한국행정연구원 AI 기반 지식관리 웹플랫폼 구축',
      '웹 취약점 조치, SSL 인증서 관리, 공공 데이터 품질 진단을 담당 프로젝트 전반에서 수행',
    ],
    tags: ['Java', 'Spring Boot', 'Thymeleaf', 'Oracle'],
  },
  {
    company: '누림소프트',
    role: '사원 · 대리',
    period: '2019.05 ~ 2023.03',
    points: [
      'ITSTAT 정보시스템 개발, 기능개선 및 유지보수',
      '성인지통계 시스템 개선·관리, 과학기술인재정책플랫폼 유지·보수 및 기능 고도화',
      '통계청 나라통계시스템 위탁운영 및 유지관리',
      '웹 취약점 조치, SSL 인증서 관리, 공공 데이터 품질 진단을 담당 프로젝트 전반에서 수행',
    ],
    tags: ['Java', 'Spring MVC', 'eGovFrame', 'Oracle'],
  },
  {
    company: '아크루즈',
    role: '사원',
    period: '2016.11 ~ 2017.09',
    points: ['IDC 관제시스템 구축, V3 방문객 포털 시스템 개발'],
    tags: ['Java'],
  },
]

const projectsData = [
  {
    id: 'kipa-portal',
    client: '한국행정연구원',
    period: '2025.01 ~ 2025.05',
    title: '한국행정연구원 AI 챗봇 연동 및 아카이브 포털 신규 구축',
    description:
      'Thymeleaf 기반 아키텍처 설계 및 프론트/백엔드 통합 개발. 외부 아카이브 연동으로 대규모 행정 데이터 수집 환경을 구축하고, AI 챗봇 엔진을 연동해 지능형 데이터 응답 인터페이스를 구현했습니다.',
    imageUrl: '/kipa.png',
    liveUrl: 'https://www.kipa.re.kr',
    isKosaVerified: true,
    tags: ['Java', 'Spring Boot', 'Thymeleaf', 'REST API', 'Chatbot'],
  },
  {
    id: 'itstat-portal',
    client: '정보통신정책연구원',
    period: '2020.05 ~ 2026.05 (기능개선·유지보수 사업 연속 수행)',
    title: '미디어통계포털 및 ITSTAT 대용량 통계 연동 및 유지관리',
    description:
      '미디어통계포털 및 ITSTAT 시스템 신규 개발 참여 후 약 6년간 전담 유지보수 수행. 나라통계 API 연동 및 대용량 원시자료(CSV) 파싱·다운로드 엔진을 구축하여 서비스 안정성을 극대화했습니다.',
    imageUrl: '/itstat.png',
    liveUrl: 'https://www.itstat.go.kr/itstat/main.html',
    isKosaVerified: true,
    tags: ['Java', 'Spring Boot', 'REST API', 'CSV', 'Oracle'],
  },
  {
    id: 'gender-stat',
    client: '한국여성정책연구원',
    period: '2019.06 ~ 2025.12 (시스템 개선·관리 사업 연속 수행)',
    title: '성인지통계·여성가족패널·여성관리자패널 시스템 통합 및 빅데이터 시각화',
    description:
      '분산된 3개 패널 시스템 통합 및 리뉴얼 구축. 뉴스 빅데이터 수집·가공 기반 차트 시각화 및 패널 데이터 맞춤형 동적 변수 추출 다운로드 모듈을 개발하고 지속적인 고도화를 수행했습니다.',
    imageUrl: '/kwdi.png',
    liveUrl: 'https://gsis.kwdi.re.kr/gsis/kr/main.html',
    isKosaVerified: true,
    tags: ['Java', 'Spring MVC', 'eGovFrame', 'rMate Chart', 'Oracle'],
  },
  {
    id: 'kistep-platform',
    client: '한국과학기술기획평가원',
    period: '2021.11 ~ 2024.10 (유지·보수 및 기능 고도화 사업 연속 수행)',
    title: '한국과학기술인재정책플랫폼 리뉴얼 및 고도화',
    description:
      '국가 과학기술인재 정책 데이터 통합 및 전면 리뉴얼 구축. 사용자 중심 UI/UX 개선과 정책·통계 검색 엔진 고도화를 진행하였으며, 이후 2년간 안정화 및 기능 고도화를 전담했습니다.',
    imageUrl: '/kistep.png',
    liveUrl: 'https://www.hrstpolicy.re.kr/kistep/kr/main.html',
    isKosaVerified: true,
    tags: ['Java', 'Spring MVC', 'eGovFrame', 'REST API', 'Oracle'],
  },
  {
    id: 'koddi-stat',
    client: '한국장애인개발원',
    period: '2023.09 ~ 2024.05',
    title: '장애통계데이터 포털 구축 지원 및 유지관리',
    description:
      '국가 승인 통계·패널 조사의 인포그래픽 및 데이터 시각화 포털 구축 지원. 대국민 통계 데이터 다운로드 성능 최적화와 함께 웹 접근성(WA) 및 공공 데이터 품질 지침을 엄격히 반영한 유지관리 수행.',
    imageUrl: '/koddi.png',
    liveUrl: 'https://koddi.or.kr/stat/html/user/main/main',
    isKosaVerified: true,
    tags: ['Java', 'Spring Boot', 'Thymeleaf', 'REST API', 'JSON'],
  },
]

function hasValidUrl(url) {
  return typeof url === 'string' && /^https?:\/\//i.test(url.trim())
}

const SKILL_GROUPS = [
  {
    label: 'Backend',
    items: [
      'Java',
      'Spring Boot',
      'Spring MVC',
      'eGovFrame',
      'MyBatis',
      'iBATIS',
      'Spring Security',
      'Spring Batch',
      'REST API',
      'JSON',
      'AI API',
    ],
  },
  {
    label: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Thymeleaf', 'Tailwind CSS', 'rMate Chart'],
  },
  {
    label: 'Database & Tools',
    items: [
      'Oracle',
      'MariaDB',
      'MySQL',
      'Eclipse',
      'IntelliJ IDEA',
      'Cursor AI',
      'Git',
      'GitHub',
    ],
  },
  {
    label: 'Certification',
    items: ['SQLD (SQL 개발자, 2026.03 취득)'],
  },
]

function GithubIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  )
}

function ShieldIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3.25 5.75 6v5.2c0 4.05 2.7 7.75 6.25 8.8 3.55-1.05 6.25-4.75 6.25-8.8V6L12 3.25Z"
      />
      <path strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" d="m9.2 12 1.9 1.9 3.7-3.8" />
    </svg>
  )
}

function MailIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" strokeWidth="1.7" />
      <path strokeWidth="1.7" strokeLinecap="round" d="m4.5 7.5 7.5 6 7.5-6" />
    </svg>
  )
}

function DownloadIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4v10m0 0 4-4m-4 4-4-4M5 16.5V18a1.5 1.5 0 0 0 1.5 1.5h11A1.5 1.5 0 0 0 19 18v-1.5"
      />
    </svg>
  )
}

function ExternalLinkIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 5h5v5M19 5l-9 9"
      />
      <path
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 13.5V18a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 18V7.5A1.5 1.5 0 0 1 6.5 6H11"
      />
    </svg>
  )
}

const projectLinkClassName =
  'inline-flex items-center gap-1.5 rounded-full border border-slate/20 bg-navy-card/60 px-3 py-1.5 text-xs font-medium text-slate-light transition hover:border-mint/50 hover:text-mint'

const contactLinkClassName =
  'inline-flex cursor-pointer items-center gap-2 rounded-full border border-slate/20 bg-navy-card/60 px-3 py-1.5 text-xs font-medium text-slate-light transition hover:border-mint/50 hover:text-mint'

const CONTACT_EMAIL = 'dltmfdl6926@gmail.com'

const sectionClassName = 'scroll-mt-28 mb-4 pb-16 lg:mb-6 lg:pb-24'

function SectionHeading({ children }) {
  return (
    <h3 className="mb-8 border-b border-slate/20 pb-4 text-sm font-bold uppercase tracking-[0.2em] text-mint">
      {children}
    </h3>
  )
}

function App() {
  const [activeId, setActiveId] = useState('about')
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0 })
  const [toastMessage, setToastMessage] = useState('')
  // public/profile.jpg 로 교체 가능
  const profileSrc = '/profile.jpg';

  useEffect(() => {
    const sections = NAV.map((item) => document.getElementById(item.id)).filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) setActiveId(visible.target.id)
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: [0, 0.2, 0.4, 0.6] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!toastMessage) return undefined
    const timer = window.setTimeout(() => setToastMessage(''), 2500)
    return () => window.clearTimeout(timer)
  }, [toastMessage])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL)
      setToastMessage('이메일 주소가 복사되었습니다!')
    } catch {
      // Clipboard API unavailable; still avoid mailto navigation
    }
  }

  return (
    <div
      className="relative min-h-svh break-keep bg-navy text-slate"
      onMouseMove={(event) => setSpotlight({ x: event.clientX, y: event.clientY })}
    >
      <div
        className="pointer-events-none fixed inset-0 z-30 hidden transition-opacity duration-300 lg:block"
        style={{
          background: `radial-gradient(600px circle at ${spotlight.x}px ${spotlight.y}px, rgba(100, 255, 218, 0.07), transparent 70%)`,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto min-h-svh max-w-6xl px-6 py-12 md:px-12 md:py-16 lg:flex lg:gap-4 lg:px-24 lg:py-0">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-svh lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
          <div>
            <div className="flex items-center gap-5 sm:gap-24 lg:gap-36">
              <div className="min-w-0">
                <p className="mb-3 font-mono text-sm tracking-widest text-mint">Hi, I&apos;m</p>
                <h1 className="text-4xl font-extrabold tracking-tight text-slate-lightest sm:text-5xl">
                  이슬
                </h1>
                <p className="mt-2 text-lg font-medium tracking-wide text-slate-light sm:text-xl">
                  Seul Lee
                </p>
              </div>
              <img
                src={profileSrc}
                alt="이슬 프로필"
                className="h-28 w-28 shrink-0 rounded-full border-2 border-emerald-400/30 object-cover object-[50%_0%] shadow-[0_0_28px_rgba(100,255,218,0.12)]"
              />
            </div>
            <div className="mt-6 max-w-full">
              <h2 className="text-lg font-medium text-slate-lightest sm:text-xl">
                Full Stack Developer
              </h2>
              <p className="mt-5 leading-relaxed text-slate">
                공공 통계·데이터 시스템을 8년째 만든 Java/Spring 개발자, React와 AI 도구로 개발
                범위를 넓히고 있습니다.
              </p>
            </div>

            <nav className="mt-12 hidden lg:block" aria-label="Section">
              <ul className="space-y-4">
                {NAV.map((item) => {
                  const isActive = activeId === item.id
                  return (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="group flex items-center gap-4 py-1 text-xs font-bold uppercase tracking-[0.18em]"
                      >
                        <span
                          className={`h-px transition-all duration-300 ${
                            isActive
                              ? 'w-16 bg-mint'
                              : 'w-8 bg-slate/50 group-hover:w-16 group-hover:bg-slate-lightest'
                          }`}
                        />
                        <span
                          className={
                            isActive
                              ? 'text-mint'
                              : 'text-slate group-hover:text-slate-lightest'
                          }
                        >
                          {item.label}
                        </span>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>

          <ul className="mt-10 flex flex-wrap items-center gap-3 lg:mt-0" aria-label="Links">
            <li>
              <a
                href="https://github.com/roozLog"
                target="_blank"
                rel="noreferrer"
                className={contactLinkClassName}
              >
                <GithubIcon className="h-4 w-4" />
                GitHub
              </a>
            </li>
            <li>
              <a href="/Resume_LeeSeul.pdf" download className={contactLinkClassName}>
                <DownloadIcon className="h-4 w-4" />
                Resume
              </a>
            </li>
            <li>
              <button type="button" onClick={copyEmail} className={contactLinkClassName}>
                <MailIcon className="h-4 w-4" />
                Email
              </button>
            </li>
          </ul>
        </header>

        <main className="pt-16 lg:w-[52%] lg:py-24">
          <section id="about" className={sectionClassName} aria-label="About">
            <SectionHeading>About</SectionHeading>
            <div className="space-y-4 leading-7 text-slate">
              <p>
                2016년부터 Java와 Spring 기반으로 웹 서비스를 만들어 왔고, 2019년 이후로는 공공
                통계·데이터 포털을 주로 맡았습니다. 정보통신정책연구원, 한국여성정책연구원,
                한국과학기술기획평가원 같은 기관의 시스템을 신규 구축부터 개선, 운영까지 이어서
                담당했습니다.
              </p>
              <p>
                ITSTAT은 신규 개발에 참여한 뒤 약 6년째 유지보수를 하고 있고, 성인지통계는 따로
                운영되던 패널 시스템 세 개를 하나로 합쳤습니다. 한 시스템을 오래 맡다 보니 장애가
                났을 때 원인을 빨리 찾고, 다음 담당자가 읽기 쉬운 코드를 남기는 일을 중요하게
                생각합니다.
              </p>
              <p>
                백엔드와 DB를 주로 다루지만 화면 작업도 직접 합니다. 통계 데이터를 차트와 다운로드로
                보여 주는 화면, 대용량 CSV 처리, 외부 API와 챗봇 연동까지 필요한 부분은 가리지
                않고 개발해 왔습니다.
              </p>
              <p>
                React로 화면을 만들 수 있고, Cursor AI와 Claude Code 같은 AI 도구를 개발에 활용합니다.
                이 포트폴리오도 React로 직접 만들었고, 요즘은 두 가지를 더 깊이 공부하고 있습니다.
              </p>
              <p>
                모든 경력과 프로젝트 수행 이력은 한국인공지능소프트웨어산업협회(구 한국소프트웨어산업협회, KOSA) 경력관리 체계를 통해
                투명하고 검증 가능한 데이터로 관리하고 있습니다.
              </p>
            </div>
          </section>

          <section id="experience" className={sectionClassName} aria-label="Experience">
            <SectionHeading>Experience</SectionHeading>
            <ul className="grid gap-4">
              {EXPERIENCES.map((item) => (
                <li key={item.company}>
                  <article className="group rounded-xl border border-slate/15 bg-navy-card/40 p-5 transition hover:border-mint/30 hover:bg-navy-card/70">
                    <p className="font-mono text-xs tracking-wide text-mint">{item.period}</p>
                    <h4 className="mt-1 font-semibold leading-snug text-slate-lightest">
                      {item.company}
                      <span className="ml-2 text-sm font-normal text-slate-light">{item.role}</span>
                    </h4>
                    <ul className="mt-3 space-y-1.5 text-sm leading-6">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span className="mt-2.5 h-px w-3 shrink-0 bg-mint/60" aria-hidden="true" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full bg-mint/10 px-3 py-1 text-xs font-medium text-mint"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </article>
                </li>
              ))}
            </ul>
          </section>

          <section id="projects" className={sectionClassName} aria-label="Projects">
            <SectionHeading>Projects</SectionHeading>
            <ul className="space-y-4">
              {projectsData.map((project) => {
                const canVisitLive = hasValidUrl(project.liveUrl)
                const thumbnail = (
                  <img
                    src={project.imageUrl}
                    alt={`${project.title} 미리보기`}
                    className="h-28 w-full rounded-md object-cover shadow-[0_0_24px_rgba(100,255,218,0.08)] transition duration-300 group-hover:scale-[1.03] sm:h-32 sm:w-36 sm:shrink-0"
                  />
                )

                return (
                  <li key={project.id}>
                    <article className="group rounded-xl border border-slate/15 bg-navy-card/40 p-4 transition duration-300 hover:border-mint/35 hover:bg-navy-card/70 sm:p-5">
                      <div className="flex flex-col gap-2.5">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-5">
                          {canVisitLive ? (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="block overflow-hidden rounded-md sm:shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint"
                              aria-label={`${project.title} 서비스 방문`}
                            >
                              {thumbnail}
                            </a>
                          ) : (
                            <div className="overflow-hidden rounded-md sm:shrink-0">{thumbnail}</div>
                          )}

                          <div className="flex min-w-0 flex-1 flex-col gap-2.5">
                            <h4 className="font-semibold leading-snug text-slate-lightest">
                              {project.title}
                            </h4>
                            <p className="text-xs leading-5 text-slate">
                              {project.client} · {project.period}
                            </p>

                            <div className="flex flex-row flex-wrap items-center gap-2">
                              {project.isKosaVerified && (
                                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-sky-400/25 bg-sky-500/10 px-3 py-1.5 text-xs font-medium text-sky-300">
                                  <ShieldIcon className="h-3.5 w-3.5" />
                                  KOSA 검증
                                </span>
                              )}
                              {canVisitLive && (
                                <a
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noreferrer"
                                  className={projectLinkClassName}
                                >
                                  <ExternalLinkIcon className="h-3.5 w-3.5" />
                                  서비스 바로가기
                                </a>
                              )}
                            </div>
                          </div>
                        </div>

                        <p className="text-sm leading-6 text-slate-light">{project.description}</p>

                        <ul className="flex flex-wrap content-start gap-x-2 gap-y-2">
                          {project.tags.map((tag) => (
                            <li
                              key={tag}
                              className="rounded-full border border-mint/30 bg-transparent px-3 py-1 text-xs font-medium leading-5 text-mint"
                            >
                              {tag}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  </li>
                )
              })}
            </ul>
          </section>

          <section id="skills" className={sectionClassName} aria-label="Skills">
            <SectionHeading>Skills</SectionHeading>
            <div className="space-y-8">
              {SKILL_GROUPS.map((group) => (
                <div key={group.label}>
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-light">
                    {group.label}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border border-slate/20 bg-navy-card px-3.5 py-1.5 text-sm text-slate-lightest transition hover:border-mint/40 hover:text-mint"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <footer className="max-w-md border-t border-slate/15 pt-10 pb-8 text-sm leading-6 text-slate">
          </footer>
        </main>
      </div>

      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-4"
        >
          <p className="rounded-full border border-mint/30 bg-navy-card/95 px-4 py-2.5 text-sm font-medium text-slate-lightest shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-sm">
            {toastMessage}
          </p>
        </div>
      )}
    </div>
  )
}

export default App
