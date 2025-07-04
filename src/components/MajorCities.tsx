
const MajorCities = () => {
  const cities = [
    { name: "Delhi", aqi: 178, status: "Unhealthy" },
    { name: "Mumbai", aqi: 95, status: "Moderate" },
    { name: "Bangalore", aqi: 68, status: "Moderate" },
    { name: "Kolkata", aqi: 145, status: "Unhealthy for Sensitive Groups" }
  ];

  const getBarColor = (aqi: number) => {
    if (aqi <= 50) return "bg-green-500";
    if (aqi <= 100) return "bg-yellow-500";
    if (aqi <= 150) return "bg-orange-500";
    if (aqi <= 200) return "bg-red-500";
    if (aqi <= 300) return "bg-purple-500";
    return "bg-red-800";
  };

  return (
    <div className="space-y-4">
      {cities.map((city, index) => (
        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-4 flex-1">
            <div className="w-24 font-medium">{city.name}</div>
            <div className="flex-1 bg-gray-200 rounded-full h-6 relative">
              <div 
                className={`h-6 rounded-full ${getBarColor(city.aqi)} transition-all duration-500`}
                style={{ width: `${Math.min((city.aqi / 300) * 100, 100)}%` }}
              />
            </div>
          </div>
          <div className="flex items-center space-x-4 ml-4">
            <div className="text-2xl font-bold">{city.aqi}</div>
            <div className="text-sm text-gray-600 w-32">{city.status}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MajorCities;
