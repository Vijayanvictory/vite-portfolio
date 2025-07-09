import { useState, useEffect } from "react";

export default function UnderConstruction() {
  const [timeLeft, setTimeLeft] = useState({
    days: 10,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Countdown Timer Effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) seconds--;
        else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
        🚧 Under Construction 🚧
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-6">
        Our website is coming soon! Stay tuned for updates.
      </p>

      {/* Countdown Timer */}
      <div className="flex space-x-4 mb-6" style={{color:'white', backgroundColor:'black'}}>
        {Object.entries(timeLeft).map(([key, value]) => (
          <div key={key} className="flex flex-col items-center">
            <span className="p-4 bg-gray-800 text-white rounded-lg text-2xl min-w-[60px]">
              {String(value).padStart(2, "0")}
            </span>
            <span className="text-gray-500 text-sm">{key}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
