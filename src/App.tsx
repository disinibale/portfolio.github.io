import { useEffect, useRef, useState } from 'react';
import './main.css'

function App() {
  const [isMouseEnter, setIsMouseEnter] = useState<boolean>(false)
  const [mouseCoordinate, setMouseCoordinate] = useState<{ x: number, y: number }>({ x: 0, y: 0 })

  const backgroundRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const bodyClassList = ["bg-slate-900", "leading-relaxed", "text-slate-400", "antialiased", "selection:bg-teal-300", "selection:text-teal-900"];
    const root = document.getElementsByTagName('html')[0]

    for (const el of bodyClassList) {
      document.body.classList.add(el);
    }
    root.classList.add('scroll-smooth')
  }, []);
  return (
    <div
      onMouseEnter={() => setIsMouseEnter(true)}
      onMouseLeave={() => setIsMouseEnter(false)}
      onMouseMove={(e) => setMouseCoordinate({ x: e.pageX, y: e.pageY })}
      id="app"
      className="relative">
      <div
        ref={backgroundRef}
        className="pointer-events-none fixed inset-0 z-20 transition ease-in-out duration-300 lg:absolute"
        style={{
          background: isMouseEnter ? `radial-gradient(450px at ${mouseCoordinate?.x}px ${mouseCoordinate?.y}px, rgba(29, 78, 216, 0.15), transparent 80%)` : ''
        }}
      />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <a className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0">A</a>
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:min-h-screen lg:w-1/2 lg:flex-col justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">Muhamad Iqbal Nurzaman</h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Senior Backend Engineer</h2>
              <p className="mt-4 max-w-xs leading-normal">Ready to create your dream Web Services</p>
              <nav className="nav hidden lg:block">
                <ul className="mt-16 w-max">
                  <li>
                    <a className="group flex items-center py-3" href="#about">
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">About</span>
                    </a>
                  </li>
                  <li>
                    <a className="group flex items-center py-3" href="#experience">
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Experience</span>
                    </a>
                  </li>
                  <li>
                    <a className="group flex items-center py-3" href="#projects">
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Projects</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <ul className="ml-1 mt-8 flex items-center">
              <li className="mr-5 text-xs">
                <a className='block hover:text-slate-200' href='#'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-6 w-6" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                </a>
              </li>
              <li className="mr-5 text-xs">
                <a className='block hover:text-slate-200' href='#'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg>
                </a>
              </li>
            </ul>
          </header>
          <main id="content" className='pt-24 lg:w-1/2 lg:py-24'>
            <section id="about" className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'>
              <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
                <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>About</h2>
              </div>
              <div>
                <p className='mb-4'>From an early age, computers held an irresistible allure for me. It all began when my father introduced me to the world of technology with used PCs. Intrigued by their capabilities, my fascination with programming and networking took root. I vividly recall the transformative moment when I delved into modding GTA San Andreas, igniting a lifelong passion for programming.</p>
                <p className='mb-4'>This newfound love propelled me on a journey of exploration and learning. HTML, CSS, JavaScript, Java, C, and network programming became my playground as I continuously expanded my skill set. It was during this time that I discovered the immense power of Node.js, an influential runtime environment for server-side JavaScript.</p>
                <p className='mb-4'>Node.js opened up boundless possibilities in web development. Its non-blocking, event-driven architecture captivated me, allowing me to build scalable server applications with JavaScript. Harnessing the extensive ecosystem of Node.js libraries and frameworks, I honed my craft in constructing robust web solutions.</p>
                <p className='mb-4'>Driven by my dreams, I pursued a software engineering major at a vocational high school while gaining practical experience through freelancing and collaborating with diverse entities. This hands-on journey led me to work alongside the Indonesian Ministry of Finance and innovative startups. Throughout these experiences, my expertise in Node.js played a pivotal role in developing cutting-edge solutions.</p>
                <p>Today, I find myself at Andalin, a dynamic startup specializing in digital freight forwarding. Empowered by a talented team, I am inspired to push boundaries and deliver innovative solutions leveraging the power of Node.js. Looking back, I am proud of the progress made since those early days of exploring computers. Yet, my excitement to grow and evolve as a software engineer knows no bounds. With every line of code written and every challenge conquered, I am reminded of the limitless opportunities that lie ahead.</p>
              </div>
            </section>
            <section id="experience">
              <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
                <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>Experience</h2>
              </div>
              <div>
                <ol className='group/list'>
                  <li className='mb-12'>
                    <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <header className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2' aria-label='2022 - Present'>2022 - Present</header>
                      <div className='z-10 sm:col-span-6'>
                        <h3 className='font-medium leading-snug text-slate-200'>
                          <div>
                            <a href='https://www.andalin.com' target='_blank' className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base'>
                              <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                              <span>
                                Senior Backend Engineer &nbsp;·
                                <span className='inline-block'>
                                  &nbsp; Andalin
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg>
                                </span>
                              </span>
                            </a>
                          </div>
                        </h3>
                        <p className='mt-2 text-sm leading-normal'>
                          Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.
                        </p>
                        <ul className='mt-2 flex flex-wrap'>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>Node Js</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>Typescript</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>MySQL</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>Web Socket</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>Microservices</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>Dev Ops</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>AWS</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </section>
            <section id="projects"></section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;