import { useEffect, useState } from 'react'

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'KOSA Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
]

const EXPERIENCES = [
  {
    period: '2024 — Present',
    title: 'Frontend Developer',
    org: 'KOSA 경력관리 등록',
    role: '웹 프론트엔드 개발 · UI 구현',
    summary:
      '사용자 흐름을 기준으로 화면을 설계하고, React 기반 인터페이스를 구현했습니다. 접근성과 반응형 레이아웃을 우선해 다양한 디바이스에서 일관된 경험을 만드는 데 집중했습니다.',
    tags: ['React', 'JavaScript', 'Tailwind CSS'],
    verified: true,
  },
  {
    period: '2023 — 2024',
    title: 'Web Development Training',
    org: 'KOSA 연계 교육 과정',
    role: '웹 개발 실무 교육 · 팀 프로젝트',
    summary:
      'HTML/CSS/JavaScript부터 SPA 구조까지 실무 중심으로 학습하고, 팀 단위로 기획·구현·회고를 반복했습니다. 요구사항을 화면으로 옮기는 과정을 KOSA 이력에 맞춰 정리했습니다.',
    tags: ['HTML', 'CSS', 'Git', 'Vite'],
    verified: true,
  },
]

const PROJECTS = [
  {
    title: 'roozFolio',
    description:
      'Brittany Chiang 스타일의 2단 레이아웃을 참고한 개인 포트폴리오. 고정 사이드바와 스크롤 메인, KOSA 경력 카드와 프로젝트 아카이브를 한 페이지에서 보여줍니다.',
    tags: ['React', 'Vite', 'Tailwind CSS'],
    href: 'https://github.com/roozLog',
  },
  {
    title: 'UX-first Landing',
    description:
      '정보 위계와 여백을 중심으로 구성한 랜딩 페이지. 핵심 메시지와 CTA가 한눈에 들어오도록 타이포그래피와 컬러 대비를 조정했습니다.',
    tags: ['React', 'CSS', 'Accessibility'],
    href: 'https://github.com/roozLog',
  },
  {
    title: 'Dashboard UI',
    description:
      '데이터 밀도는 유지하면서도 읽기 쉽게 정리한 대시보드 프로토타입. 카드·뱃지·필터 패턴을 재사용해 확장 가능한 컴포넌트 구조를 연습했습니다.',
    tags: ['JavaScript', 'React', 'UI'],
    href: 'https://github.com/roozLog',
  },
]

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

function ArrowIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.25-7.25a.75.75 0 0 0 0-1.06L6.28.22a.75.75 0 0 0-1.06 1.06L10.94 7 5.22 12.72a.75.75 0 0 0 0 1.06Z"
        clipRule="evenodd"
      />
    </svg>
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
          <section id="about" className="scroll-mt-24 mb-20 lg:mb-28" aria-label="About">
            <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.18em] text-slate-lightest lg:sr-only">
              About
            </h3>
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

          <section id="experience" className="scroll-mt-24 mb-20 lg:mb-28" aria-label="KOSA Experience">
            <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.18em] text-slate-lightest lg:sr-only">
              KOSA Experience
            </h3>
            <ol className="group/list space-y-4">
              {EXPERIENCES.map((item) => (
                <li key={item.title}>
                  <article className="group relative grid gap-1 rounded-lg p-5 transition hover:bg-navy-card/60 sm:grid-cols-[7.5rem_1fr] sm:gap-6">
                    <p className="mb-1 font-mono text-xs uppercase tracking-wide text-slate sm:mb-0">
                      {item.period}
                    </p>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="font-semibold text-slate-lightest group-hover:text-mint">
                          {item.title}
                        </h4>
                        {item.verified && (
                          <span className="inline-flex items-center gap-1 rounded-full border border-mint/30 bg-mint/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-mint">
                            <ShieldIcon className="h-3 w-3" />
                            KOSA 검증
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-sm text-slate-light">{item.org}</p>
                      <p className="mt-0.5 text-sm text-slate">{item.role}</p>
                      <p className="mt-3 text-sm leading-6">{item.summary}</p>
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
                  </article>
                </li>
              ))}
            </ol>
          </section>

          <section id="projects" className="scroll-mt-24 mb-20 lg:mb-28" aria-label="Projects">
            <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.18em] text-slate-lightest lg:sr-only">
              Projects
            </h3>
            <ul className="space-y-4">
              {PROJECTS.map((project) => (
                <li key={project.title}>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group block rounded-lg p-5 transition hover:bg-navy-card/60"
                  >
                    <h4 className="inline-flex items-center gap-2 font-semibold text-slate-lightest group-hover:text-mint">
                      {project.title}
                      <ArrowIcon className="h-3 w-3 -translate-x-0.5 translate-y-0.5 rotate-[-45deg] transition group-hover:translate-x-0 group-hover:translate-y-0" />
                    </h4>
                    <p className="mt-2 text-sm leading-6">{project.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full bg-mint/10 px-3 py-1 text-xs font-medium text-mint"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-slate-light">
                      <GithubIcon className="h-3.5 w-3.5" />
                      GitHub
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section id="skills" className="scroll-mt-24 mb-16" aria-label="Skills">
            <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.18em] text-slate-lightest lg:sr-only">
              Skills
            </h3>
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

          <footer className="max-w-md pb-8 text-sm leading-6 text-slate">
            <p>
              레이아웃은{' '}
              <a
                className="text-slate-lightest underline decoration-slate/40 underline-offset-4 hover:text-mint"
                href="https://brittanychiang.com/"
                target="_blank"
                rel="noreferrer"
              >
                Brittany Chiang
              </a>
              의 포트폴리오에서 영감을 받았습니다. 경력 카드의 기간·역할은 실제 KOSA 등록 내용에
              맞게 수정해 사용하세요.
            </p>
          </footer>
        </main>
      </div>
    </div>
  )
}

export default App
