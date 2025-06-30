
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { heart } from "lucide-react";

interface FavoriteToggleProps {
  vehicleId: string;
  initialFavorite?: boolean;
  onToggle?: (vehicleId: string, isFavorite: boolean) => void;
}

const FavoriteToggle: React.FC<FavoriteToggleProps> = ({
  vehicleId,
  initialFavorite = false,
  onToggle
}) => {
  const [isFavorite, setIsFavorite] = useState(initialFavorite);

  const handleToggle = () => {
    const newFavoriteState = !isFavorite;
    setIsFavorite(newFavoriteState);
    onToggle?.(vehicleId, newFavoriteState);
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleToggle}
            className="absolute top-4 left-4 bg-black/20 backdrop-blur-sm hover:bg-black/40 transition-all duration-300"
          >
            <heart
              size={20}
              className={`transition-all duration-300 ${
                isFavorite
                  ? "text-red-500 fill-red-500 scale-110"
                  : "text-white/70 hover:text-red-300"
              }`}
            />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{isFavorite ? "Remove from favorites" : "Add to favorites"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default FavoriteToggle;
