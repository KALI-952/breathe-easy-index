
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const HistoricalChart = () => {
  const [selectedDays, setSelectedDays] = useState("10");
  const [selectedPeriod, setSelectedPeriod] = useState("days");

  const generateHistoricalData = (days: number) => {
    const data = [];
    for (let i = days; i >= 1; i--) {
      let label = "";
      if (selectedPeriod === "days") {
        label = `Day ${days - i + 1}`;
      } else if (selectedPeriod === "week") {
        label = `Week ${Math.ceil((days - i + 1) / 7)}`;
      } else {
        label = `${i}/${new Date().getMonth() + 1}`;
      }
      
      data.push({
        day: label,
        aqi: Math.floor(Math.random() * 200) + 30
      });
    }
    return data;
  };

  const historicalData = generateHistoricalData(parseInt(selectedDays));

  return (
    <div>
      <div className="flex space-x-4 mb-6">
        <div className="flex items-center space-x-2">
          <label className="text-sm font-medium">Days:</label>
          <Select value={selectedDays} onValueChange={setSelectedDays}>
            <SelectTrigger className="w-20">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 31 }, (_, i) => (
                <SelectItem key={i + 1} value={(i + 1).toString()}>
                  {i + 1}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center space-x-2">
          <label className="text-sm font-medium">Period:</label>
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-24">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="days">Days</SelectItem>
              <SelectItem value="week">Week</SelectItem>
              <SelectItem value="month">Month</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={historicalData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="aqi" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default HistoricalChart;
