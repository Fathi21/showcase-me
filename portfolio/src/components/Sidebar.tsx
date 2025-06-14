import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const techStack = [
  "PHP", "Laravel", "JavaScript", "React.js", "Node.js", "Next.js",
  "MySQL", "PostgreSQL", "Git", "Docker", "PHPUnit", "CSS", "Andl", "Tailwind"
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/yourprofile", text: "yourusername" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/yourprofile", text: "yourname" },
  { icon: Twitter, label: "X", href: "https://x.com/yourhandle", text: "@yourhandle" },
  { icon: Mail, label: "Email", href: "mailto:you@email.com", text: "you@email.com" },
];

const Sidebar = () => (
  <aside className="sidebar-iterm2 w-full flex flex-col gap-6">
    {/* Profile */}
    <div className="flex flex-col items-center">
      <Avatar className="w-20 h-20 mb-3 border-2 border-[hsl(225,18%,18%)]">
        <AvatarImage src="/profile.jpg" alt="Your Name" />
        <AvatarFallback>YN</AvatarFallback>
      </Avatar>
      <div className="text-base font-semibold mb-0.5 text-[hsl(199,97%,61%)] tracking-tight">Your Name</div>
      <div className="text-xs text-[hsl(220,14%,70%)] mb-2 text-center">
        Sr. Software Engineer | Node.js, React, Distributed Systems
      </div>
      <a
        href="/cv.pdf"
        className="badge-iterm2 text-xs"
        download
      >
        Download Resume
      </a>
    </div>

    {/* Personal Details */}
    <div className="text-xs flex flex-col gap-1">
      <div className="flex justify-between">
        <span className="font-medium text-[hsl(199,97%,61%)]">Based in:</span>
        <span>Bangladesh</span>
      </div>
      {socialLinks.map((l) => (
        <a key={l.label} href={l.href} className="flex justify-between items-center hover:underline text-[hsl(220,14%,87%)]" target="_blank" rel="noopener noreferrer">
          <span className="flex items-center gap-1">
            <l.icon size={13} className="text-[hsl(199,97%,61%)]" />
            {l.label}:
          </span>
          <span className="text-[hsl(225,100%,94%)]">{l.text}</span>
        </a>
      ))}
    </div>

    {/* Tech Stack */}
    <div>
      <h4 className="text-xs font-medium mb-2 text-[hsl(199,97%,61%)]">Tech Stack</h4>
      <div className="flex flex-wrap gap-1.5">
        {techStack.map((tech) => (
          <Badge key={tech} className="badge-iterm2">{tech}</Badge>
        ))}
      </div>
    </div>
    {/* Experience */}
    <div>
      <h4 className="text-xs font-medium mb-1 text-[hsl(199,97%,61%)]">Experience</h4>
      <div className="bg-[hsl(225,16%,15%)] rounded px-2 py-1 text-xs text-[hsl(220,14%,87%)] border border-[hsl(225,18%,18%)]">
        <div>
          <b>Sep 2021 - Present</b> <br />
          Frontend Developer <br />
          Tech Solutions Ltd.
        </div>
        <div className="mt-2">
          <b>Jun 2021 - Dec 2021</b> <br />
          Software Intern <br />
          DevWorks Inc.
        </div>
      </div>
    </div>
    {/* Certification */}
    <div>
      <h4 className="text-xs font-medium mb-1 text-[hsl(199,97%,61%)]">Certification</h4>
      <div className="bg-[hsl(225,16%,15%)] rounded px-2 py-1 text-xs text-[hsl(220,14%,87%)] border border-[hsl(225,18%,18%)]">
        <div>Mar 2022 <br /> Lorem ipsum</div>
      </div>
    </div>
    {/* Education */}
    <div>
      <h4 className="text-xs font-medium mb-1 text-[hsl(199,97%,61%)]">Education</h4>
      <div className="bg-[hsl(225,16%,15%)] rounded px-2 py-1 text-xs text-[hsl(220,14%,87%)] border border-[hsl(225,18%,18%)]">
        <div>2015 - 2019<br />B.S. in Computer Science, Example University</div>
      </div>
    </div>
  </aside>
);

export default Sidebar;
