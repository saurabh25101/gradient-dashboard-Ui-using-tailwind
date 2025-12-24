const ReusableCard = ({ title, children, width, height }) => {
  return (
    <div
      className={`
        inline-block rounded-xl border 
        ${width} ${height} p-5
        bg-linear-to-r
        from-[hsl(190_100%_60%/0.2)]
        to-[rgb(43_46_50/0.9)]
        border-[hsl(190_100%_60%/0.3)]
     
        text-center
      `}
    >
      <h3
        className="
          text-xl font-bold 
          text-cyan-400
          
        "
      >
        {title}
      </h3>

      <div>{children}</div>
    </div>
  );
};

export default ReusableCard;
