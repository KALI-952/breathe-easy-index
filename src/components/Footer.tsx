
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-1 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Data Sources</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• Central Pollution Control Board (CPCB)</li>
              <li>• State Pollution Control Boards</li>
              <li>• Real-time monitoring stations</li>
              <li>• Satellite data from NASA and ESA</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
          <p>&copy; 2024 Air Quality Index Monitor. Data updated every hour.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
