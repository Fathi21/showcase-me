import { Card, CardContent } from "@/components/ui/card";

interface ExperienceCardProps {
  position: string;
  company: string;
  duration: string;
  description: string;
}

const ExperienceCard = ({ position, company, duration, description }: ExperienceCardProps) => (
  <Card className="card-iterm2-like my-2 min-h-[100px]">
    <CardContent className="p-0">
      <div className="font-semibold text-[hsl(199,97%,61%)]">{position}</div>
      <div className="text-xs text-[hsl(137,85%,75%)]">{company}</div>
      <div className="text-xs text-[hsl(268,59%,67%)] mb-1">{duration}</div>
      <div className="mt-2 text-xs text-[hsl(220,10%,85%)]">{description}</div>
    </CardContent>
  </Card>
);

export default ExperienceCard;