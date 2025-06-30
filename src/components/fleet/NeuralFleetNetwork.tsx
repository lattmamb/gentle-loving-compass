
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Network, Zap, Activity, Globe, Cpu, ArrowUp, ArrowDown } from "lucide-react";

interface NeuralNode {
  id: string;
  location: string;
  status: "active" | "standby" | "offline";
  load: number;
  connections: number;
  processingPower: number;
}

const NeuralFleetNetwork: React.FC = () => {
  const [nodes, setNodes] = useState<NeuralNode[]>([
    { id: "node-chi", location: "Chicago Hub", status: "active", load: 87, connections: 143, processingPower: 94 },
    { id: "node-spr", location: "Springfield", status: "active", load: 62, connections: 89, processingPower: 78 },
    { id: "node-rck", location: "Rockford", status: "active", load: 91, connections: 67, processingPower: 85 },
    { id: "node-nap", location: "Naperville", status: "standby", load: 23, connections: 34, processingPower: 45 }
  ]);

  const [networkStats, setNetworkStats] = useState({
    totalNodes: 4,
    activeNodes: 3,
    totalProcessingPower: 302,
    networkLatency: 12,
    dataSync: 99.7
  });

  const [neuralActivity, setNeuralActivity] = useState<Array<{time: string, activity: number}>>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate real-time neural activity
      const now = new Date();
      const timeStr = now.toLocaleTimeString();
      
      setNeuralActivity(prev => {
        const newActivity = [...prev, {
          time: timeStr,
          activity: 70 + Math.random() * 30
        }].slice(-10);
        return newActivity;
      });

      // Update node loads dynamically
      setNodes(prev => prev.map(node => ({
        ...node,
        load: Math.max(20, Math.min(100, node.load + (Math.random() - 0.5) * 10)),
        connections: Math.max(10, Math.min(200, node.connections + Math.floor((Math.random() - 0.5) * 20)))
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleNodeAction = (nodeId: string, action: "boost" | "balance" | "standby") => {
    setNodes(prev => prev.map(node => {
      if (node.id === nodeId) {
        switch (action) {
          case "boost":
            return { ...node, processingPower: Math.min(100, node.processingPower + 10) };
          case "balance":
            return { ...node, load: 60 };
          case "standby":
            return { ...node, status: node.status === "standby" ? "active" : "standby" };
          default:
            return node;
        }
      }
      return node;
    }));
  };

  return (
    <Card className="neo-blur border-white/10">
      <CardHeader>
        <CardTitle className="text-white flex items-center justify-between">
          <div className="flex items-center">
            <Brain className="w-6 h-6 mr-2 text-purple-400" />
            Neural Fleet Network
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" />
            <span className="text-sm text-purple-400">Neural Sync Active</span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Network Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{networkStats.activeNodes}/{networkStats.totalNodes}</div>
            <div className="text-xs text-white/60">Active Nodes</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">{networkStats.totalProcessingPower}</div>
            <div className="text-xs text-white/60">Total TFLOPS</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">{networkStats.networkLatency}ms</div>
            <div className="text-xs text-white/60">Latency</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">{networkStats.dataSync}%</div>
            <div className="text-xs text-white/60">Data Sync</div>
          </div>
        </div>

        {/* Neural Nodes */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-white flex items-center">
            <Network className="w-4 h-4 mr-2 text-blue-400" />
            Neural Processing Nodes
          </h4>
          {nodes.map((node) => (
            <motion.div
              key={node.id}
              className={`p-4 rounded-lg border ${
                node.status === "active" ? "bg-white/5 border-purple-500/30" :
                node.status === "standby" ? "bg-yellow-500/10 border-yellow-500/30" :
                "bg-red-500/10 border-red-500/30"
              }`}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    node.status === "active" ? "bg-green-500" :
                    node.status === "standby" ? "bg-yellow-500" : "bg-red-500"
                  }`} />
                  <span className="text-white font-medium">{node.location}</span>
                  <Badge className={
                    node.status === "active" ? "bg-green-600/20 text-green-400 border-green-500/30" :
                    node.status === "standby" ? "bg-yellow-600/20 text-yellow-400 border-yellow-500/30" :
                    "bg-red-600/20 text-red-400 border-red-500/30"
                  }>
                    {node.status}
                  </Badge>
                </div>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleNodeAction(node.id, "boost")}
                    className="border-white/10 text-white hover:bg-white/5 text-xs"
                  >
                    <ArrowUp size={12} className="mr-1" />
                    Boost
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleNodeAction(node.id, "balance")}
                    className="border-white/10 text-white hover:bg-white/5 text-xs"
                  >
                    Balance
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="text-white/60">CPU Load</div>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full ${node.load > 80 ? "bg-red-500" : node.load > 60 ? "bg-yellow-500" : "bg-green-500"}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${node.load}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    <span className="text-white text-xs">{node.load}%</span>
                  </div>
                </div>
                <div>
                  <div className="text-white/60">Connections</div>
                  <div className="text-white font-medium">{node.connections}</div>
                </div>
                <div>
                  <div className="text-white/60">TFLOPS</div>
                  <div className="text-purple-400 font-medium">{node.processingPower}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Neural Activity Visualization */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-white flex items-center">
            <Activity className="w-4 h-4 mr-2 text-green-400" />
            Real-time Neural Activity
          </h4>
          <div className="h-16 bg-black/30 rounded-lg p-2 overflow-hidden">
            <div className="flex items-end justify-between h-full space-x-1">
              {neuralActivity.map((point, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-t from-purple-500 to-blue-500 rounded-t-sm flex-1 min-w-[2px]"
                  initial={{ height: 0 }}
                  animate={{ height: `${(point.activity / 100) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex space-x-2">
          <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 flex-1">
            <Globe className="w-4 h-4 mr-2" />
            Global Sync
          </Button>
          <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 flex-1">
            <Cpu className="w-4 h-4 mr-2" />
            Optimize Network
          </Button>
          <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 flex-1">
            <Zap className="w-4 h-4 mr-2" />
            Emergency Mode
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default NeuralFleetNetwork;
