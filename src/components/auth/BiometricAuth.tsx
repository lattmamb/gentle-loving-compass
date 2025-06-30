
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Fingerprint, Eye, Shield, CheckCircle, AlertCircle, Zap } from "lucide-react";

interface BiometricAuthProps {
  onAuthSuccess?: (method: string) => void;
  onAuthFailed?: (error: string) => void;
}

const BiometricAuth: React.FC<BiometricAuthProps> = ({ 
  onAuthSuccess = () => {}, 
  onAuthFailed = () => {} 
}) => {
  const [authState, setAuthState] = useState<"idle" | "scanning" | "success" | "failed">("idle");
  const [selectedMethod, setSelectedMethod] = useState<"fingerprint" | "facial" | "voice">("fingerprint");
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    // Check for biometric support (simulated)
    const checkBiometricSupport = async () => {
      // In real implementation, this would check navigator.credentials.get()
      setIsSupported(true);
    };
    checkBiometricSupport();
  }, []);

  const handleBiometricAuth = async (method: "fingerprint" | "facial" | "voice") => {
    setSelectedMethod(method);
    setAuthState("scanning");

    // Simulate biometric authentication
    setTimeout(() => {
      const success = Math.random() > 0.2; // 80% success rate for demo
      if (success) {
        setAuthState("success");
        onAuthSuccess(method);
      } else {
        setAuthState("failed");
        onAuthFailed(`${method} authentication failed`);
      }
    }, 2500);
  };

  const authMethods = [
    {
      id: "fingerprint",
      name: "Fingerprint",
      icon: Fingerprint,
      description: "Touch sensor authentication",
      color: "blue"
    },
    {
      id: "facial",
      name: "Face ID",
      icon: Eye,
      description: "Neural facial recognition",
      color: "green"
    },
    {
      id: "voice",
      name: "Voice",
      icon: Shield,
      description: "Vocal pattern analysis",
      color: "purple"
    }
  ];

  return (
    <Card className="neo-blur border-white/10 p-6 max-w-md mx-auto">
      <div className="text-center mb-6">
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
          <Shield className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Biometric Authentication</h3>
        <p className="text-white/60 text-sm">Secure access with next-gen biometrics</p>
      </div>

      <AnimatePresence mode="wait">
        {authState === "idle" && (
          <motion.div
            key="idle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-3"
          >
            {authMethods.map((method) => {
              const Icon = method.icon;
              return (
                <Button
                  key={method.id}
                  variant="outline"
                  onClick={() => handleBiometricAuth(method.id as any)}
                  disabled={!isSupported}
                  className="w-full justify-start border-white/10 text-white hover:bg-white/5 p-4 h-auto"
                >
                  <Icon className={`w-5 h-5 mr-3 text-${method.color}-400`} />
                  <div className="text-left">
                    <div className="font-medium">{method.name}</div>
                    <div className="text-xs text-white/60">{method.description}</div>
                  </div>
                  <Zap className="w-4 h-4 ml-auto text-yellow-400" />
                </Button>
              );
            })}
          </motion.div>
        )}

        {authState === "scanning" && (
          <motion.div
            key="scanning"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="text-center py-8"
          >
            <div className="relative mb-4">
              <div className="w-24 h-24 rounded-full border-4 border-blue-500/30 flex items-center justify-center mx-auto">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-20 h-20 rounded-full border-t-4 border-blue-500"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  {selectedMethod === "fingerprint" && <Fingerprint className="w-8 h-8 text-blue-400" />}
                  {selectedMethod === "facial" && <Eye className="w-8 h-8 text-green-400" />}
                  {selectedMethod === "voice" && <Shield className="w-8 h-8 text-purple-400" />}
                </div>
              </div>
            </div>
            <p className="text-white font-medium">Scanning {selectedMethod}...</p>
            <p className="text-white/60 text-sm mt-1">Please remain still</p>
          </motion.div>
        )}

        {authState === "success" && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="text-center py-8"
          >
            <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
            <p className="text-white font-medium">Authentication Successful!</p>
            <Badge className="bg-green-600/20 text-green-400 border-green-500/30 mt-2">
              Verified • {selectedMethod}
            </Badge>
          </motion.div>
        )}

        {authState === "failed" && (
          <motion.div
            key="failed"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="text-center py-8"
          >
            <AlertCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
            <p className="text-white font-medium">Authentication Failed</p>
            <p className="text-white/60 text-sm mt-1">Please try again</p>
            <Button
              variant="outline"
              onClick={() => setAuthState("idle")}
              className="mt-4 border-white/10 text-white hover:bg-white/5"
            >
              Try Again
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
};

export default BiometricAuth;
