import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ArticleCardProps {
  title: string;
  summary: string;
  tags: string[];
}

const ArticleCard = ({ title, summary, tags }: ArticleCardProps) => (
  <Card className="card-iterm2-like my-2 min-h-[100px]">
    <CardContent className="p-0">
      <div className="font-semibold text-[hsl(199,97%,61%)]">{title}</div>
      <div className="text-xs mb-1 text-[hsl(220,14%,77%)]">{summary}</div>
      <div className="flex flex-wrap gap-1 mt-1">
        {tags.map(tag => (
          <Badge key={tag} className="badge-iterm2">
            #{tag}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default ArticleCard;