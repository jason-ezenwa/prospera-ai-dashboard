import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";

const conversionFunnelData = [
  { stage: "Intent Signals", count: 2847, rate: 100, color: "var(--chart-1)" },
  { stage: "AI Qualified", count: 1424, rate: 50, color: "var(--chart-2)" },
  { stage: "Lead Magnet", count: 855, rate: 30, color: "var(--chart-3)" },
  { stage: "AI Follow-up", count: 427, rate: 15, color: "var(--chart-4)" },
  { stage: "Sales Ready", count: 228, rate: 8, color: "var(--chart-5)" },
];

export default function ConversionFunnel() {
  return (
    <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-muted/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
          <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          Inbound-Led Outbound Funnel
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {conversionFunnelData.map((stage, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                <span className="text-sm font-medium text-foreground">
                  {stage.stage}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">
                    {stage.count.toLocaleString()}
                  </span>
                  <Badge
                    variant="outline"
                    className={`
                      ${
                        index === 0
                          ? "border-blue-500 text-blue-700 dark:text-blue-400"
                          : ""
                      }
                      ${
                        index === 1
                          ? "border-green-500 text-green-700 dark:text-green-400"
                          : ""
                      }
                      ${
                        index === 2
                          ? "border-yellow-500 text-yellow-700 dark:text-yellow-400"
                          : ""
                      }
                      ${
                        index === 3
                          ? "border-orange-500 text-orange-700 dark:text-orange-400"
                          : ""
                      }
                      ${
                        index === 4
                          ? "border-purple-500 text-purple-700 dark:text-purple-400"
                          : ""
                      }
                    `}>
                    {stage.rate}%
                  </Badge>
                </div>
              </div>
              <div className="relative h-3 bg-muted/50 rounded-full overflow-hidden">
                <div
                  className={`
                    h-full rounded-full transition-all duration-1000 ease-out
                    ${
                      index === 0
                        ? "bg-gradient-to-r from-blue-500 to-blue-600"
                        : ""
                    }
                    ${
                      index === 1
                        ? "bg-gradient-to-r from-green-500 to-green-600"
                        : ""
                    }
                    ${
                      index === 2
                        ? "bg-gradient-to-r from-yellow-500 to-yellow-600"
                        : ""
                    }
                    ${
                      index === 3
                        ? "bg-gradient-to-r from-orange-500 to-orange-600"
                        : ""
                    }
                    ${
                      index === 4
                        ? "bg-gradient-to-r from-purple-500 to-purple-600"
                        : ""
                    }
                  `}
                  style={{
                    width: `${stage.rate}%`,
                  }}></div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
