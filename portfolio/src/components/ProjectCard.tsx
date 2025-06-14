import { Card, CardContent, Typography, Chip, Box } from '@mui/material';

interface Project {
  title: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  github: string;
}

const ProjectCard = ({ title, description, stars, forks, language, github }: Project) => (
  <Card sx={{ mb: 2 }}>
    <CardContent>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body2" color="text.secondary">{description}</Typography>
      <Box sx={{ mt: 1 }}>
        <Chip label={`⭐ ${stars}`} sx={{ mr: 1 }} />
        <Chip label={`🍴 ${forks}`} sx={{ mr: 1 }} />
        <Chip label={language} />
      </Box>
    </CardContent>
  </Card>
);
