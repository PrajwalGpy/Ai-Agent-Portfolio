"use client";

import {
  FaNode,
  FaReact,
  FaRobot,
  FaPython,
  FaCogs,
  FaBrain,
  FaLink,
} from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiOpenai,
  SiZapier,
} from "react-icons/si";
import {
  SiMicrosoftexcel,
  SiPython,
  SiSqlite,
  SiTableau,
  SiPowerbi,
  SiJupyter,
  SiPandas,
  SiNumpy,
} from "react-icons/si";
import { MdAutoFixHigh, MdIntegrationInstructions } from "react-icons/md";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import Image from "next/image";

import Container from "../components/ui/container";
import Card from "../components/card";
import LogoCard from "../components/logo-card";
import Badge from "../components/ui/badge";
import CursorFollow from "../components/cursorFollow";
import Contact from "../components/contact";

const HomePage = () => {
  return (
    <Container>
      <CursorFollow />
      <div className="flex flex-col gap-y-4 md:flex-row max-w-screen-lg mx-auto md:mt-8">
        {/* HERO */}
        <div className="md:w-full text-nowrap md:h-full md:sticky top-8">
          <section id="hero">
            <div className="relative flex flex-col justify-center gap-y-4 p-4 px-6 mt-8">
              <div className="md:hidden absolute top-0 left-0 bg-accent w-56 h-6 rounded-full blur-3xl opacity-65" />
              <h3 className="text-xl font-semibold text-gray-200">
                Hello, I&apos;m 👋
              </h3>
              <h1 className="text-5xl font-bold bg-gradient-to-l from-purple-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text">
                Prajwal Gopal Poojary
              </h1>
              <p className="text-sm md:text-base text-gray-400">
                A passionate{" "}
                <span className="text-accent">
                  n8n AI Automation Specialist / No-Code Workflow Engineer.
                </span>
              </p>
              <a
                href={`https://drive.google.com/file/d/1Vd7Ls3VmFG8i7w1O2_zfOzy7t_4kpp8T/view?usp=sharing`}
                className="border text-center border-[#1D1D1D] py-4 px-6 rounded-lg w-40 text-sm text-accent/90"
              >
                Download CV
              </a>
            </div>
          </section>
          <div className="hidden md:block">
            <Contact />
          </div>
        </div>
        {/* ABOUT */}
        <div className="md:max-w-lg md:mx-auto md:mt-8">
          <section id="about">
            <div className="relative flex flex-col justify-center gap-y-4 p-4 px-6">
              <h3 className="text-xl font-semibold text-gray-100">About</h3>
              <p className="text-sm md:text-base text-gray-400">
                n8n AI Automation Specialist with proven experience building
                intelligent workflow solutions that eliminate manual processes
                and integrate AI capabilities. I specialize in creating{" "}
                <span className="font-semibold text-accent">
                  no-code automation systems
                </span>
                , API integrations, and AI-powered applications that reduce
                manual work by{" "}
                <span className="text-accent">
                  80-90% while maintaining professional quality output
                </span>
                .
              </p>
              <p className="text-sm md:text-base text-gray-400">
                My expertise spans across{" "}
                <span className="font-semibold text-accent">
                  n8n, Zapier, Make (Integromat)
                </span>
                , and I have successfully deployed automated systems for{" "}
                <span className="font-semibold text-accent">
                  invoice processing
                </span>
                , content creation, virtual assistants, and web applications.
              </p>
              <p className="text-sm md:text-base text-gray-400">
                I excel at integrating{" "}
                <span className="font-semibold text-accent">
                  OpenAI API, GPT-4, Claude 3.5 Sonnet, and Google Gemini 2.0
                </span>
                , creating seamless workflows that combine AI capabilities with
                practical business solutions. My background in data analysis
                provides a strong foundation for understanding data flows and
                optimization.
              </p>
              <p className="text-sm md:text-base text-gray-400">
                I am passionate about leveraging{" "}
                <span className="font-semibold text-accent">
                  AI automation to solve real-world challenges
                </span>
                , creating systems that operate 24/7 and deliver consistent,
                professional results.
              </p>
              <p className="text-sm md:text-base text-gray-400">
                When I&apos;m not building automation workflows, you&apos;ll
                find me exploring new AI technologies, experimenting with
                no-code platforms, or gaming.
              </p>
            </div>
          </section>

          {/* TOOLS */}
          <section id="tools">
            <div className="relative flex flex-col justify-center gap-y-4 p-4 px-6">
              <h3 className="text-xl font-semibold text-gray-100">Tools</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <LogoCard>
                  <FaCogs size={25} />
                  <p className="text-sm text-accent/50">n8n</p>
                </LogoCard>
                <LogoCard>
                  <FaPython size={25} />
                  <p className="text-sm text-accent/50">Python</p>
                </LogoCard>
                <LogoCard>
                  <SiOpenai size={25} />
                  <p className="text-sm text-accent/50">OpenAI API</p>
                </LogoCard>
                <LogoCard>
                  <SiZapier size={25} />
                  <p className="text-sm text-accent/50">Zapier</p>
                </LogoCard>
                <LogoCard>
                  <MdAutoFixHigh size={25} />
                  <p className="text-sm text-accent/50">Make</p>
                </LogoCard>
                <LogoCard>
                  <FaLink size={25} />
                  <p className="text-xs gap-4 text-center text-accent/50">
                    Webhook APIs
                  </p>
                </LogoCard>
                <LogoCard>
                  <HiOutlineGlobeAlt size={25} />
                  <p className="text-sm text-accent/50">Lovable</p>
                </LogoCard>
                <LogoCard>
                  <FaRobot size={25} />
                  <p className="text-sm text-accent/50">AI Agents</p>
                </LogoCard>
              </div>
            </div>
          </section>

          {/* PROJECT */}
          <section id="projects">
            <div className="relative flex flex-col justify-center gap-y-4 p-4 px-6">
              <h3 className="text-xl font-semibold text-gray-100">Projects</h3>
              <a
                className="group"
                href="https://github.com/PrajwalGpy/Personal-Assistant"
                target="_blank"
              >
                <Card>
                  <div className="flex gap-4 items-center">
                    <div className="relative min-w-32 min-h-20 max-w-32 max-h-20 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                      <FaRobot size={40} className="text-accent/60" />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <p className="flex justify-between items-center text-semibold text-accent/80 md:group-hover:text-accent transition">
                        Multi-Agent AI Personal Assistant System{" "}
                        <span className="opacity-50 md:group-hover:opacity-100 transition">
                          ↗
                        </span>{" "}
                      </p>
                      <p className="text-xs font-normal text-accent/50">
                        Built comprehensive AI assistant system with specialized
                        agents for email management, calendar coordination, and
                        content creation, operating 24/7 through Telegram
                        interface.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap mt-4">
                    <Badge>n8n</Badge>
                    <Badge>GPT-4</Badge>
                    <Badge>Claude 3.5</Badge>
                    <Badge>Telegram API</Badge>
                    <Badge>AI Automation</Badge>
                  </div>
                </Card>
              </a>
              <a
                href="https://github.com/PrajwalGpy/Invoice-Processing-Automation"
                target="_blank"
                className="group"
              >
                <Card>
                  <div className="flex gap-4 items-center">
                    <div className="relative min-w-32 min-h-20 max-w-32 max-h-20 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                      <MdIntegrationInstructions
                        size={40}
                        className="text-accent/60"
                      />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <p className="flex justify-between text-semibold text-accent/80 md:group-hover:text-accent transition">
                        Intelligent Invoice Processing Automation{" "}
                        <span className="opacity-50 md:group-hover:opacity-100 transition">
                          ↗
                        </span>{" "}
                      </p>
                      <p className="text-xs font-normal text-accent/50">
                        Developed format-flexible invoice processing system that
                        automatically extracts 8 key data fields from any PDF
                        layout using Google Gemini 2.0 AI.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap mt-4">
                    <Badge>n8n</Badge>
                    <Badge>Google Gemini 2.0</Badge>
                    <Badge>Google Drive API</Badge>
                    <Badge>PDF Processing</Badge>
                    <Badge>AI Automation</Badge>
                  </div>
                </Card>
              </a>
              <a
                href="https://github.com/PrajwalGpy/LinkedIn-Content-Automation-Workflow"
                target="_blank"
                className="group"
              >
                <Card>
                  <div className="flex gap-4 items-center">
                    <div className="relative min-w-32 min-h-20 max-w-32 max-h-20 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                      <FaBrain size={40} className="text-accent/60" />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <p className="flex justify-between text-semibold text-accent/80 md:group-hover:text-accent transition">
                        RAG-Powered LinkedIn Content Automation{" "}
                        <span className="opacity-50 md:group-hover:opacity-100 transition">
                          ↗
                        </span>{" "}
                      </p>
                      <p className="text-xs font-normal text-accent/50">
                        Built complete content creation pipeline reducing 2+
                        hours of manual work to 2 minutes, integrating web
                        research, content generation, and custom graphics.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap mt-4">
                    <Badge>n8n</Badge>
                    <Badge>OpenRouter</Badge>
                    <Badge>Tavily</Badge>
                    <Badge>RAG</Badge>
                    <Badge>Content Automation</Badge>
                    <Badge>OpenAI Image API</Badge>
                  </div>
                </Card>
              </a>
              <a
                href="https://github.com/PrajwalGpy/Past-Life-Finder"
                target="_blank"
                className="group"
              >
                <Card>
                  <div className="flex gap-4 items-center">
                    <div className="relative min-w-32 min-h-20 max-w-32 max-h-20 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                      <HiOutlineGlobeAlt size={40} className="text-accent/60" />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <p className="flex justify-between text-semibold text-accent/80 md:group-hover:text-accent transition">
                        AI-Powered Past Life Finder Web Application{" "}
                        <span className="opacity-50 md:group-hover:opacity-100 transition">
                          ↗
                        </span>{" "}
                      </p>
                      <p className="text-xs font-normal text-accent/50">
                        Developed full-stack web application using Lovable
                        no-code platform for frontend and n8n for AI-powered
                        backend processing, creating mystical past life
                        profiles.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap mt-4">
                    <Badge>Lovable</Badge>
                    <Badge>n8n</Badge>
                    <Badge>OpenAI API</Badge>
                    <Badge>Webhook Integration</Badge>
                    <Badge>No-Code Development</Badge>
                    <Badge>Full-Stack</Badge>
                  </div>
                </Card>
              </a>
            </div>
          </section>
          {/* CONTACT */}
          <div className="md:hidden">
            <Contact />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
