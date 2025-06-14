import { Card, CardContent, Typography, Chip, Box } from '@mui/material';

interface ArticleProps {
  title: string;
  summary: string;
  tags: string[];
}

const ArticleCard = ({ title, summary, tags }: ArticleProps) => (
  <Card sx={{ mb: 2 }}>
    <CardContent>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body2" sx={{ mb: 1 }}>{summary}</Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {tags.map(tag => (
          <Chip key={tag} label={`#${tag}`} />
        ))}
      </Box>
    </CardContent>
  </Card>
);

export default ArticleCard;
