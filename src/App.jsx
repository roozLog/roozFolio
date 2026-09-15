import { useEffect, useState } from 'react'

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
]

const EXPERIENCES = [
  {
    title: '공공 웹 시스템 운영 / 유지관리',
    summary:
      '공공 웹 서비스의 안정적인 대민 제공을 위해 장애 대응, 기능 개선, 배포 운영을 담당했습니다. 요구사항 반영과 장애 이력을 함께 정리해 서비스가 끊기지 않으면서도 지속적으로 개선되도록 유지했습니다.',
    tags: ['시스템 운영', '유지관리', '장애 대응'],
    icon: 'ops',
  },
  {
    title: '웹 보안 취약점 조치 및 SSL 관리',
    summary:
      '웹 취약점 진단 결과를 기준으로 점검·패치·재검증을 수행하고, SSL 인증서 발급·갱신·만료 관리로 전송 구간을 안전하게 유지했습니다. 보안 이슈가 운영 일정과 충돌하지 않도록 조치 우선순위를 정해 반영했습니다.',
    tags: ['취약점 조치', 'SSL', '보안 운영'],
    icon: 'security',
  },
  {
    title: '공공 데이터 품질 진단 / 플랫폼 구축',
    summary:
      '공공기관 데이터의 정합성·완전성·일관성을 진단하고, 품질 지표와 점검 프로세스를 플랫폼으로 표준화했습니다. 수집부터 오류 추적, 개선 현황 공유까지 품질 관리 흐름을 한 화면에서 운영할 수 있게 만들었습니다.',
    tags: ['데이터 품질', '진단 지표', '플랫폼 구축'],
    icon: 'data',
  },
]

const projectsData = [
  {
    id: 'kipa-portal',
    title: '한국행정연구원 아카이브 연동 포털 신규 구축',
    description:
      'Thymeleaf 기반 프론트엔드/백엔드 구조 설계 및 아카이브 데이터 연동 개발. 챗봇 엔진 연동을 통해 대민 데이터 지능형 검색 환경 구축.',
    imageUrl: '/kipa.png',
    liveUrl: 'https://www.kipa.re.kr',
    isKosaVerified: true,
    tags: ['Java', 'Spring Boot', 'Thymeleaf', 'Archive API', 'Chatbot'],
  },
  {
    id: 'itstat-portal',
    title: '미디어통계 포털 (ITSTAT) 대용량 통계 연동 및 유지관리',
    description:
      '나라통계 API 연동을 통한 실시간 통계표 제공 및 연구자용 대용량 원시자료(CSV) 파싱·다운로드 모듈 구현. 수년간의 안정적 유지보수 수행.',
    imageUrl: '/itstat.png',
    liveUrl: 'https://www.itstat.go.kr/itstat/main.html',
    isKosaVerified: true,
    tags: ['Java', 'Spring Boot', 'Public API', 'Data Parsing', 'CSV'],
  },
  {
    id: 'gender-stat',
    title: '성인지통계·여성가족·여성관리자 패널 통합 시스템 및 빅데이터 시각화',
    description:
      '분산된 3개 패널 시스템을 단일 포털로 통합. 뉴스 빅데이터 수집/가공을 통한 카테고리별 차트 시각화 및 패널 조사 맞춤형 변수 추출/다운로드 엔진 개발.',
    imageUrl: '/kwdi.png',
    liveUrl: 'https://gsis.kwdi.re.kr/gsis/kr/main.html',
    isKosaVerified: true,
    tags: ['Java', 'Spring Boot', 'System Integration', 'BigData', 'Chart.js'],
  },
  {
    id: 'kistep-platform',
    title: '한국과학기술인재 플랫폼 전면 개편 및 운영',
    description:
      '국가 과학기술 인재 데이터 관리를 위한 플랫폼 전면 리뉴얼. UI/UX 개선 및 백엔드 데이터 처리 구조 최적화 후 2년간 안정적 운영 지원.',
    imageUrl: '/kistep.png',
    liveUrl: 'https://www.hrstpolicy.re.kr/kistep/kr/main.html',
    isKosaVerified: true,
    tags: ['Java', 'Spring Boot', 'System Renewal', 'UI/UX', 'Oracle'],
  },
  {
    id: 'koddi-stat',
    title: '장애통계데이터 포털 시스템 관리 및 고도화',
    description:
      '엄격한 웹 접근성(WA) 준수 및 고밀도 다차원 통계 데이터 검증 기준을 반영한 데이터 포털 유지관리 및 지속적 고도화 수행.',
    imageUrl: '/koddi.png',
    liveUrl: 'https://koddi.or.kr/stat/html/user/main/main',
    isKosaVerified: true,
    tags: ['Java', 'Oracle', 'Web Accessibility', 'Statistics Data'],
  },
]

function hasValidUrl(url) {
  return typeof url === 'string' && /^https?:\/\//i.test(url.trim())
}

