import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const techStack = [
  "PHP", "Laravel", "JavaScript", "React.js", "Node.js", "Next.js",
  "MySQL", "PostgreSQL", "Git", "Docker", "PHPUnit", "CSS", "Andl", "Tailwind"
];

const socialLinks = [
  { icon: GitHubIcon, label: "GitHub", href: "https://github.com/yourprofile", text: "yourusername" },
  { icon: LinkedInIcon, label: "LinkedIn", href: "https://linkedin.com/in/yourprofile", text: "yourname" },
  { icon: TwitterIcon, label: "X", href: "https://x.com/yourhandle", text: "@yourhandle" },
  { icon: EmailIcon, label: "Email", href: "mailto:you@email.com", text: "you@email.com" },
];

const Sidebar = () => (
  <aside style={{
    background: "hsl(225,16%,13%)",
    borderRadius: "0.8rem",
    padding: "1.5rem",
    boxShadow: "none",
    border: "1px solid hsl(225,18%,18%)",
    display: "flex",
    flexDirection: "column",
    gap: 24,
    width: "100%",
  }}>
    {/* Profile */}
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Avatar
        src="/profile.jpg"
        alt="Your Name"
        sx={{
          width: 80,
          height: 80,
          marginBottom: 1.5,
          border: "2px solid hsl(225,18%,18%)",
        }}
      >
        YN
      </Avatar>
      <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 2, color: "hsl(199,97%,61%)", letterSpacing: "-0.5px" }}>Your Name</div>
      <div style={{ fontSize: 12, color: "hsl(220,14%,70%)", marginBottom: 8, textAlign: "center" }}>
        Sr. Software Engineer | Node.js, React, Distributed Systems
      </div>
      <a
        href="/cv.pdf"
        download
        style={{
          textDecoration: "none",
        }}
      >
        <Chip
          label="Download Resume"
          size="small"
          sx={{
            backgroundColor: "hsl(199,97%,61%)",
            color: "hsl(225,16%,14%)",
            borderRadius: "100px",
            fontWeight: 500,
            fontSize: 13,
            px: 2,
            cursor: "pointer"
          }}
        />
      </a>
    </div>

    {/* Personal Details */}
    <div style={{ fontSize: 12, display: "flex", flexDirection: "column", gap: 4 }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontWeight: 500, color: "hsl(199,97%,61%)" }}>Based in:</span>
        <span>Bangladesh</span>
      </div>
      {socialLinks.map((l) => (
        <a key={l.label} href={l.href} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", textDecoration: "none", color: "hsl(220,14%,87%)", marginTop: 2 }} target="_blank" rel="noopener noreferrer">
          <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {/* MUI icon usage */}
            <l.icon sx={{ color: "hsl(199,97%,61%)", fontSize: 16 }} />
            {l.label}:
          </span>
          <span style={{ color: "hsl(225,100%,94%)" }}>{l.text}</span>
        </a>
      ))}
    </div>

    {/* Tech Stack */}
    <div>
      <h4 style={{ fontSize: 12, fontWeight: 500, marginBottom: 8, color: "hsl(199,97%,61%)" }}>Tech Stack</h4>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {techStack.map((tech) => (
          <Chip
            key={tech}
            label={tech}
            size="small"
            sx={{
              backgroundColor: "hsl(199,97%,61%)",
              color: "hsl(225,16%,14%)",
              borderRadius: "100px",
              fontWeight: 500,
              fontSize: 13,
              px: 2,
              mb: 0.5,
            }}
          />
        ))}
      </div>
    </div>
    {/* Experience */}
    <div>
      <h4 style={{ fontSize: 12, fontWeight: 500, marginBottom: 4, color: "hsl(199,97%,61%)" }}>Experience</h4>
      <div style={{
        background: "hsl(225,16%,15%)",
        borderRadius: "0.6rem",
        padding: "8px 10px",
        fontSize: 12,
        color: "hsl(220,14%,87%)",
        border: "1px solid hsl(225,18%,18%)"
      }}>
        <div>
          <b>Sep 2021 - Present</b> <br />
          Frontend Developer <br />
          Tech Solutions Ltd.
        </div>
        <div style={{ marginTop: 8 }}>
          <b>Jun 2021 - Dec 2021</b> <br />
          Software Intern <br />
          DevWorks Inc.
        </div>
      </div>
    </div>
    {/* Certification */}
    <div>
      <h4 style={{ fontSize: 12, fontWeight: 500, marginBottom: 4, color: "hsl(199,97%,61%)" }}>Certification</h4>
      <div style={{
        background: "hsl(225,16%,15%)",
        borderRadius: "0.6rem",
        padding: "8px 10px",
        fontSize: 12,
        color: "hsl(220,14%,87%)",
        border: "1px solid hsl(225,18%,18%)"
      }}>
        <div>Mar 2022 <br /> Lorem ipsum</div>
      </div>
    </div>
    {/* Education */}
    <div>
      <h4 style={{ fontSize: 12, fontWeight: 500, marginBottom: 4, color: "hsl(199,97%,61%)" }}>Education</h4>
      <div style={{
        background: "hsl(225,16%,15%)",
        borderRadius: "0.6rem",
        padding: "8px 10px",
        fontSize: 12,
        color: "hsl(220,14%,87%)",
        border: "1px solid hsl(225,18%,18%)"
      }}>
        <div>2015 - 2019<br />B.S. in Computer Science, Example University</div>
      </div>
    </div>
  </aside>
);

export default Sidebar;
