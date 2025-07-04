
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ForecastChart = () => {
  const forecastData = [
    { time: '12:00', aqi: 75 },
    { time: '17:00', aqi: 85 },
    { time: '22:00', aqi: 95 },
    { time: '03:00', aqi: 70 },
    { time: '08:00', aqi: 80 },
    { time: '13:00', aqi: 90 },
    { time: '18:00', aqi: 100 },
    { time: '23:00', aqi: 85 },
    { time: '04:00', aqi: 65 },
    { time: '09:00', aqi: 75 },
    { time: '14:00', aqi: 95 },
    { time: '19:00', aqi: 110 },
    { time: '00:00', aqi: 90 },
    { time: '05:00', aqi: 70 },
    { time: '10:00', aqi: 80 }
  ];

  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={forecastData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line 
            type="monotone" 
            dataKey="aqi" 
            stroke="#8884d8" 
            strokeWidth={2}
            dot={{ fill: '#8884d8', strokeWidth: 2, r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ForecastChart;
