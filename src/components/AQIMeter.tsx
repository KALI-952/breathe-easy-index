
interface AQIMeterProps {
  value: number;
  className?: string;
}

const AQIMeter = ({ value, className = "" }: AQIMeterProps) => {
  const getColor = (aqi: number) => {
    if (aqi <= 50) return "#22c55e"; // green
    if (aqi <= 100) return "#eab308"; // yellow
    if (aqi <= 150) return "#f97316"; // orange
    if (aqi <= 200) return "#ef4444"; // red
    if (aqi <= 300) return "#a855f7"; // purple
    return "#991b1b"; // dark red
  };

  const percentage = Math.min((value / 300) * 100, 100);
  const strokeWidth = 20;
  const radius = 80;
  const circumference = Math.PI * radius; // Half circle
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="relative">
        {/* Background arc */}
        <svg width="200" height="120" className="transform -rotate-0">
          <defs>
            <linearGradient id="aqiGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22c55e" />
              <stop offset="20%" stopColor="#eab308" />
              <stop offset="40%" stopColor="#f97316" />
              <stop offset="60%" stopColor="#ef4444" />
              <stop offset="80%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#991b1b" />
            </linearGradient>
          </defs>
          {/* Background arc */}
          <path
            d={`M 20 100 A ${radius} ${radius} 0 0 1 180 100`}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          {/* Progress arc */}
          <path
            d={`M 20 100 A ${radius} ${radius} 0 0 1 180 100`}
            fill="none"
            stroke="url(#aqiGradient)"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        
        {/* Center indicator */}
        <div 
          className="absolute bottom-2 w-4 h-4 rounded-full border-4 border-white shadow-lg transition-all duration-500"
          style={{ 
            backgroundColor: getColor(value),
            left: `${20 + (percentage / 100) * 160 - 8}px`
          }}
        />
      </div>
      
      {/* Labels */}
      <div className="flex justify-between w-full text-xs text-gray-500 mt-2 px-2">
        <span>0</span>
        <span className="text-green-600">Good</span>
        <span className="text-yellow-600">Moderate</span>
        <span className="text-red-600">Unhealthy</span>
        <span>300+</span>
      </div>
    </div>
  );
};

export default AQIMeter;
