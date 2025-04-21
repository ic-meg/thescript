const DesktopIcon = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center w-[80px] cursor-pointer select-none text-black hover:brightness-125 px-1 py-2">
      <img src={icon} alt={label} className="w-[32px] h-[32px] mb-1" />
      <span
        className="text-center text-[12px] font-['Courier_New',_monospace] leading-tight
        text-white">
        {label}
      </span>
    </div>
    
  );
};

export default DesktopIcon;
