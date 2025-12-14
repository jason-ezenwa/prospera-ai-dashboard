import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Flame,
  Filter,
  MousePointer,
} from "lucide-react";

const liveIntentSignals = [
  {
    id: 1,
    contact: "Sarah Chen",
    company: "TechFlow Solutions",
    action: "Downloaded competitor analysis",
    intent: "High",
    timeAgo: "2 min ago",
    score: 94,
    source: "LinkedIn Research",
  },
  {
    id: 2,
    contact: "Michael Torres",
    company: "GrowthLabs Inc",
    action: "Visited pricing page 3x",
    intent: "Critical",
    timeAgo: "5 min ago",
    score: 98,
    source: "Website Tracking",
  },
  {
    id: 3,
    contact: "Emma Rodriguez",
    company: "ScaleUp Ventures",
    action: "Shared our case study",
    intent: "Medium",
    timeAgo: "8 min ago",
    score: 76,
    source: "Social Signals",
  },
  {
    id: 4,
    contact: "David Kim",
    company: "Innovation Hub",
    action: "Joined our LinkedIn live",
    intent: "High",
    timeAgo: "12 min ago",
    score: 89,
    source: "Event Engagement",
  },
];

export default function LiveIntentSignals() {
  return (
    <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-muted/20">
      <CardHeader className="pb-4">
        <CardTitle className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
            <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
            <span className="text-sm sm:text-base">Live Intent Signals</span>
          </div>
          <Button variant="outline" size="sm">
            <Filter className="w-3 h-3 sm:w-4 sm:h-4" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-1 sm:max-h-96 overflow-y-auto">
          {liveIntentSignals.map((signal) => (
            <div
              key={signal.id}
              className="p-3 sm:p-4 hover:bg-accent/50 transition-colors cursor-pointer border-b border-border/50 last:border-b-0">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground text-xs font-medium">
                      {signal.contact
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-foreground text-sm truncate">
                      {signal.contact}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {signal.company}
                    </p>
                  </div>
                </div>
                <Badge
                  variant={
                    signal.intent === "Critical"
                      ? "destructive"
                      : signal.intent === "High"
                      ? "default"
                      : "secondary"
                  }
                  className="text-xs flex-shrink-0">
                  {signal.intent}
                </Badge>
              </div>
              <p className="text-sm text-foreground mb-2">{signal.action}</p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <span className="text-xs text-muted-foreground">
                  {signal.source}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-chart-1">
                    Score: {signal.score}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {signal.timeAgo}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-3 sm:p-4 border-t border-border/50">
          <Button className="w-full gap-2 bg-gradient-to-r from-primary to-primary/90">
            <MousePointer className="w-3 h-3 sm:w-4 sm:h-4" />
            View All Signals
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
