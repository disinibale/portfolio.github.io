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
  console.log(mouseCoordinate)
  return (
    <div
      onMouseEnter={() => setIsMouseEnter(true)}
      onMouseLeave={() => setIsMouseEnter(false)}
      onMouseMove={(e) => setMouseCoordinate({ x: e.pageX, y: e.pageY })}
      onMouseOver={(e) => setMouseCoordinate({ x: e.pageX, y: e.pageY })}
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
              <p className="mt-4 max-w-xs leading-normal typewriter">An experienced Web Developer with expertise using Typescript & Go Programming Language</p>
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
                <a className='block hover:text-slate-200' href='https://github.com/disinibale' target='_blank'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-6 w-6" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                </a>
              </li>
              <li className="mr-5 text-xs">
                <a className='block hover:text-slate-200' href='https://www.linkedin.com/in/disinibale' target='_blank'>
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
                <p className='mb-4'>In 2013, I learned how to make a mod for the game <a href='https://www.rockstargames.com/games/sanandreas' target='_blank' className='font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 cursor-pointer'>Grand Theft Auto: San Andreas</a> and uploaded the mod on a dedicated mod site for that game. Without realizing it, lots of people use my mod to install in their game, and lots of requests to make more mods.</p>
                <p className='mb-4'>Without realizing it, I was addicted to making a program and I decided at that time to become a game developer. But who would have thought, today I become a <span className='font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 cursor-pointer'>Web Developer</span>.</p>
                <p className='mb-4'>Now, I work for a startup in the field of Digital Freight Forwarding Company called <span className='font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300'>Andalin</span> which has 2 main products <span className='font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300'>Andalin Shipping</span> and <span className='font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300'>Syncargo</span> (SaaS). My main role at the moment is to develop and maintain products that are being developed by the Andalin team, as well as to conduct research and development in order to provide cool features for Andalin customers.</p>
                <p className='mb-4'>Sometimes, when I'm not programming, I usually actively play and develop a FiveM server (a framework to play Grand Theft Auto V: Online), probably play chess, or watch some documentaries.</p>
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
                      <header className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2' aria-label='2022 - Present'>Oct 22 - Present</header>
                      <div className='z-10 sm:col-span-6'>
                        <h3 className='font-medium leading-snug text-slate-200'>
                          <div>
                            <a href='https://www.andalin.com' target='_blank' className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base'>
                              <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                              <span>
                                Senior Backend Engineer &nbsp;·
                                <span className='inline-block'>
                                  &nbsp; Andalin
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                                </span>
                              </span>
                            </a>
                          </div>
                        </h3>
                        <p className='mt-2 text-sm leading-normal'>
                          Developed a highly advanced back-end service that utilized OCR and NLP technologies to read Bill of Lading Documents. Additionally, I created a framework for generating customized Bill of Lading Documents based on customer inputs and product types. Moreover, I was responsible for architecting and developing internal web services to handle high-demand traffic for the FIATA Paperless service, enabling standardized Bill of Lading issuance on behalf of Andalin Customers. Furthermore, I seamlessly integrated an internal web service for document signatories, ensuring seamless integration with a third-party service for legal, finance, and commercial purposes. These achievements demonstrate my technical expertise and ability to provide innovative solutions while effectively collaborating with cross-functional teams.
                        </p>
                        <ul className='mt-2 flex flex-wrap'>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>Node Js</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>Go Lang</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>Express</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>Typescript</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>NestJs</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>GIN Framework</div>
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
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>Amazon Extract</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className='mb-12'>
                    <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <header className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2' aria-label='2022 - Present'>May 22 - Oct 22</header>
                      <div className='z-10 sm:col-span-6'>
                        <h3 className='font-medium leading-snug text-slate-200'>
                          <div>
                            <a href='https://cartenz.co.id/' target='_blank' className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base'>
                              <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                              <span>
                                Lead Fullstack Engineer &nbsp;·
                                <span className='inline-block'>
                                  &nbsp; Cartenz Group
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg>
                                </span>
                              </span>
                            </a>
                          </div>
                        </h3>
                        <p className='mt-2 text-sm leading-normal'>
                          Involved integrating the existing Marketa app with Facebook's Graph API to enhance messaging capabilities, campaign management, and Instagram Direct Messaging. I successfully integrated OAuth Facebook User Authentication to provide a seamless login experience. Additionally, I played a significant role in creating new campaign management features for efficient ad management. Furthermore, I diligently addressed bug fixes and improved the app's overall performance, ensuring a smoother and enhanced user experience.
                        </p>
                        <ul className='mt-2 flex flex-wrap'>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>Node Js</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>Express</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>ReactJS</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>NestJs</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>MongoDb</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>Postgresql</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>Socket.IO</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>Supabase</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>GCP</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>Firebase</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className='mb-12'>
                    <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <header className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2' aria-label='2022 - Present'>Feb 22 - Aug 22</header>
                      <div className='z-10 sm:col-span-6'>
                        <h3 className='font-medium leading-snug text-slate-200'>
                          <div>
                            <a href='https://edi-indonesia.co.id' target='_blank' className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base'>
                              <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                              <span>
                                Fullstack Engineer &nbsp;·
                                <span className='inline-block'>
                                  &nbsp; <span className='tracking-tight'>Electronic Digital Interchange</span>
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg>
                                </span>
                              </span>
                            </a>
                          </div>
                        </h3>
                        <p className='mt-2 text-sm leading-normal'>
                          I have had the privilege to contribute to impactful projects for the Indonesia Ministry of Finance. I have taken part in authoring code fixes and enhancements to ensure the robustness and future optimization of applications. Leading seamless migrations to modern architectures powered by Node.js and React.js, By redesigning web applications, I have aimed to deliver captivating user experiences with intuitive navigation and visually appealing interfaces. Moreover, I have had the opportunity to improve the performance of the international import and export gateway architecture, streamlining data transfer and enhancing efficiency through RESTful APIs. It is with a deep sense of gratitude that I offer my expertise to bring value and success to software projects.
                        </p>
                        <ul className='mt-2 flex flex-wrap'>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>Node Js</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>Express</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>Typescript</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>NestJs</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>ReactJs</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>Postgresql</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>Cassandra DB</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>Microservices</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>Dev Ops</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>MongoDB</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>Message Broker</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>Kubernetes</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>OAuth</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>Lambda Function</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className='mb-12'>
                    <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <header className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2' aria-label='2022 - Present'>Sep 21 - Feb 22</header>
                      <div className='z-10 sm:col-span-6'>
                        <h3 className='font-medium leading-snug text-slate-200'>
                          <div>
                            <a href='https://eva.id' target='_blank' className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base'>
                              <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                              <span>
                                Fullstack Developer &nbsp;·
                                <span className='inline-block'>
                                  &nbsp; Elektronik Virtual Asisten
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg>
                                </span>
                              </span>
                            </a>
                          </div>
                        </h3>
                        <p className='mt-2 text-sm leading-normal'>
                          I have had contribute to impactful projects that have transformed the customer experience. One such project involved developing a user-friendly web console system for the administration panel, empowering customers to effortlessly create chatbots and enhance their knowledge base. Additionally as part of my responsibilities, I successfully designed and implemented a secure payment gateway, and enhancing the functionality of the web application. To ensure compatibility across web and mobile platforms.
                        </p>
                        <ul className='mt-2 flex flex-wrap'>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>PHP</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>Laravel</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>Lumen</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>Postgresql</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>JQuery</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>AJAX</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>Linux</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>Dev Ops</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>Agile / Scrum</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className='mb-12'>
                    <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <header className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2' aria-label='2022 - Present'>Jan 18 - Oct 21</header>
                      <div className='z-10 sm:col-span-6'>
                        <h3 className='font-medium leading-snug text-slate-200'>
                          <div>
                            <a className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base'>
                              <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                              <span>
                                Freelance &nbsp;·
                                <span className='inline-block'>
                                  &nbsp; Fiverr | Project.id
                                </span>
                              </span>
                            </a>
                          </div>
                        </h3>
                        <p className='mt-2 text-sm leading-normal'>
                          Developing a wide range of web applications to cater to diverse user needs, including point of sale applications, marketplaces, and attendance systems. Throughout these projects, I have prioritized the creation of reusable code and libraries, enabling efficient development for future use. To enhance performance, I have diligently optimized and maintained the applications, ensuring maximum speed and scalability. Furthermore, I have placed great importance on cross-platform optimization, guaranteeing a great and responsive experience for mobile users.
                        </p>
                        <ul className='mt-2 flex flex-wrap'>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>SQL</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>Laravel</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>Typescript</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>Fastify</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>PHP</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>Webpack</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>Babel</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>Node Js</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>Express</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>React JS</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>Wordpress</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>Mongo DB</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>Shared Hosting</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className='mb-12'>
                    <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <header className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2' aria-label='2022 - Present'>Jan 18 - Oct 21</header>
                      <div className='z-10 sm:col-span-6'>
                        <h3 className='font-medium leading-snug text-slate-200'>
                          <div>
                            <a className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base'>
                              <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                              <span>
                                Backend Engineer (Intern) &nbsp;·
                                <span className='inline-block'>
                                  &nbsp; Rail System
                                </span>
                              </span>
                            </a>
                          </div>
                        </h3>
                        <p className='mt-2 text-sm leading-normal'>
                          Contributed to projects includes creating a server and database infrastructure for a microservice architecture using Docker. Additionally, I have leveraged PHP with the Laravel Framework to design and develop over 10 REST APIs. Another significant accomplishment was the development of a web-based new student registration application, which has been successfully utilized by SMK TI Garuda Nusantara Cimahi for a span of three years.
                        </p>
                        <ul className='mt-2 flex flex-wrap'>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>PHP</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>Laravel</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>Docker</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>Microservices</div>
                          </li>
                          <li className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>API Gateway</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className='mb-12'>
                    <a href='#' className='inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group'>
                      <span>
                        <span className='border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none'>Download </span>
                        <span className='whitespace-nowrap'>
                          <span className='border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none'>Résumé</span>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" aria-hidden="true"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"></path></svg>
                        </span>
                      </span>
                    </a>
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