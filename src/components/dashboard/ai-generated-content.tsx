import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

const recentAiGeneratedContent = [
  {
    id: 1,
    type: "LinkedIn Message",
    prospect: "Alex Thompson - SaaS Founder",
    generated: "3 min ago",
    personalization: [
      "Industry pain points",
      "Recent funding news",
      "Mutual connections",
    ],
    status: "Sent",
    response: "43% open rate predicted",
  },
  {
    id: 2,
    type: "Email Sequence",
    prospect: "Maria Gonzalez - CMO",
    generated: "7 min ago",
    personalization: [
      "Content downloads",
      "Company growth stage",
      "Tech stack",
    ],
    status: "Scheduled",
    response: "67% response rate predicted",
  },
  {
    id: 3,
    type: "Lead Magnet",
    prospect: "Jennifer Park - VP Sales",
    generated: "12 min ago",
    personalization: ["Sales challenges", "Team size", "Current tools"],
    status: "Delivering",
    response: "89% engagement predicted",
  },
];

export default function AiGeneratedContent() {
  return (
    <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-muted/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          AI-Generated Content
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-1">
          {recentAiGeneratedContent.map((content) => (
            <div
              key={content.id}
              className="p-3 sm:p-4 hover:bg-accent/50 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">
                    {content.type}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {content.generated}
                  </span>
                </div>
                <Badge
                  variant={
                    content.status === "Sent"
                      ? "default"
                      : content.status === "Scheduled"
                      ? "secondary"
                      : "outline"
                  }
                  className="text-xs">
                  {content.status}
                </Badge>
              </div>
              <p className="text-sm font-medium text-foreground mb-2">
                {content.prospect}
              </p>
              <div className="space-y-1 mb-2">
                <p className="text-xs text-muted-foreground">
                  Personalization:
                </p>
                <div className="flex flex-wrap gap-1">
                  {content.personalization.map((tag, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="text-xs bg-primary/10 text-primary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <p className="text-xs text-chart-1 font-medium">
                {content.response}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
