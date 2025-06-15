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
  <Card className="project-card">
    <CardContent className="project-card-content">
      <div className="project-title">{title}</div>
      <div className="project-description">{description}</div>
      <div className="project-tags">
        {tags.map(tag => (
          <Chip
            key={tag}
            label={`#${tag}`}
            size="small"
            className="project-chip"
            variant="filled"
          />
        ))}
      </div>
      <a href={repo} target="_blank" rel="noopener noreferrer" className="project-link">
        View Repository
      </a>
    </CardContent>
  </Card>
);

export default ProjectCard;
