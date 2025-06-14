import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  repo: string;
}

const ProjectCard = ({ title, description, tags, repo }: ProjectCardProps) => (
  <Card className="card-iterm2-like my-2 min-h-[100px]">
    <CardContent className="p-0">
      <div className="font-semibold text-[hsl(199,97%,61%)]">{title}</div>
      <div className="text-xs mb-1 text-[hsl(220,14%,77%)]">{description}</div>
      <div className="flex flex-wrap gap-1 mb-1">
        {tags.map(tag => (
          <Badge key={tag} className="badge-iterm2">
            #{tag}
          </Badge>
        ))}
      </div>
      <a
        href={repo}
        target="_blank"
        rel="noopener noreferrer"
        className="link-iterm2 inline-block mt-1 text-xs"
      >
        View Repository
      </a>
    </CardContent>
  </Card>
);

export default ProjectCard;