import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BrainCircuit,
  Sparkles,
  RefreshCw,
  Download,
  Bell,
  Settings,
} from "lucide-react";
import Image from "next/image";
import ProsperoLogo from "@/assets/prospera_ai_logo.jpeg";

interface HeaderProps {
  selectedTimeframe: string;
  onTimeframeChange: (timeframe: string) => void;
}

export default function Header({
  selectedTimeframe,
  onTimeframeChange,
}: HeaderProps) {

  return (
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
                  onClick={() => onTimeframeChange(period)}
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
  );
}
