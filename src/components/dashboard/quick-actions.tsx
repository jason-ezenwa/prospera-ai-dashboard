import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Zap,
  LinkedinIcon,
  BrainCircuit,
  Sparkles,
  Settings,
  ChevronRight,
  AlertCircle,
  ExternalLink,
} from "lucide-react";

export default function QuickActions() {
  return (
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
  );
}
