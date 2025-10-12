import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  Bot,
  Target,
  DollarSign,
  ArrowUp,
  Zap,
  Flame,
  TrendingUp,
} from "lucide-react";

export default function HeroMetrics() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
      <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-chart-1/10 to-chart-1/5 shadow-lg">
        <CardContent className="p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div className="space-y-2 min-w-0 flex-1">
              <p className="text-xs sm:text-sm font-medium text-muted-foreground">
                Intent Conversion Rate
              </p>
              <div className="flex items-baseline gap-2 flex-wrap">
                <p className="text-2xl sm:text-3xl font-bold text-foreground">
                  84.7%
                </p>
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400 text-xs">
                  <ArrowUp className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                  +23.4%
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                vs. traditional outbound (2.3%)
              </p>
            </div>
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-chart-1 to-chart-1/80 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
              <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
          </div>
          <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-chart-1/20 to-transparent rounded-full -translate-y-12 translate-x-12 sm:-translate-y-16 sm:translate-x-16"></div>
        </CardContent>
      </Card>

      <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-chart-2/10 to-chart-2/5 shadow-lg">
        <CardContent className="p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div className="space-y-2 min-w-0 flex-1">
              <p className="text-xs sm:text-sm font-medium text-muted-foreground">
                AI Response Time
              </p>
              <div className="flex items-baseline gap-2 flex-wrap">
                <p className="text-2xl sm:text-3xl font-bold text-foreground">
                  12s
                </p>
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400 text-xs">
                  <Zap className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                  Real-time
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Average across all agents
              </p>
            </div>
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-chart-2 to-chart-2/80 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
              <Bot className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
          </div>
          <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-chart-2/20 to-transparent rounded-full -translate-y-12 translate-x-12 sm:-translate-y-16 sm:translate-x-16"></div>
        </CardContent>
      </Card>

      <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-chart-3/10 to-chart-3/5 shadow-lg">
        <CardContent className="p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div className="space-y-2 min-w-0 flex-1">
              <p className="text-xs sm:text-sm font-medium text-muted-foreground">
                Hot Intent Signals
              </p>
              <div className="flex items-baseline gap-2 flex-wrap">
                <p className="text-2xl sm:text-3xl font-bold text-foreground">
                  347
                </p>
                <Badge
                  variant="secondary"
                  className="bg-orange-100 text-orange-700 dark:bg-orange-900/20 dark:text-orange-400 text-xs">
                  <Flame className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                  +67 today
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                LinkedIn + Website tracking
              </p>
            </div>
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-chart-3 to-chart-3/80 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
              <Target className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
          </div>
          <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-chart-3/20 to-transparent rounded-full -translate-y-12 translate-x-12 sm:-translate-y-16 sm:translate-x-16"></div>
        </CardContent>
      </Card>

      <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-chart-4/10 to-chart-4/5 shadow-lg">
        <CardContent className="p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div className="space-y-2 min-w-0 flex-1">
              <p className="text-xs sm:text-sm font-medium text-muted-foreground">
                Revenue Pipeline
              </p>
              <div className="flex items-baseline gap-2 flex-wrap">
                <p className="text-2xl sm:text-3xl font-bold text-foreground">
                  $2.4M
                </p>
                <Badge
                  variant="secondary"
                  className="bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-400 text-xs">
                  <TrendingUp className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                  +89% MoM
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                AI-qualified pipeline
              </p>
            </div>
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-chart-4 to-chart-4/80 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
              <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
          </div>
          <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-chart-4/20 to-transparent rounded-full -translate-y-12 translate-x-12 sm:-translate-y-16 sm:translate-x-16"></div>
        </CardContent>
      </Card>
    </div>
  );
}
