import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";


export const DATA = {
  name: "Brij Kalakheti",
  initials: "BK",
  url: "space",
  location: "Exton, PA",
  description:
    "Computer Science student passionate about <u>software engineering</u>, responsive web design, and building efficient, user-friendly applications.",
  summary:
    "I'm a passionate Computer Science student at [Penn State University](https://www.psu.edu/), with a lifelong love for technology and innovation. I blend academic excellence with practical experience in software development. My journey in programming began early with C, evolving into a comprehensive skill set encompassing [software development](#skills), cloud computing, and AI integration. My [project portfolio](#projects) demonstrates proficiency in technologies such as Node.js, Python, Go, and TypeScript. I'm eager to contribute my [skills](#skills) to cutting-edge projects in the tech industry.",
  avatarUrl: "/me3.png",
  skills: [
    "Python",
    "Go",
    "C#",
    "JavaScript",
    "TypeScript",
    "HTML/CSS",
    "SQL",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "Git",
    "Docker",
    "AWS",
    "MSSQL",
    "MongoDB",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "brk5407@psu.edu",
    tel: "+14846391360",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rkalaa",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/b-raj-k/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/GenixCS",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:brk5407@psu.edu",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  education: [
    {
      school: "The Pennsylvania State University",
      href: "https://www.psu.edu/",
      degree: "Bachelor of Science (BS)",
      logoUrl: "https://brand.psu.edu/images/backgrounds/penn-state-shield.jpg",
      description: "Awarded entrance scholarship for academic excellence. Relevant Coursework: Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, Software Engineering, Cloud Computing, Artificial Intelligence.",
    },
  ],

  work: [
    {
      company: "Cerebras Systems",
      href: "https://cerebras.ai/",
      badges: [],
      location: "Sunnyvale, CA",
      title: "Software Engineering Fellow",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cerebras_logo.svg/1200px-Cerebras_logo.svg.png",
      start: "Sep 2024",
      end: "Dec 2024",
      achievements: [
      ],
    },
    {
      company: "Medcominds",
      href: "https://www.medcominds.com/",
      badges: [],
      location: "Albany, NY",
      title: "Software Engineering Intern",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRArTkXMlZgAKtyEeoG8S3VAjwH2cwNeAbm8A&s",
      start: "July 2024",
      end: "Sep 2024",
      achievements: [
      ],
    },
  ],

  projects: [
    {
      title: "MotionMind",
      href: "google.com",
      dates: "2024",
      active: true,
      description:
        "space.",
      technologies: [
        "ExpressJS",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "FFMpeg",
      ],
      image: "motionlogo.png",
      links: [
        {
          type: "Website",
          href: "google.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/rkalaa/motionmind",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "SmartTube",
      href: "https://github.com/rkalaa/yt-clone",
      dates: "2024",
      active: true,
      description:
        "space",
      technologies: [
        "NodeJS",
        "Go",
        "Firebase",
        "Google Cloud Platform",
        "Docker",
        "NextJS",
      ],
      image: "",
      links: [
        {
          type: "Source",
          href: "https://github.com/rkalaa/yt-clone",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "ecoXchange",
      href: "https://github.com/rkalaa/ecoxchange",
      dates: "2024",
      active: true,
      description:
        "space",
      technologies: [
        "Flask",
        "MongoDB",
        "Docker",
        "AWS",
        "NextJS",
      ],
      image: "",
      links: [
        {
          type: "Source",
          href: "https://github.com/rkalaa/ecoxchange",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Reinforced Learning Maze",
      href: "https://github.com/rkalaa/RL-Maze",
      dates: "2024",
      active: true,
      description:
        "space",
      technologies: [
        "Python",
        "Bleak",
        "Matplotlib",
        "Pandas",
      ],
      image: "",
      links: [
        {
          type: "Source",
          href: "https://github.com/rkalaa/RL-Maze",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
  ],
  hackathons: [
    {
      title: "HackPSU",
      dates: "October 2024",
      location: "University Park, PA",
      description:
        "space",
      image:
        "https://brand.psu.edu/images/backgrounds/penn-state-shield.jpg",
      win: "2nd Place Winner",
      mlh: "https://devpost.com/software/motionmind",
      links: [
        {
          title: "Devpost Submission",
          icon: <Icons.devpost className="h-4 w-4" />,
          href: "https://devpost.com/software/motionmind",
        },
        {
          title: "GitHub Repo",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/rkalaa/motionmind"
        },
        {
          title: "Demo",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=AyuZZQGFBmw",
        },
        ]
    },
    {
      title: "CalHacks 11.0",
      dates: "November 2024",
      location: "San Francisco, CA",
      description:
        "space",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Seal_of_University_of_California%2C_Berkeley.svg",
      mlh: "https://devpost.com/software/dear",
      links: [
        {
          title: "Devpost Submission",
          icon: <Icons.devpost className="h-4 w-4" />,
          href: "https://devpost.com/software/dear"
        },
        {
          title: "GitHub Repo",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Dear-CalHacks/Dear-Backend",
        },
      ],
    },
    {
      title: "PennApps 2024",
      dates: "September 2024",
      location: "Philadelphia, Pennsylvania",
      description:
        "space",
      image: "https://storage.googleapis.com/admit-images/school-logos-med-school/university_of_pennsylvania.svg",
      links: [
        {
          title: "Devpost Submission",
          icon: <Icons.devpost className="h-4 w-4" />,
          href: "https://devpost.com/software/ecoxchange",
        },
        {
          title: "GitHub Repo",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/rkalaa/ecoxchange",
        },
        
      ],
    },
  ],
} as const;

export type Project = typeof DATA.projects[number];