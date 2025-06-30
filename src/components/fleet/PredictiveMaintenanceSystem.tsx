
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Wrench, AlertTriangle, CheckCircle, Clock, TrendingUp, Battery } from "lucide-react";

interface MaintenanceAlert {
  id: string;
  vehicleId: string;
  vehicleModel: string;
  component: string;
  severity: "low" | "medium" | "high" | "critical";
  prediction: string;
  confidence: number;
  estimatedFailure: string;
  recommendedAction: string;
}

const PredictiveMaintenanceSystem: React.FC = () => {
  const [alerts, setAlerts] = useState<MaintenanceAlert[]>([
    {
      id: "alert-1",
      vehicleId: "V-2847",
      vehicleModel: "Model S",
      component: "Battery Pack",
      severity: "medium",
      prediction: "Battery degradation detected",
      confidence: 87,
      estimatedFailure: "2-3 weeks",
      recommendedAction: "Schedule battery health check"
    },
    {
      id: "alert-2",
      vehicleId: "V-1923",
      vehicleModel: "Model 3",
      component: "Motor Bearing",
      severity: "high",
      prediction: "Unusual vibration patterns",
      confidence: 94,
      estimatedFailure: "5-7 days",
      recommendedAction: "Immediate inspection required"
    },
    {
      id: "alert-3",
      vehicleId: "V-3456",
      vehicleModel: "Model Y",
      component: "Brake System",
      severity: "low",
      prediction: "Gradual pad wear",
      confidence: 76,
      estimatedFailure: "4-6 weeks",
      recommendedAction: "Monitor usage patterns"
    }
  ]);

  const [maintenanceStats, setMaintenanceStats] = useState({
    totalVehicles: 247,
    underMaintenance: 12,
    predictedIssues: 8,
    preventedFailures: 156,
    avgAccuracy: 91.7
  });

  const [systemHealth, setSystemHealth] = useState({
    aiAccuracy: 94.2,
    dataQuality: 98.1,
    predictionRange: 28,
    systemUptime: 99.8
  });

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical": return "bg-red-600/20 text-red-400 border-red-500/30";
      case "high": return "bg-orange-600/20 text-orange-400 border-orange-500/30";
      case "medium": return "bg-yellow-600/20 text-yellow-400 border-yellow-500/30";
      case "low": return "bg-blue-600/20 text-blue-400 border-blue-500/30";
      default: return "bg-gray-600/20 text-gray-400 border-gray-500/30";
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "critical": case "high": return AlertTriangle;
      case "medium": return Clock;
      case "low": return CheckCircle;
      default: return CheckCircle;
    }
  };

  const handleResolveAlert = (alertId: string) => {
    setAlerts(prev => prev.filter(alert => alert.id !== alertId));
  };

  const handleScheduleMaintenance = (alertId: string) => {
    console.log(`Scheduling maintenance for alert: ${alertId}`);
    // In real implementation, this would integrate with scheduling system
  };

  return (
    <Card className="neo-blur border-white/10">
      <CardHeader>
        <CardTitle className="text-white flex items-center justify-between">
          <div className="flex items-center">
            <Wrench className="w-6 h-6 mr-2 text-orange-400" />
            Predictive Maintenance AI
          </div>
          <Badge className="bg-green-600/20 text-green-400 border-green-500/30">
            {systemHealth.aiAccuracy}% Accuracy
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* System Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{maintenanceStats.underMaintenance}</div>
            <div className="text-xs text-white/60">Under Maintenance</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-400">{maintenanceStats.predictedIssues}</div>
            <div className="text-xs text-white/60">Predicted Issues</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">{maintenanceStats.preventedFailures}</div>
            <div className="text-xs text-white/60">Failures Prevented</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">{maintenanceStats.avgAccuracy}%</div>
            <div className="text-xs text-white/60">AI Accuracy</div>
          </div>
        </div>

        {/* Active Alerts */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-white flex items-center">
            <AlertTriangle className="w-4 h-4 mr-2 text-orange-400" />
            Active Maintenance Alerts
          </h4>
          {alerts.map((alert) => {
            const IconComponent = getSeverityIcon(alert.severity);
            return (
              <motion.div
                key={alert.id}
                className="p-4 rounded-lg bg-white/5 border border-white/10"
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <IconComponent className={`w-5 h-5 ${
                      alert.severity === "critical" || alert.severity === "high" ? "text-red-400" :
                      alert.severity === "medium" ? "text-yellow-400" : "text-blue-400"
                    }`} />
                    <div>
                      <div className="text-white font-medium">{alert.vehicleModel} - {alert.vehicleId}</div>
                      <div className="text-white/60 text-sm">{alert.component}</div>
                    </div>
                  </div>
                  <Badge className={getSeverityColor(alert.severity)}>
                    {alert.severity.toUpperCase()}
                  </Badge>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="text-sm">
                    <span className="text-white/60">Prediction: </span>
                    <span className="text-white">{alert.prediction}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-white/60">Confidence: </span>
                      <span className="text-green-400 font-medium">{alert.confidence}%</span>
                    </div>
                    <div>
                      <span className="text-white/60">Est. Failure: </span>
                      <span className="text-orange-400 font-medium">{alert.estimatedFailure}</span>
                    </div>
                  </div>
                  <div className="text-sm">
                    <span className="text-white/60">Recommended: </span>
                    <span className="text-blue-400">{alert.recommendedAction}</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    onClick={() => handleScheduleMaintenance(alert.id)}
                    className="bg-blue-600 hover:bg-blue-700 text-xs"
                  >
                    Schedule Maintenance
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleResolveAlert(alert.id)}
                    className="border-white/10 text-white hover:bg-white/5 text-xs"
                  >
                    Mark Resolved
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* AI System Health */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-white flex items-center">
            <TrendingUp className="w-4 h-4 mr-2 text-green-400" />
            AI System Health
          </h4>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "AI Accuracy", value: systemHealth.aiAccuracy, unit: "%", color: "green" },
              { label: "Data Quality", value: systemHealth.dataQuality, unit: "%", color: "blue" },
              { label: "Prediction Range", value: systemHealth.predictionRange, unit: " days", color: "purple" },
              { label: "System Uptime", value: systemHealth.systemUptime, unit: "%", color: "orange" }
            ].map(({ label, value, unit, color }) => (
              <div key={label} className="p-3 rounded-lg bg-black/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/60 text-sm">{label}</span>
                  <Battery className={`w-4 h-4 text-${color}-400`} />
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-${color}-500`}
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(100, value)}%` }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                  <span className={`text-${color}-400 text-sm font-medium`}>
                    {value}{unit}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PredictiveMaintenanceSystem;
