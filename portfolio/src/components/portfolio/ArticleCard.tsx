import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';

interface ArticleCardProps {
  title: string;
  summary: string;
  tags: string[];
}

const ArticleCard = ({ title, summary, tags }: ArticleCardProps) => (
  <Card className="article-card">
    <CardContent className="article-card-content">
      <div className="article-card-title">{title}</div>
      <div className="article-card-summary">{summary}</div>
      <div className="article-card-tags">
        {tags.map(tag => (
          <Chip
            key={tag}
            label={`#${tag}`}
            size="small"
            className="article-card-chip"
            variant="filled"
          />
        ))}
      </div>
    </CardContent>
  </Card>
);

export default ArticleCard;
