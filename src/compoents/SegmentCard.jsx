import { FaCheck, FaTimes } from "react-icons/fa";

const SegmentCard = ({
  title,
  subtitle,
  badge,
  features = [],
  type = "basic",
  footer,
}) => {
  const isPremium = type === "premium";

  return (
    <div
      className={`relative rounded-2xl p-4 sm:p-10 border ${
        isPremium
          ? "bg-linear-to-r from-[hsl(190_100%_60%/0.2)] to-[rgb(43_46_50/0.9)] border-cyan-700/40"
          : "bg-[#14181d] border-[#1f2933]"
      }`}
    >
      {badge && (
        <span className="absolute bg-linear-to-r from-cyan-300 to-cyan-200 text-black text-xs px-3 py-1 rounded-full top-2 right-2  
           sm:top-2 sm:right-1">
          {badge}
        </span>
      )}

      <h3
        className={`text-xl font-bold text-center ${
          isPremium ? "text-cyan-400" : "text-gray-200"
        }`}
      >
        {title}
      </h3>
      <p className="text-sm text-gray-400 mb-6 text-center">{subtitle}</p>

      <div className="space-y-3">
        {features.map((item, i) => (
          <div
            key={i}
            className={`flex items-start gap-3 p-4 rounded-xl
              ${
                isPremium
                  ? "bg-[#0b0f14] hover:bg-cyan-900/20 transition"
                  : "bg-[#0b0f14]"
              }`}
          >
            {item.available ? (
              <FaCheck className="text-cyan-400 mt-1" />
            ) : (
              <FaTimes className="text-red-500 mt-1" />
            )}

            <div>
              <p className="text-sm font-semibold text-gray-200">
                {item.title}
              </p>
              <p className="text-xs text-gray-400">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {footer && isPremium && (
        <div className="mt-6 p-4 rounded-xl bg-cyan-900/20 text-cyan-300 text-sm text-center border border-cyan-700/30 ">
          {footer}
        </div>
      )}
    </div>
  );
};

export default SegmentCard;
