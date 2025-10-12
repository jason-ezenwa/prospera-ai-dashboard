import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Lightbulb,
  MoreHorizontal,
  ArrowUp,
  ArrowDown,
  BrainCircuit,
  Sparkles,
} from "lucide-react";

const leadMagnetPerformance = [
  {
    id: 1,
    title: "LinkedIn Intent Playbook 2025",
    type: "AI-Generated Guide",
    impressions: 15420,
    downloads: 2847,
    conversionRate: 18.5,
    aiPersonalization: 94,
    status: "Active",
    trending: "up",
  },
  {
    id: 2,
    title: "ROI Calculator (Personalized)",
    type: "Interactive Tool",
    impressions: 8930,
    downloads: 1682,
    conversionRate: 18.8,
    aiPersonalization: 97,
    status: "Active",
    trending: "up",
  },
  {
    id: 3,
    title: "Cold Outbound Alternatives",
    type: "Video Series",
    impressions: 6750,
    downloads: 891,
    conversionRate: 13.2,
    aiPersonalization: 89,
    status: "Optimizing",
    trending: "down",
  },
];

export default function LeadMagnetsPerformance() {
  return (
    <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-muted/20">
      <CardHeader>
        <CardTitle className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-2">
            <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            <span className="text-sm sm:text-base">
              AI Lead Magnets Performance
            </span>
          </div>
          <Button variant="outline" size="sm" className="gap-2">
            <MoreHorizontal className="w-3 h-3 sm:w-4 sm:h-4" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 sm:space-y-6">
          {leadMagnetPerformance.map((magnet) => (
            <div
              key={magnet.id}
              className="p-3 sm:p-4 border border-border/50 rounded-lg bg-gradient-to-r from-background to-muted/20">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                <div className="min-w-0 flex-1">
                  <h4 className="font-medium text-foreground text-sm sm:text-base">
                    {magnet.title}
                  </h4>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <BrainCircuit className="w-3 h-3" />
                    {magnet.type}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge
                    variant={
                      magnet.status === "Active" ? "default" : "secondary"
                    }>
                    {magnet.status}
                  </Badge>
                  {magnet.trending === "up" ? (
                    <ArrowUp className="w-4 h-4 text-green-500" />
                  ) : (
                    <ArrowDown className="w-4 h-4 text-red-500" />
                  )}
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-3">
                <div className="text-center">
                  <p className="text-sm font-semibold text-foreground">
                    {magnet.impressions.toLocaleString()}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Impressions
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-foreground">
                    {magnet.downloads.toLocaleString()}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Downloads
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-chart-1">
                    {magnet.conversionRate}%
                  </p>
                  <p className="text-xs text-muted-foreground">CVR</p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-chart-2">
                    {magnet.aiPersonalization}%
                  </p>
                  <p className="text-xs text-muted-foreground">
                    AI Score
                  </p>
                </div>
              </div>
              <Progress value={magnet.conversionRate} className="h-2" />
            </div>
          ))}
        </div>
        <div className="mt-4 sm:mt-6 pt-4 border-t border-border/50">
          <Button className="w-full gap-2 bg-gradient-to-r from-primary to-primary/90">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            Generate New Lead Magnet
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
