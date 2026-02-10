interface StatCardProps {
  number: string;
  label: string;
  textColor: string;
  position: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
}

const positionClasses = {
  topLeft: "left-[697px] top-[348px]",
  topRight: "left-[1007px] top-[288px]",
  bottomRight: "left-[1007px] top-[518px]",
  bottomLeft: "left-[697px] top-[578px]",
};

export default function StatCard({ number, label, textColor, position }: StatCardProps) {
  const isLarge = number.includes("40") || number.includes("9+") ? true : false;
  const numberSize = isLarge ? "text-[96px]" : "text-[64.899px]";

  return (
    <div className={`absolute bg-[#fffbfb] content-stretch flex flex-col h-[180px] items-center justify-center p-[10px] rounded-[16px] shadow-[30px_30px_60px_0px_rgba(85,85,85,0.1)] text-center w-[260px] whitespace-pre-wrap ${positionClasses[position]}`}>
      <p className={`font-['Protest_Strike:Regular',sans-serif] leading-[101.985px] not-italic relative shrink-0 ${textColor} ${numberSize} tracking-[-1.3907px] w-full`}>
        {number}
      </p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#606060] text-[20px] w-full">
        {label}
      </p>
    </div>
  );
}
