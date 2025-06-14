
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

interface ExperienceCardProps {
  position: string;
  company: string;
  duration: string;
  description: string;
}

const ExperienceCard = ({ position, company, duration, description }: ExperienceCardProps) => (
  <Card sx={{ mb: 2, background: "hsl(225,16%,14%)", color: "hsl(220,14%,87%)", boxShadow: "none", borderRadius: "0.7rem", border: "1px solid hsl(225,18%,18%)" }}>
    <CardContent sx={{ p: 2 }}>
      <div style={{ fontWeight: 600, color: "hsl(199,97%,61%)" }}>{position}</div>
      <div style={{ fontSize: 12, color: "hsl(137,85%,75%)" }}>{company}</div>
      <div style={{ fontSize: 12, color: "hsl(268,59%,67%)", marginBottom: 4 }}>{duration}</div>
      <div style={{ fontSize: 13, color: "hsl(220,10%,85%)", marginTop: 8 }}>{description}</div>
    </CardContent>
  </Card>
);

export default ExperienceCard;