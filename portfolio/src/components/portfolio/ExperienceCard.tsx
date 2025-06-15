import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

interface ExperienceCardProps {
  position: string;
  company: string;
  duration: string;
  description: string;
}

const ExperienceCard = ({ position, company, duration, description }: ExperienceCardProps) => (
  <Card className="experience-card">
    <CardContent className="experience-card-content">
      <div className="experience-position">{position}</div>
      <div className="experience-company">{company}</div>
      <div className="experience-duration">{duration}</div>
      <div className="experience-description">{description}</div>
    </CardContent>
  </Card>
);

export default ExperienceCard;
