import React from 'react';
import Image from 'next/image';

interface ProfileCardProps {
  name: string;
  beforeRole: string;
  afterRole: string;
  profileImage: string;
  companyLogo: string;
  svgIcon?: string;
}

export default function ProfileCard({
  name,
  beforeRole,
  afterRole,
  profileImage,
  companyLogo,
}: ProfileCardProps) {
  return (
    <div className="relative group w-[400px] h-[450px]">
      {/* Red Border / Outer Container */}
      <div className="absolute inset-[16px] border border-white/20 rounded-[8px] bg-[#ed3543] shadow-lg overflow-hidden">

        {/* Glassy Top Gradient */}
        <div className="absolute inset-x-0 top-0 h-[50%] bg-gradient-to-b from-white/90 to-transparent rounded-t-[8px]" />

        {/* Decorative Polygon behind Profile Image */}
        <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-44 h-44 opacity-60 pointer-events-none z-10">
          <img
            src="/Group-polygon.svg"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        {/* Profile Image */}
        <div className="absolute top-[25px] left-1/2 -translate-x-1/2 w-[110px] h-[110px] rounded-full border-[3px] border-[#ed3543] shadow-lg overflow-hidden z-20 bg-white">
          <img
            src={profileImage}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name & Company */}
        <div className="absolute top-[135px] inset-x-0 flex flex-col items-center gap-2 z-20">
          <h3 className="font-['Outfit'] font-bold text-[20px] font-bold text-white text-center">
            {name}
          </h3>
          <img
            src={companyLogo}
            alt="Company"
            className="h-[28px] w-auto object-contain brightness-0 invert"
          />
        </div>

        {/* Transformation Section */}
        <div className="absolute top-[205px] inset-x-0 bottom-0 border-t border-white/20 p-3 flex flex-col gap-2 z-20">

          {/* Before Role (Red Box) */}
          <div className="relative bg-[#ed3543] border border-white/30 rounded-[10px] p-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-white/50 flex items-center justify-center text-white text-[12px] font-bold shrink-0">
              O
            </div>
            <span className="font-['Outfit'] font-medium text-sm text-white">{beforeRole}</span>
          </div>

          {/* After QURAL Label & Connector */}
          <div className="relative flex items-center justify-center h-8">
            {/* Dashed Line */}
            <div className="absolute left-[32px] top-[-10px] bottom-[-10px] border-l-2 border-dashed border-white/30" />

            <div className="flex items-center gap-2 bg-[#ed3543] px-2 z-10">
              <div className="w-5 h-5 rounded-full border border-white/50 flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
              <span className="text-[12px] uppercase tracking-wider text-white/80 font-bold">After QURAL</span>
            </div>
          </div>

          {/* After Role (Green Box) */}
          <div className="relative bg-[#e6f7e9] border border-[#d2efe3] rounded-[10px] p-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#0dba4b] flex items-center justify-center text-white ring-4 ring-[#0dba4b]/20 shrink-0">
              <div className="w-4 h-4 border-2 border-white border-t-0 border-l-0 rotate-45 translate-y-[-1px]" />
            </div>
            <span className="font-['Outfit'] font-bold text-sm text-[#b71f38] font-bold">{afterRole}</span>
          </div>

        </div>
      </div>
    </div>
  );
}