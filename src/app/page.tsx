import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA, Project } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import NavBar from "@/components/navbar";
import dynamic from 'next/dynamic';
import { ThemeProvider } from "@/components/theme-provider";
import { Icons } from "@/components/icons";

const BLUR_FADE_DELAY = 0.04;

const DynamicHero = dynamic(() => import('@/components/hero'), { ssr: false });

export default function Page() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <NavBar />
      <main className="flex flex-col min-h-[100dvh] space-y-8 max-w-4xl mx-auto px-4 pt-0 pb-20">
        <div className="-mt-12">
          <DynamicHero />
        </div>
        <About />
        <Skills />
        <Education />
        <WorkExperience />
        <Projects />
        <Hackathons />
        <Contact />
      </main>
    </ThemeProvider>
  );
}

function About() {
  return (
    <section id="about">
      <SectionHeader title="About" delay={BLUR_FADE_DELAY * 4} className="mb-2" />
      <BlurFade delay={BLUR_FADE_DELAY * 5}>
        <Markdown className="prose max-w-full text-pretty font-sans text-muted-foreground dark:prose-invert prose-p:my-0 prose-p:leading-snug [&>p]:mb-3">
          {DATA.summary}
        </Markdown>
      </BlurFade>
    </section>
  );
}

function Education() {
  return (
    <section id="education">
      <SectionHeader title="Education" delay={BLUR_FADE_DELAY * 6} />
      {DATA.education.map((education, id) => (
        <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 7 + id * 0.05}>
          <ResumeCard
            href={education.href}
            logoUrl={education.logoUrl}
            altText={education.school}
            title={education.school}
            subtitle={education.degree} period={""}          />
        </BlurFade>
      ))}
    </section>
  );
}

function WorkExperience() {
  return (
    <section id="work">
      <SectionHeader title="Work Experience" delay={BLUR_FADE_DELAY * 8} />
      {DATA.work.map((work, id) => (
        <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 9 + id * 0.05}>
          <ResumeCard
            logoUrl={work.logoUrl}
            altText={work.company}
            title={work.company}
            subtitle={work.title}
            href={work.href}
            badges={work.badges}
            period={`${work.start} - ${work.end ?? "Present"}`}
            achievements={work.achievements}
          />
        </BlurFade>
      ))}
    </section>
  );
}

function Skills() {
  return (
    <section id="skills">
      <SectionHeader title="Skills" delay={BLUR_FADE_DELAY * 10} />
      <div className="flex flex-wrap gap-2">
        {DATA.skills.map((skill, id) => (
          <BlurFade key={skill} delay={BLUR_FADE_DELAY * 11 + id * 0.05}>
            <Badge>{skill}</Badge>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects">
      <SectionHeader title="Projects" delay={BLUR_FADE_DELAY * 12} />
      <div className="grid gap-6 sm:grid-cols-2">
        {DATA.projects.map((project, index) => (
          <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 13 + index * 0.5}>
            <ProjectCard
              href={project.href}
              title={project.title}
              description={project.description}
              dates={project.dates}
              tags={project.technologies}
              image={project.image}
              className="group hover:border-primary/50 transition-colors"
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}

function Hackathons() {
  return (
    <section id="hackathons">
      <SectionHeader title="Hackathons" delay={BLUR_FADE_DELAY * 14} />
      <div className="flex flex-col gap-6">
        {DATA.hackathons.map((hackathon, index) => (
          <BlurFade key={hackathon.title} delay={BLUR_FADE_DELAY * 15 + index * 0.5}>
            <HackathonCard
              title={hackathon.title}
              description={hackathon.description}
              location={hackathon.location}
              dates={hackathon.dates}
              image={hackathon.image}
              links={hackathon.links}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
function Contact() {
  return (
    <section id="contact" className="text-center">
      <SectionHeader title="Get in Touch" delay={BLUR_FADE_DELAY * 17} />
      <BlurFade delay={BLUR_FADE_DELAY * 18}>
        <p className="text-muted-foreground mb-4">
          Want to chat? Feel free to{" "}
          <Link href={`mailto:brk5407@psu.edu`} className="text-primary hover:underline">
            send me an email
          </Link>{" "}
          and I&apos;ll respond as soon as I can.
        </p>
        <div className="flex justify-center space-x-4">
          {Object.entries(DATA.contact.social).map(([name, social]) => (
            <Link key={name} href={social.url} className="text-muted-foreground hover:text-primary">
              <social.icon className="size-6" />
            </Link>
          ))}
        </div>
      </BlurFade>
    </section>
  );
}

function SectionHeader({ title, delay, className }: { title: string; delay: number; className?: string }) {
  return (
    <BlurFade delay={delay}>
      <h2 className={`text-2xl font-bold mb-2 ${className}`}>{title}</h2>
    </BlurFade>
  );
}