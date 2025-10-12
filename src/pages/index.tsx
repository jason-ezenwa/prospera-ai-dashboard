import React, { useState } from "react";
import Image from "next/image";
import ProsperoLogo from "@/assets/prospera_ai_logo.jpeg";
import Footer from "@/components/ui/footer";

// Dashboard components
import Header from "@/components/dashboard/header";
import HeroMetrics from "@/components/dashboard/hero-metrics";
import IntentSignalTracking from "@/components/dashboard/intent-signal-tracking";
import AiAgentPerformance from "@/components/dashboard/ai-agent-performance";
import ConversionFunnel from "@/components/dashboard/conversion-funnel";
import LiveIntentSignals from "@/components/dashboard/live-intent-signals";
import AiGeneratedContent from "@/components/dashboard/ai-generated-content";
import LeadMagnetsPerformance from "@/components/dashboard/lead-magnets-performance";
import QuickActions from "@/components/dashboard/quick-actions";

export default function ProsperaAIDashboard() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("24h");

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Header
        selectedTimeframe={selectedTimeframe}
        onTimeframeChange={setSelectedTimeframe}
      />

      <div className="p-3 sm:p-4 lg:p-6 space-y-6 sm:space-y-8">
        <HeroMetrics />

        {/* Main Content Grid - Responsive Stack */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 sm:gap-8">
          {/* Left Column - Charts and Analytics */}
          <div className="xl:col-span-2 space-y-6 sm:space-y-8">
            <IntentSignalTracking />

            <AiAgentPerformance />

            <ConversionFunnel />
          </div>

          {/* Right Column - Live Feeds and Actions */}
          <div className="space-y-6 sm:space-y-8">
            <LiveIntentSignals />

            <AiGeneratedContent />
          </div>
        </div>

        {/* Bottom Section - Lead Magnets and Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <LeadMagnetsPerformance />

          <QuickActions />
        </div>
      </div>

      <Footer />
    </div>
  );
}
