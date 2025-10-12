import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BrainCircuit } from "lucide-react";

const aiAgentMetrics = [
  { name: "Response Time", value: 87, max: 100, unit: "%" },
  { name: "Engagement Rate", value: 73, max: 100, unit: "%" },
  { name: "Conversion Quality", value: 92, max: 100, unit: "%" },
  { name: "Personalization Score", value: 89, max: 100, unit: "%" },
];

export default function AiAgentPerformance() {
  return (
    <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-muted/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
          <BrainCircuit className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          AI Agent Performance Matrix
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {aiAgentMetrics.map((metric, index) => (
            <div key={index} className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">
                  {metric.name}
                </span>
                <span className="text-sm text-muted-foreground">
                  {metric.value}
                  {metric.unit}
                </span>
              </div>
              <div className="relative">
                <Progress value={metric.value} className="h-2" />
                <div className="absolute inset-0 bg-gradient-to-r from-chart-1/20 to-chart-2/20 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
