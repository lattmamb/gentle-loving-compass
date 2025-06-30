
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Vote, Users, Clock, CheckCircle, XCircle, AlertCircle } from "lucide-react";

interface Proposal {
  id: string;
  title: string;
  description: string;
  type: "infrastructure" | "community" | "operational";
  status: "active" | "passed" | "rejected";
  votesFor: number;
  votesAgainst: number;
  totalEligibleVotes: number;
  endDate: Date;
  proposer: string;
}

const mockProposals: Proposal[] = [
  {
    id: "prop-1",
    title: "Expand Carbondale Hub with Level 3 Charging",
    description: "Add 4 additional Level 3 chargers to meet growing demand in the Carbondale community",
    type: "infrastructure",
    status: "active",
    votesFor: 1247,
    votesAgainst: 283,
    totalEligibleVotes: 2500,
    endDate: new Date("2025-02-15"),
    proposer: "Carbondale Community Council"
  },
  {
    id: "prop-2",
    title: "Rural Workforce Training Program",
    description: "Establish EV maintenance and charging infrastructure training for local residents",
    type: "community",
    status: "passed",
    votesFor: 1890,
    votesAgainst: 156,
    totalEligibleVotes: 2500,
    endDate: new Date("2025-01-20"),
    proposer: "Southern Illinois Skills Initiative"
  }
];

const CommunityGovernance: React.FC = () => {
  const [selectedProposal, setSelectedProposal] = useState<string | null>(null);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active": return <Clock className="h-4 w-4 text-blue-400" />;
      case "passed": return <CheckCircle className="h-4 w-4 text-green-400" />;
      case "rejected": return <XCircle className="h-4 w-4 text-red-400" />;
      default: return <AlertCircle className="h-4 w-4 text-yellow-400" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "infrastructure": return "bg-blue-500/20 text-blue-400";
      case "community": return "bg-green-500/20 text-green-400";
      case "operational": return "bg-purple-500/20 text-purple-400";
      default: return "bg-gray-500/20 text-gray-400";
    }
  };

  return (
    <div className="space-y-8">
      {/* Governance Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-8 rounded-3xl"
      >
        <h2 className="tesla-heading mb-6">Community Governance</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-luxury p-6 rounded-xl text-center">
            <Vote className="h-8 w-8 text-blue-400 mx-auto mb-3" />
            <div className="text-3xl font-light text-white mb-2">750</div>
            <div className="text-sm text-white/60">Your Voting Power</div>
          </div>
          
          <div className="glass-luxury p-6 rounded-xl text-center">
            <Users className="h-8 w-8 text-green-400 mx-auto mb-3" />
            <div className="text-3xl font-light text-white mb-2">2,847</div>
            <div className="text-sm text-white/60">Active Members</div>
          </div>
          
          <div className="glass-luxury p-6 rounded-xl text-center">
            <CheckCircle className="h-8 w-8 text-purple-400 mx-auto mb-3" />
            <div className="text-3xl font-light text-white mb-2">23</div>
            <div className="text-sm text-white/60">Proposals Passed</div>
          </div>
        </div>
      </motion.div>

      {/* Active Proposals */}
      <div className="space-y-4">
        <h3 className="text-2xl font-light text-white mb-6">Current Proposals</h3>
        
        {mockProposals.map((proposal, index) => (
          <motion.div
            key={proposal.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="luxury-card">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      {getStatusIcon(proposal.status)}
                      <CardTitle className="text-white text-lg">{proposal.title}</CardTitle>
                    </div>
                    <p className="text-white/70 text-sm mb-3">{proposal.description}</p>
                    <div className="flex items-center space-x-3">
                      <Badge className={getTypeColor(proposal.type)}>
                        {proposal.type}
                      </Badge>
                      <span className="text-xs text-white/50">
                        by {proposal.proposer}
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Voting Progress */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/70">Votes Cast</span>
                    <span className="text-white">
                      {proposal.votesFor + proposal.votesAgainst} / {proposal.totalEligibleVotes}
                    </span>
                  </div>
                  
                  <div className="relative">
                    <div className="luxury-progress">
                      <div 
                        className="h-full rounded-full bg-green-500"
                        style={{ width: `${(proposal.votesFor / proposal.totalEligibleVotes) * 100}%` }}
                      />
                      <div 
                        className="absolute top-0 h-full rounded-full bg-red-500"
                        style={{ 
                          left: `${(proposal.votesFor / proposal.totalEligibleVotes) * 100}%`,
                          width: `${(proposal.votesAgainst / proposal.totalEligibleVotes) * 100}%` 
                        }}
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-green-400">For: {proposal.votesFor}</span>
                    <span className="text-red-400">Against: {proposal.votesAgainst}</span>
                  </div>
                </div>
                
                {/* Voting Actions */}
                {proposal.status === "active" && (
                  <div className="flex space-x-3">
                    <Button className="bg-green-600 hover:bg-green-700 flex-1">
                      Vote For
                    </Button>
                    <Button variant="outline" className="border-red-500 text-red-400 hover:bg-red-500/20 flex-1">
                      Vote Against
                    </Button>
                  </div>
                )}
                
                <div className="text-xs text-white/50 text-center">
                  {proposal.status === "active" 
                    ? `Voting ends ${proposal.endDate.toLocaleDateString()}`
                    : `Voting ended ${proposal.endDate.toLocaleDateString()}`
                  }
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CommunityGovernance;
