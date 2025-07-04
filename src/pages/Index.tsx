import { useState, useEffect } from "react";
import { MapPin, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AQIMeter from "@/components/AQIMeter";
import ForecastChart from "@/components/ForecastChart";
import HistoricalChart from "@/components/HistoricalChart";
import MajorCities from "@/components/MajorCities";
import Footer from "@/components/Footer";

const Index = () => {
  const [searchCity, setSearchCity] = useState("");
  const [currentAQI, setCurrentAQI] = useState(75);
  const [selectedCity, setSelectedCity] = useState("Delhi");

  const getAQIColor = (aqi: number) => {
    if (aqi <= 50) return "text-green-600";
    if (aqi <= 100) return "text-yellow-600";
    if (aqi <= 150) return "text-orange-600";
    if (aqi <= 200) return "text-red-600";
    if (aqi <= 300) return "text-purple-600";
    return "text-red-800";
  };

  const getAQIStatus = (aqi: number) => {
    if (aqi <= 50) return { status: "Good", color: "text-green-600", suggestion: "Air quality is satisfactory. Perfect for outdoor activities!" };
    if (aqi <= 100) return { status: "Moderate", color: "text-yellow-600", suggestion: "Air quality is acceptable. Sensitive individuals should limit outdoor activities." };
    if (aqi <= 150) return { status: "Unhealthy for Sensitive Groups", color: "text-orange-600", suggestion: "Consider wearing a mask if you have respiratory conditions." };
    if (aqi <= 200) return { status: "Unhealthy", color: "text-red-600", suggestion: "Everyone should wear a mask and limit outdoor activities." };
    if (aqi <= 300) return { status: "Very Unhealthy", color: "text-purple-600", suggestion: "Avoid outdoor activities. Stay indoors and use air purifiers." };
    return { status: "Hazardous", color: "text-red-800", suggestion: "Emergency conditions. Stay indoors and avoid all outdoor activities." };
  };

  const aqiData = getAQIStatus(currentAQI);

  const handleSearch = () => {
    // Simulate API call with random AQI
    const randomAQI = Math.floor(Math.random() * 300) + 1;
    setCurrentAQI(randomAQI);
    setSelectedCity(searchCity || "Unknown City");
    console.log(`Searching for AQI in: ${searchCity}`);
  };

  const handleCurrentLocation = () => {
    // Simulate getting current location
    setCurrentAQI(85);
    setSelectedCity("Your Location");
    console.log("Using current location");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=80&h=80&fit=crop&crop=center" 
                alt="Air Pollution" 
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div>
                <h1 className="text-3xl font-bold text-gray-800">AIR QUALITY INDEX</h1>
                <p className="text-gray-600">Know the Air You Breathe</p>
              </div>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="mt-6 flex items-center space-x-4 max-w-md">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search city"
                value={searchCity}
                onChange={(e) => setSearchCity(e.target.value)}
                className="pl-10"
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
            </div>
            <Button onClick={handleSearch} className="px-6">
              Search
            </Button>
            <Button 
              variant="outline" 
              onClick={handleCurrentLocation}
              className="flex items-center space-x-2"
            >
              <MapPin className="w-4 h-4" />
              <span>Current Location</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Current AQI Display */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">Current Air Quality in {selectedCity}</h2>
          <div className="flex items-center justify-center space-x-8">
            <AQIMeter value={currentAQI} />
            <div className="text-center">
              <div className={`text-6xl font-bold mb-2 ${getAQIColor(currentAQI)}`}>{currentAQI}</div>
              <div className={`text-xl font-semibold mb-4 ${aqiData.color}`}>
                {aqiData.status}
              </div>
              <div className="text-gray-600 max-w-xs">
                {aqiData.suggestion}
              </div>
            </div>
          </div>
        </div>

        {/* Forecast Chart */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-semibold mb-6">24-72 Hour AQI Forecast</h3>
          <ForecastChart />
        </div>

        {/* Historical Data */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-semibold mb-6">Historical AQI Data</h3>
          <HistoricalChart />
        </div>

        {/* Detailed Health Recommendations */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-semibold mb-6">Detailed Health Recommendations</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-3 text-blue-600">General Guidelines</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Consult healthcare professionals for respiratory issues</li>
                <li>• Use N95 masks during high pollution days</li>
                <li>• Keep windows closed during peak pollution hours</li>
                <li>• Consider air purifiers for indoor spaces</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3 text-green-600">Preventive Measures</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Exercise indoors when AQI is above 100</li>
                <li>• Stay hydrated to help flush toxins</li>
                <li>• Avoid outdoor activities during rush hours</li>
                <li>• Use public transport to reduce emissions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Major Cities */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-semibold mb-6">Today's AQI - Major Metropolitan Cities</h3>
          <MajorCities />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
