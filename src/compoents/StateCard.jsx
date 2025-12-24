const StateCard = ({ icon, number, label }) => {
  return (
    <div
      className="
    py-5 px-10 rounded-lg text-center 
    border border-gray-800 bg-[#1b1d23]
    hover:border-cyan-900
    w-full max-w-64
  "
    >
      <div className="h-8 mx-auto flex items-center justify-center text-cyan-400 text-2xl">
        {icon}
      </div>

      <h3 className="text-xl font-bold mb-2 text-cyan-400">{number}</h3>
      <p className="text-base text-[#A6A6A6]">{label}</p>
    </div>
  );
};

export default StateCard;
