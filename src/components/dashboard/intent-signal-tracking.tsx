import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Activity,
  LinkedinIcon,
  Settings,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const intentSignalData = [
  { time: "00:00", signals: 45, quality: 78 },
  { time: "04:00", signals: 32, quality: 82 },
  { time: "08:00", signals: 89, quality: 85 },
  { time: "12:00", signals: 124, quality: 91 },
  { time: "16:00", signals: 98, quality: 88 },
  { time: "20:00", signals: 67, quality: 84 },
];

export default function IntentSignalTracking() {
  return (
    <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-muted/20">
      <CardHeader className="pb-4">
        <CardTitle className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <LinkedinIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#0077B5]" />
            <span className="text-sm sm:text-base">
              Live Intent Signal Tracking
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Badge
              variant="outline"
              className="bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800 text-xs">
              <Activity className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
              124 signals/hr
            </Badge>
            <Button variant="outline" size="sm">
              <Settings className="w-3 h-3 sm:w-4 sm:h-4" />
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full h-[250px] sm:h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={intentSignalData}>
              <defs>
                <linearGradient
                  id="signalGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--chart-1)"
                    stopOpacity={0.3}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--chart-1)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
                <linearGradient
                  id="qualityGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--chart-2)"
                    stopOpacity={0.3}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--chart-2)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="var(--border)"
              />
              <XAxis
                dataKey="time"
                stroke="var(--muted-foreground)"
                fontSize={10}
                tick={{ fontSize: 10 }}
              />
              <YAxis
                stroke="var(--muted-foreground)"
                fontSize={10}
                tick={{ fontSize: 10 }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius)",
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                  fontSize: "12px",
                }}
              />
              <Area
                type="monotone"
                dataKey="signals"
                stroke="var(--chart-1)"
                strokeWidth={2}
                fill="url(#signalGradient)"
              />
              <Area
                type="monotone"
                dataKey="quality"
                stroke="var(--chart-2)"
                strokeWidth={2}
                fill="url(#qualityGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
