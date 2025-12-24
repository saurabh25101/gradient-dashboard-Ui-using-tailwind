 import React from "react";

const FeatureCard = ({
  title,
  amount,
  badge,
  points = [],
  width,
  bgColor,
  textColor = "text-white",
}) => {
  return (
    <div className={`relative rounded-lg p-8 ${width} ${bgColor} ${textColor} transition-all duration-500 hover:scale-105`}>
     
      {badge && (
        <span className="absolute -bottom-3 right-4 px-4 py-1 rounded-full bg-[hsl(218.18deg_13.58%_15.88%)] font-semibold">
          {badge}
        </span>
      )}

     
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="opacity-80">{amount}</p>
      </div>

      
       {points.length > 0 && (
    <ul className="mt-4 flex flex-wrap justify-between gap-4 -mb-25">
      {points.map((item, index) => (
        <li key={index} className="flex items-center gap-2 text-sm opacity-90 min-w-30">
          <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block"></span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
      )}
    </div>
  );
};

export default FeatureCard;
