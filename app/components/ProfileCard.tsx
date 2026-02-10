interface ProfileCardProps {
  name: string;
  beforeRole: string;
  afterRole: string;
  profileImage: string;
  companyLogo: string;
  svgIcon: string;
  polygonImage: string;
  imageIcon: string;
  nodeId: string;
}

export default function ProfileCard({
  name,
  beforeRole,
  afterRole,
  profileImage,
  companyLogo,
  svgIcon,
  polygonImage,
  imageIcon,
  nodeId,
}: ProfileCardProps) {
  return (
    <div className="h-[530px] overflow-clip relative shrink-0 w-[424px]" data-name="Profile Card" data-node-id={nodeId}>
      <div className="absolute bg-[#ed3543] border border-[#e5e8eb] border-solid h-[498px] left-[16px] right-[16px] rounded-[6px] shadow-[0px_0.544px_3.264px_0px_rgba(6,13,24,0.09)] top-[16px]">
        {/* Gradient Background */}
        <div className="absolute bg-gradient-to-t from-[rgba(246,247,248,0)] inset-[calc(0.28%-0.99px)_0_calc(45.1%-0.1px)_0] rounded-[6px] to-[#f6f7f8]" />

        {/* Name */}
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] left-[calc(50%+0.11px)] text-[20px] text-center text-white top-[223px] w-[174.22px]" style={{ fontVariationSettings: "\'opsz\' 14" }}>
          <p className="leading-[28px] whitespace-pre-wrap">{name}</p>
        </div>

        {/* Company Logo */}
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[28.44px] left-[calc(50%-1px)] top-[calc(50%+2.78px)] w-[160px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[100.02%] left-0 max-w-none top-[-0.01%] w-full" src={companyLogo} />
          </div>
        </div>

        {/* Details Section */}
        <div className="absolute border-[#e5e7eb] border-solid border-t h-[224px] left-0 right-0 top-[272px]">
          {/* Before Role */}
          <div className="absolute bg-[#ed3543] border border-[#d1d5db] border-solid h-[56px] left-[16px] right-[16px] rounded-[12px] top-[16px]">
            <div className="-translate-y-1/2 absolute border border-[#d1d5db] border-solid left-[16px] rounded-[9999px] size-[12px] top-1/2" />
            <div className="-translate-y-1/2 absolute h-[20px] left-[44px] overflow-clip top-1/2 w-[168.81px]">
              <div className="-translate-y-1/2 absolute flex flex-col font-['Outfit:Medium',sans-serif] font-medium h-[18px] justify-center leading-[0] left-0 text-[14px] text-white top-[10px] w-[169.141px]">
                <p className="leading-[20px] whitespace-pre-wrap">{beforeRole}</p>
              </div>
            </div>
          </div>

          {/* After Role */}
          <div className="absolute bg-[#e6f7e9] border border-[#d2efe3] border-solid bottom-[16px] h-[56px] left-[16px] right-[16px] rounded-[12px]">
            <div className="-translate-y-1/2 absolute bg-[#0dba4b] left-[16px] rounded-[9999px] shadow-[0px_0px_0px_2px_white,0px_0px_0px_4px_#0dba4b] size-[8px] top-1/2" />
            <div className="-translate-y-1/2 absolute flex flex-col font-['Outfit:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] left-[40px] text-[#b71f38] text-[14px] top-[27px]">
              <p className="leading-[20px] whitespace-pre-wrap">{afterRole}</p>
            </div>
          </div>

          {/* Divider */}
          <div className="absolute border-[#d1d5db] border-dashed border-l-2 inset-[72px_16px_72px_36px]" />

          {/* Icon */}
          <div className="absolute left-[28px] rounded-[295.281px] size-[20px] top-[100px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[295.281px] size-full" src={imageIcon} />
          </div>

          {/* Label */}
          <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[64px] text-[14px] text-white top-[110px] w-[99.083px]" style={{ fontVariationSettings: "\'opsz\' 9" }}>
            <p className="leading-[20px] whitespace-pre-wrap">After QURAL</p>
          </div>

          {/* SVG Icon */}
          <div className="absolute h-[9px] left-[32px] top-[142px] w-[10.125px]">
            <img alt="" className="block max-w-none size-full" src={svgIcon} />
          </div>
        </div>

        {/* Profile Circle */}
        <div className="-translate-x-1/2 -translate-y-1/2 absolute border-[#ed3543] border-[3.451px] border-solid left-[calc(50%+0.7px)] rounded-[86.286px] size-[124.252px] top-[calc(50%-139.91px)]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[86.286px] size-full" src={profileImage} />
        </div>
      </div>
    </div>
  );
}
