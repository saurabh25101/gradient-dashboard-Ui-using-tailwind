 
const Retail = ({
  title,
  amount,
  Service,
  width = "w-full",
  bgColor = "bg-cyan-400",
  textColor = "text-black",
}) => {
  return (
    <div
      className={`
        relative rounded-lg p-6 justify-center mt-5
        ${width} ${bgColor} ${textColor}
        transition-all duration-500
        hover:scale-105
        
      `}
    >
      <h3 className="text-xl font-bold">{title}</h3>

  
      <div className="flex items-center justify-between mt-1">
        <p className="opacity-80">{amount}</p>
        <span className="text-xl text-white">{Service}</span>
      </div>
    </div>
  );
};

export default Retail;
