import { Card, CardContent, Typography } from '@mui/material';

interface ExperienceProps {
  position: string;
  company: string;
  duration: string;
  description: string;
}

const ExperienceCard = ({ position, company, duration, description }: ExperienceProps) => (
  <Card sx={{ mb: 2 }}>
    <CardContent>
      <Typography variant="h6">{position}</Typography>
      <Typography variant="subtitle1" color="text.secondary">{company}</Typography>
      <Typography variant="body2">{duration}</Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>{description}</Typography>
    </CardContent>
  </Card>
);

export default ExperienceCard;
