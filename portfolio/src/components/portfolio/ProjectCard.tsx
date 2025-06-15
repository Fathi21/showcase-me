
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  repo: string;
}

const ProjectCard = ({ title, description, tags, repo }: ProjectCardProps) => (
  <Card sx={{ mb: 2, background: "hsl(225,16%,14%)", color: "hsl(220,14%,87%)", boxShadow: "none", borderRadius: "0.7rem", border: "1px solid hsl(225,18%,18%)" }}>
    <CardContent sx={{ p: 2 }}>
      <div style={{ fontWeight: 600, color: "hsl(199,97%,61%)" }}>{title}</div>
      <div style={{ fontSize: 12, marginBottom: 4, color: "hsl(220,14%,77%)" }}>{description}</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 4 }}>
        {tags.map(tag => (
          <Chip
            key={tag}
            label={`#${tag}`}
            size="small"
            sx={{
              backgroundColor: "hsl(199,97%,61%)",
              color: "hsl(225,16%,14%)",
              fontWeight: 500,
              borderRadius: "100px",
              p: '0 10px',
              fontSize: 12,
            }}
            variant="filled"
          />
        ))}
      </div>
      <a
        href={repo}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "hsl(199,97%,61%)",
          fontWeight: 600,
          textDecoration: "underline",
          textUnderlineOffset: 2,
          fontSize: 13,
        }}
      >
        View Repository
      </a>
    </CardContent>
  </Card>
);

export default ProjectCard;
