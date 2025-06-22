import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Activity,
  TrendingUp,
  Target,
  Bot,
  ArrowUp,
  ArrowDown,
  LinkedinIcon,
  Zap,
  Settings,
  Bell,
  Filter,
  Download,
  RefreshCw,
  DollarSign,
  MoreHorizontal,
  Brain,
  Sparkles,
  MousePointer,
  Flame,
  AlertCircle,
  ChevronRight,
  ExternalLink,
  Lightbulb,
  BrainCircuit,
  Menu,
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
import Image from "next/image";
import ProsperoLogo from "@/assets/prospera_ai_logo.jpeg";
import Footer from "@/components/ui/footer";

// Enhanced sample data for the redesigned dashboard
const intentSignalData = [
  { time: "00:00", signals: 45, quality: 78 },
  { time: "04:00", signals: 32, quality: 82 },
  { time: "08:00", signals: 89, quality: 85 },
  { time: "12:00", signals: 124, quality: 91 },
  { time: "16:00", signals: 98, quality: 88 },
  { time: "20:00", signals: 67, quality: 84 },
];

const conversionFunnelData = [
  { stage: "Intent Signals", count: 2847, rate: 100, color: "var(--chart-1)" },
  { stage: "AI Qualified", count: 1424, rate: 50, color: "var(--chart-2)" },
  { stage: "Lead Magnet", count: 855, rate: 30, color: "var(--chart-3)" },
  { stage: "AI Follow-up", count: 427, rate: 15, color: "var(--chart-4)" },
  { stage: "Sales Ready", count: 228, rate: 8, color: "var(--chart-5)" },
];

const aiAgentMetrics = [
  { name: "Response Time", value: 87, max: 100, unit: "%" },
  { name: "Engagement Rate", value: 73, max: 100, unit: "%" },
  { name: "Conversion Quality", value: 92, max: 100, unit: "%" },
  { name: "Personalization Score", value: 89, max: 100, unit: "%" },
];

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

