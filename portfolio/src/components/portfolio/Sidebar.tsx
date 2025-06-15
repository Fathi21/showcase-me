import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

const techStack = [
  "PHP", "Laravel", "JavaScript", "React.js", "Node.js", "Next.js",
  "MySQL", "PostgreSQL", "Git", "Docker", "PHPUnit", "CSS", "Andl", "Tailwind"
];

const socialLinks = [
  { icon: GitHubIcon, label: "GitHub", href: "https://github.com/Fathi21", text: "Sharif" },
  { icon: EmailIcon, label: "Email", href: "mailto:sharifhussen@hotmail.com", text: "sharifhussen@hotmail.com" },
];

const Sidebar = () => (
  <aside className="sidebar">
    {/* Profile */}
    <div className="profile">
      <Avatar
        src="/profile.jpg"
        alt="Sharif"
        sx={{ width: 80, height: 80, marginBottom: 1.5, border: "2px solid hsl(225,18%,18%)" }}
      />
      <div className="name">Sharif hussen</div>
      <div className="title">Sr. Software Engineer | Node.js, React, Distributed Systems</div>
      <a href="/cv.pdf" download className="resume-link">
        <Chip label="Download Resume" size="small" className="resume-chip" />
      </a>
    </div>

    {/* Personal Details */}
    <div className="details">
      <div className="location">
        <span className="label">Based in:</span>
        <span>Wales, Cardiff</span>
      </div>
      {socialLinks.map((l) => (
        <a key={l.label} href={l.href} className="social-link" target="_blank" rel="noopener noreferrer">
          <span className="social-label">
            <l.icon sx={{ color: "hsl(199,97%,61%)", fontSize: 16 }} />
            {l.label}:
          </span>
          <span className="social-text">{l.text}</span>
        </a>
      ))}
    </div>

    {/* Tech Stack */}
    <div>
      <h4 className="section-heading">Tech Stack</h4>
      <div className="chip-container">
        {techStack.map((tech) => (
          <Chip key={tech} label={tech} size="small" className="tech-chip" />
        ))}
      </div>
    </div>

    {/* Experience */}
    <div>
      <h4 className="section-heading">Experience</h4>
      <div className="info-box">
        <div>
          <b>{'>'} Sep 2021 - Present</b> <br />
          {'>'} Frontend Developer <br />
          {'>'} Tech Solutions Ltd.
        </div>
        <div className="spaced">
          <b>{'>'} Jun 2021 - Dec 2021</b> <br />
          {'>'} Software Intern <br />
          {'>'} DevWorks Inc.
        </div>
      </div>
    </div>

    {/* Certification */}
    <div>
      <h4 className="section-heading">Certification</h4>
      <div className="info-box">
        <div>{'>'} Mar 2022 <br /> {'>'} Lorem ipsum</div>
      </div>
    </div>

    {/* Education */}
    <div>
      <h4 className="section-heading">{'>'} Education</h4>
      <div className="info-box">
        <div>{'>'} 2015 - 2019<br /> {'>'} B.S. in Computer Science, Example University</div>
      </div>
    </div>
  </aside>
);

export default Sidebar;
