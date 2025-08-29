import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AudioPlayerProps {
  title: string;
  duration?: string;
}

const AudioPlayer = ({ title, duration = "2:30" }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // In a real app, this would control actual audio playback
    if (!isPlaying) {
      // Simulate progress for demo
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 150);
    }
  };

  return (
    <div className="bg-card rounded-lg p-6 shadow-soft border border-border">
      <h3 className="font-display font-semibold text-lg mb-4 text-primary">
        {title}
      </h3>
      
      <div className="flex items-center space-x-4">
        <Button
          variant="outline"
          size="sm"
          onClick={togglePlay}
          className="w-12 h-12 rounded-full p-0 border-accent hover:bg-accent hover:text-accent-foreground"
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </Button>
        
        <div className="flex-1">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>0:00</span>
            <span>{duration}</span>
          </div>
          
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-accent h-2 rounded-full transition-all duration-150"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;