export default function ProsperaAIDashboard() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("24h");

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Enhanced Responsive Header */}
      <div className="border-b border-border/40 backdrop-blur-xl bg-background/80 sticky top-0 z-50">
        <div className="p-3 sm:p-4 lg:p-6">
          <div className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:mb-6">
            {/* Logo and Title Section */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="relative">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden ring-2 ring-primary/20 ring-offset-2 ring-offset-background">
                  <Image
                    src={ProsperoLogo}
                    alt="Prospera AI Logo"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full border-2 border-background animate-pulse"></div>
              </div>
              <div className="min-w-0 flex-1">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent truncate">
                  Prospera AI Dashboard
                </h1>
                <div className="text-muted-foreground flex items-center gap-2 text-sm sm:text-base">
                  <BrainCircuit className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span className="hidden sm:inline">
                    AI-powered lead conversion and personalized outreach
                  </span>
                  <span className="sm:hidden">AI-powered lead conversion</span>
                  <Badge
                    variant="secondary"
                    className="ml-2 hidden sm:inline-flex">
                    <Sparkles className="w-3 h-3 mr-1" />
                    24 Agents Active
                  </Badge>
                </div>
              </div>
            </div>

            {/* Controls Section */}
            <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-3">
              {/* Time Period Selector */}
              <div className="flex items-center bg-muted/50 rounded-lg p-1">
                {["1h", "24h", "7d", "30d"].map((period) => (
                  <Button
                    key={period}
                    variant={selectedTimeframe === period ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setSelectedTimeframe(period)}
                    className="text-xs px-2 sm:px-3">
                    {period}
                  </Button>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-1 sm:gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-1 sm:gap-2 bg-background/50 backdrop-blur-sm px-2 sm:px-3">
                  <RefreshCw className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">Live</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-1 sm:gap-2 bg-background/50 backdrop-blur-sm px-2 sm:px-3 hidden sm:flex">
                  <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden lg:inline">Export</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-1 sm:gap-2 bg-background/50 backdrop-blur-sm relative px-2 sm:px-3">
                  <Bell className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full animate-ping"></span>
                  <span className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-3 sm:p-4 lg:p-6 space-y-6 sm:space-y-8">
        {/* Hero Metrics - Fully Responsive */}
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

        {/* Main Content Grid - Responsive Stack */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 sm:gap-8">
          {/* Left Column - Charts and Analytics */}
          <div className="xl:col-span-2 space-y-6 sm:space-y-8">
            {/* Intent Signal Tracking */}
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

            {/* AI Agent Performance */}
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

            {/* Conversion Funnel */}
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
          </div>

          {/* Right Column - Live Feeds and Actions */}
          <div className="space-y-6 sm:space-y-8">
            {/* Live Intent Signals */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-muted/20">
              <CardHeader className="pb-4">
                <CardTitle className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                    <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
                    <span className="text-sm sm:text-base">
                      Live Intent Signals
                    </span>
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-1 max-h-80 sm:max-h-96 overflow-y-auto">
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
                      <p className="text-sm text-foreground mb-2">
                        {signal.action}
                      </p>
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

            {/* AI-Generated Content */}
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
          </div>
        </div>

        {/* Bottom Section - Lead Magnets and Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Enhanced Lead Magnets */}
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

          {/* Enhanced Quick Actions */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-muted/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                AI-Powered Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-3 sm:gap-4">
                <Button className="justify-start gap-3 h-12 sm:h-14 bg-gradient-to-r from-chart-1 to-chart-1/90 hover:from-chart-1/90 hover:to-chart-1/80 p-3 sm:p-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <LinkedinIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div className="text-left min-w-0 flex-1">
                    <p className="font-medium text-sm sm:text-base">
                      Scan LinkedIn Intent
                    </p>
                    <p className="text-xs opacity-90">
                      Find prospects showing buying signals
                    </p>
                  </div>
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-auto flex-shrink-0" />
                </Button>

                <Button
                  variant="outline"
                  className="justify-start gap-3 h-12 sm:h-14 border-2 hover:bg-accent/50 p-3 sm:p-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-chart-2/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BrainCircuit className="w-3 h-3 sm:w-4 sm:h-4 text-chart-2" />
                  </div>
                  <div className="text-left min-w-0 flex-1">
                    <p className="font-medium text-sm sm:text-base">
                      Train AI Agent
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Improve personalization accuracy
                    </p>
                  </div>
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-auto flex-shrink-0" />
                </Button>

                <Button
                  variant="outline"
                  className="justify-start gap-3 h-12 sm:h-14 border-2 hover:bg-accent/50 p-3 sm:p-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-chart-3/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-chart-3" />
                  </div>
                  <div className="text-left min-w-0 flex-1">
                    <p className="font-medium text-sm sm:text-base">
                      Generate Content
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Create personalized lead magnets
                    </p>
                  </div>
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-auto flex-shrink-0" />
                </Button>

                <Button
                  variant="outline"
                  className="justify-start gap-3 h-12 sm:h-14 border-2 hover:bg-accent/50 p-3 sm:p-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-chart-4/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Settings className="w-3 h-3 sm:w-4 sm:h-4 text-chart-4" />
                  </div>
                  <div className="text-left min-w-0 flex-1">
                    <p className="font-medium text-sm sm:text-base">
                      CRM Integration
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Sync with your existing tools
                    </p>
                  </div>
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-auto flex-shrink-0" />
                </Button>
              </div>

              <div className="mt-4 sm:mt-6 pt-4 border-t border-border/50">
                <div className="bg-gradient-to-r from-primary/10 to-chart-1/10 p-3 sm:p-4 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-3 mb-2">
                    <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                    <p className="font-medium text-foreground text-sm sm:text-base">
                      Why Inbound-Led Outbound?
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Only 3% of prospects are ready to buy. We find the 3%
                    showing intent and convert them 20x faster.
                  </p>
                  <Button variant="outline" size="sm" className="gap-2">
                    <ExternalLink className="w-3 h-3" />
                    Learn More
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}
