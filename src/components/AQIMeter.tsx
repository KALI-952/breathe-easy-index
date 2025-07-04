
import { Progress } from "@/components/ui/progress";

interface AQIMeterProps {
  value: number;
}

const AQIMeter = ({ value }: AQIMeterProps) => {
  const getColor = (aqi: number) => {
    if (aqi <= 50) return "bg-green-500";
    if (aqi <= 100) return "bg-yellow-500";
    if (aqi <= 150) return "bg-orange-500";
    if (aqi <= 200) return "bg-red-500";
    if (aqi <= 300) return "bg-purple-500";
    return "bg-red-800";
  };

  const percentage = Math.min((value / 300) * 100, 100);

  return (
    <div className="w-64">
      <div className="relative">
        <Progress value={percentage} className="h-8 bg-gray-200" />
        <div 
          className={`absolute top-0 left-0 h-8 rounded-md transition-all duration-500 ${getColor(value)}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="flex justify-between text-xs text-gray-500 mt-2">
        <span>0</span>
        <span>Good</span>
        <span>Moderate</span>
        <span>Unhealthy</span>
        <span>300+</span>
      </div>
    </div>
  );
};

export default AQIMeter;