const SKILL_GROUPS = [
  {
    label: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite', 'Tailwind CSS'],
  },
  {
    label: 'Workflow',
    items: ['Git', 'GitHub', 'Figma', 'REST API', 'Responsive UI'],
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

function DataIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <ellipse cx="12" cy="6" rx="7" ry="2.5" strokeWidth="1.7" />
      <path strokeWidth="1.7" d="M5 6v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6" />
      <path strokeWidth="1.7" d="M5 12v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6" />
    </svg>
  )
}

function OpsIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <rect x="3.5" y="4.5" width="17" height="12" rx="2" strokeWidth="1.7" />
      <path strokeWidth="1.7" strokeLinecap="round" d="M8 20h8M12 16.5V20" />
    </svg>
  )
}

function SecurityIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3.25 5.75 6v5.2c0 4.05 2.7 7.75 6.25 8.8 3.55-1.05 6.25-4.75 6.25-8.8V6L12 3.25Z"
      />
      <path strokeWidth="1.7" strokeLinecap="round" d="M8.8 12.2h6.4M12 9.4v5.6" />
    </svg>
  )
}

const EXPERIENCE_ICONS = {
  data: DataIcon,
  ops: OpsIcon,
  security: SecurityIcon,
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

  return (
    <div
      className="relative min-h-svh bg-navy text-slate"
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
            <div className="flex items-center gap-5 sm:gap-30">
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
            <div className="mt-6 w-min max-w-full">
              <h2 className="whitespace-nowrap text-lg font-medium text-slate-lightest sm:text-xl">
                Full Stack Developer | Full Stack Engineer
              </h2>
              <p className="mt-5 leading-relaxed text-slate">
                사용자 경험(UX)과 서버 성능, 데이터 아키텍처를 함께 고민하며 개발합니다.
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
                className="inline-flex items-center gap-2 rounded-full border border-slate/20 bg-navy-card/60 px-3 py-1.5 text-xs font-medium text-slate-light transition hover:border-mint/50 hover:text-mint"
              >
                <GithubIcon className="h-4 w-4" />
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://career.sw.or.kr/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate/20 bg-navy-card/60 px-3 py-1.5 text-xs font-medium text-slate-light transition hover:border-mint/50 hover:text-mint"
              >
                <ShieldIcon className="h-4 w-4" />
                KOSA 경력인증
              </a>
            </li>
            <li>
              <a
                href="mailto:dltmfdl6926@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-slate/20 bg-navy-card/60 px-3 py-1.5 text-xs font-medium text-slate-light transition hover:border-mint/50 hover:text-mint"
              >
                <MailIcon className="h-4 w-4" />
                Email
              </a>
            </li>
          </ul>
        </header>

        <main className="pt-16 lg:w-[52%] lg:py-24">
          <section id="about" className={sectionClassName} aria-label="About">
            <SectionHeading>About</SectionHeading>
            <div className="space-y-4 leading-7 text-slate">
              <p>
                사용자 인터페이스의 완성도부터 백엔드 데이터의 흐름까지, 웹 서비스 전체의 경험을
                설계합니다.
              </p>
              <p>
                Java와 Spring Boot 등 검증된 백엔드 기술 프레임워크와 안정적인 서버 아키텍처를
                바탕으로 직관적이고 재사용 가능한 UI 컴포넌트를 결합하여, 확장성과 유지보수성이
                뛰어난 시스템을 구축하는 것을 좋아합니다.
              </p>
              <p>
                프론트엔드의 세심한 UX부터 백엔드 데이터베이스 설계 및 RESTful API 구축까지, 웹
                서비스의 전체 여정을 End-to-End로 설계하고 개발합니다.
              </p>
              <p>
                작은 반응형 화면부터 고성능 서버 처리까지 데이터가 흐르는 모든 구간의 성능과 확장성을
                균형 있게 챙기는 것을 좋아합니다.
              </p>
              <p>
                모든 경력과 프로젝트 수행 이력은 KOSA(한국소프트웨어산업협회) 경력관리 체계를 통해
                투명하고 검증 가능한 데이터로 관리하고 있습니다.
              </p>
            </div>
          </section>

          <section id="experience" className={sectionClassName} aria-label="Experience">
            <SectionHeading>Experience</SectionHeading>
            <ul className="grid gap-4">
              {EXPERIENCES.map((item) => {
                const Icon = EXPERIENCE_ICONS[item.icon]
                return (
                  <li key={item.title}>
                    <article className="group rounded-xl border border-slate/15 bg-navy-card/40 p-5 transition hover:border-mint/30 hover:bg-navy-card/70">
                      <div className="flex items-start gap-4">
                        <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-mint/20 bg-mint/10 text-mint">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div className="min-w-0">
                          <h4 className="font-semibold leading-snug text-slate-lightest">
                            {item.title}
                          </h4>
                          <p className="mt-2 text-sm leading-6">{item.summary}</p>
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
                        </div>
                      </div>
                    </article>
                  </li>
                )
              })}
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

                        <ul className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <li
                              key={tag}
                              className="rounded-full border border-mint/30 bg-transparent px-3 py-1 text-xs font-medium text-mint"
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
    </div>
  )
}

export default App
