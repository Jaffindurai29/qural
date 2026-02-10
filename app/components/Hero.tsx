const imgFrame1321314585 = "https://www.figma.com/api/mcp/asset/fbf423f1-8200-4d6a-bc5f-d0b0722d5b5b";
const imgEllipse1 = "https://www.figma.com/api/mcp/asset/26d947b9-e3de-4845-ad8f-c424e420a4a2";
const imgEllipse3 = "https://www.figma.com/api/mcp/asset/838d0c48-a1cc-4dfd-ae85-0c681c3624bf";
const imgEllipse2 = "https://www.figma.com/api/mcp/asset/7d763164-295c-482e-9530-32eeaf404703";
const imgGroup357 = "https://www.figma.com/api/mcp/asset/87cd4bdd-ed40-429c-912b-9b2c056599ea";
const imgGroup358 = "https://www.figma.com/api/mcp/asset/37fc654e-029d-4a88-95aa-8d97b9cc98bb";
const imgEllipse7 = "https://www.figma.com/api/mcp/asset/4d102b37-fac9-412a-bfb2-5e4a4fe909fa";
const imgEllipse8 = "https://www.figma.com/api/mcp/asset/de2366b3-915b-4434-97b2-359b75c89459";
const imgVector = "https://www.figma.com/api/mcp/asset/7ad26c02-f558-4976-bd2d-cd1cafc9955d";
const imgGroup1000001535 = "https://www.figma.com/api/mcp/asset/41705f08-c72b-451d-b061-292d2da318f3";
const imgRectangle1 = "https://www.figma.com/api/mcp/asset/f9b4a78c-b47b-4d2f-a18f-cff2c0c09543";
const imgRectangle2 = "https://www.figma.com/api/mcp/asset/21c08f64-5396-453d-b62c-549ee0df7350";

export default function Hero() {
    return (
        <div className="bg-black relative w-full min-h-screen overflow-hidden font-['Outfit:Regular',sans-serif]" data-name="Pexio" data-node-id="163:3">
            {/* Background Elements - Absolute but anchored to center/scale properly */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Top Left Ellipses - Even Thicker & More Centered */}
                <div className="absolute top-[-140px] left-[-20px] w-[700px] h-[750px] flex justify-center items-center scale-90">
                    <div className="rotate-[46.53deg]">
                        <div className="relative w-[900px] h-[450px] scale-y-150">
                            <img alt="" className="block w-full h-full object-contain brightness-150" src={imgEllipse2} />
                        </div>
                    </div>
                </div>
                <div className="absolute top-[-450px] left-[-40px] w-[700px] h-[750px] flex justify-center items-center scale-90">
                    <div className="rotate-[46.53deg]">
                        <div className="relative w-[900px] h-[650px] scale-y-150">
                            <img alt="" className="block w-full h-full object-contain brightness-150" src={imgEllipse2} />
                        </div>
                    </div>
                </div>
                <div className="absolute top-[-220px] left-[-380px] w-[700px] h-[750px] flex justify-center items-center scale-90">
                    <div className="rotate-[46.53deg]">
                        <div className="relative w-[900px] h-[450px] scale-y-150">
                            <img alt="" className="block w-full h-full object-contain brightness-150" src={imgEllipse2} />
                        </div>
                    </div>
                </div>

                {/* Bottom Center Ellipses - Scaled Down */}
                <div className="absolute left-1/2 -translate-x-1/2 top-[700px] w-[1200px] h-[1200px] opacity-40">
                    <img alt="" className="block w-full h-full object-cover" src={imgEllipse7} />
                </div>
                <div className="absolute left-[20px] top-[800px] w-[1100px] h-[1100px] opacity-30">
                    <img alt="" className="block w-full h-full object-cover" src={imgEllipse8} />
                </div>
                {/* Bottom Blur */}
                <div className="absolute left-0 bottom-0 w-full h-[250px] bg-black blur-[60px]" />

                {/* Vector Wave - Scaled Down Height */}
                <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-[1200px] h-[380px] flex justify-center items-end">
                    <div className="-scale-y-100 rotate-180 w-full h-full relative">
                        <img alt="" className="block w-full h-full object-cover" src={imgVector} />
                    </div>
                </div>
            </div>

            {/* Navigation Bar - Centered Container - Compact */}
            <nav className="absolute top-[30px] left-0 right-0 z-50 flex justify-between items-center w-full max-w-[1200px] mx-auto px-[40px]">
                {/* Logo Placeholder */}
                <div className="w-[120px] hidden md:block">
                    {/* Space for logo */}
                </div>

                {/* Centered Nav Links - Smaller Font */}
                <div className="flex gap-[40px] text-[16px] text-[rgba(255,255,255,0.8)] font-['Outfit:Regular',sans-serif]">
                    <a href="#" className="text-white hover:text-[#ed3543] transition-colors relative">Home</a>
                    <a href="#" className="hover:text-white transition-colors relative">Feature</a>
                    <a href="#" className="hover:text-white transition-colors relative">Pricing</a>
                    <a href="#" className="hover:text-white transition-colors relative">Contact</a>
                    <a href="#" className="hover:text-white transition-colors relative">Pages</a>
                </div>

                {/* Right Button - Compact */}
                <button className="bg-[#f4f4f4] px-[18px] py-[6px] rounded-[6px] shadow-md flex items-center justify-center relative group hover:scale-105 transition-transform w-[150px]">
                    <span className="text-[#ed3543] font-['Outfit:SemiBold',sans-serif] font-semibold text-[14px] relative z-10">Want to Upskill ?</span>
                    <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0.5px_0.5px_0.5px_white,inset_-0.5px_-0.5px_0.5px_rgba(0,0,0,0.1)] pointer-events-none" />
                </button>
            </nav>

            {/* Main Content - Centered Absolute Container - Tighter Spacing */}
            <div className="absolute top-[160px] left-0 right-0 z-10 flex flex-col items-center pointer-events-none">

                {/* Tagline Pill - Scaled Down */}
                <div className="relative w-[500px] h-[40px] flex justify-center items-center pointer-events-auto">
                    <div className="bg-[rgba(233,12,12,0.1)] backdrop-blur-sm px-[24px] py-[10px] rounded-[24px] border border-[rgba(233,12,12,0.1)]">
                        <p className="text-white text-[16px] leading-none whitespace-nowrap">Where careers are engineered</p>
                    </div>
                    {/* Decorative Lines - Thicker & Longer */}
                    <div className="absolute left-[380px] top-[5px] w-[240px] h-[30px] flex flex-col justify-between">
                        <div className="w-full h-[6px] bg-white opacity-40 rounded-full" />
                        <div className="w-full h-[6px] bg-white opacity-40 rounded-full" />
                        <div className="w-full h-[6px] bg-white opacity-40 rounded-full" />
                    </div>
                    <div className="absolute right-[380px] top-[5px] w-[240px] h-[30px] flex flex-col justify-between">
                        <div className="w-full h-[6px] bg-white opacity-40 rounded-full" />
                        <div className="w-full h-[6px] bg-white opacity-40 rounded-full" />
                        <div className="w-full h-[6px] bg-white opacity-40 rounded-full" />
                    </div>
                </div>

                {/* Headline - H1 - Smaller */}
                <h1 className="mt-[24px] font-['Outfit:SemiBold',sans-serif] font-semibold text-[48px] text-white leading-tight text-center pointer-events-auto">
                    Engineering careers aren't accidental.
                </h1>

                {/* Headline - H2 (Accent) - Smaller */}
                <h2 className="mt-[4px] font-['Outfit:SemiBold',sans-serif] font-semibold text-[56px] text-white leading-none text-center pointer-events-auto">
                    <span className="align-middle text-[56px]">They're </span>
                    <span className="text-[#ee3042] align-middle text-[56px]">ENGINEERED</span>.
                </h2>

                {/* Subtext - Smaller */}
                <p className="mt-[16px] font-['Outfit:Regular',sans-serif] text-[20px] text-[rgba(255,255,255,0.9)] text-center pointer-events-auto">
                    Building Talent. Powering Projects. Scaling Futures
                </p>

                {/* Main CTA Button - "Looking for a Talent?" - Smaller */}
                <div className="mt-[36px] w-[280px] h-[54px] relative group cursor-pointer pointer-events-auto rounded-[10px]">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#ed3543] to-[#bb1f36] rounded-[10px]" />
                    <div className="absolute inset-0 opacity-40 mix-blend-plus-lighter rounded-[10px]" style={{ backgroundImage: `url('${imgFrame1321314585}')`, backgroundSize: '250px' }} />

                    <div className="absolute inset-0 flex items-center justify-center border border-white rounded-[10px] shadow-[0px_16px_24px_rgba(229,0,92,0.15)] group-hover:shadow-[0px_20px_32px_rgba(229,0,92,0.25)] transition-shadow">
                        <p className="font-['Outfit:SemiBold',sans-serif] font-semibold text-[20px] text-white relative z-10">Looking for a Talent ?</p>
                    </div>
                </div>

            </div>

            {/* Testimonial Cards - Adjusted Positions for Compact Layout */}
            {/* Purple Card (Right) */}
            <div className="absolute top-[550px] left-[70%] xl:left-[68%] 2xl:left-[66%] flex items-center gap-[20px] bg-[#8338ec] border-[1px] border-white p-[8px] rounded-tl-[10px] rounded-bl-[10px] rounded-tr-[20px] shadow-lg animate-float-slow z-20 scale-90 origin-right">
                <div className="text-white text-[14px] font-['Outfit:Regular',sans-serif] leading-[18px] text-right">
                    <p className="m-0">We design, deploy, and scale high-performance</p>
                    <p className="m-0">BIM & EPC talent for global AEC firms.</p>
                </div>
                <div className="relative w-[30px] h-[30px] flex-shrink-0 rounded-full overflow-hidden border border-white/30">
                    <img alt="" className="w-full h-full object-cover" src={imgEllipse1} />
                </div>
            </div>

            {/* Yellow Card (Lower Right) */}
            <div className="absolute top-[650px] left-[60%] xl:left-[58%] 2xl:left-[56%] flex items-center gap-[20px] bg-[#fee440] border-[1px] border-white p-[8px] rounded-tl-[10px] rounded-bl-[10px] rounded-tr-[20px] shadow-lg animate-float-slower z-20 scale-90 origin-right">
                <div className="text-[#343a40] text-[14px] font-['Outfit:Regular',sans-serif] leading-[18px] text-right">
                    <p className="m-0">Qural Connects Talent, Industry and academia</p>
                    <p className="m-0">into one engineered ecosystem.</p>
                </div>
                <div className="relative w-[30px] h-[30px] flex-shrink-0 rounded-full overflow-hidden border border-white/30">
                    <img alt="" className="w-full h-full object-cover" src={imgEllipse1} />
                </div>
            </div>

            {/* Logo Badge (Bottom Right) - Smaller */}
            <div className="absolute bottom-[6%] right-[2%] w-[120px] h-[120px] z-10 animate-pulse-slow hidden lg:block">
                <img alt="" className="w-full h-full object-contain" src={imgGroup1000001535} />
            </div>

            {/* Scroll Indicators (Bottom Right) - Smaller */}
            <div className="absolute bottom-[100px] right-[120px] hidden lg:block scale-90">
                <div className="w-[40px] h-[40px] rounded-[30px] flex items-center justify-center -rotate-90 relative">
                    <div className="absolute inset-0 border border-white/20 rounded-full" />
                    <div className="w-[28px] h-[28px] rotate-90">
                        <img alt="" className="w-full h-full" src={imgEllipse3} />
                    </div>
                </div>
            </div>
            <div className="absolute bottom-[200px] right-[36px] hidden lg:block scale-90">
                <div className="w-[40px] h-[40px] rounded-[30px] flex items-center justify-center -rotate-90 relative">
                    <div className="absolute inset-0 border border-white/20 rounded-full" />
                    <div className="w-[28px] h-[28px] rotate-90">
                        <img alt="" className="w-full h-full" src={imgEllipse3} />
                    </div>
                </div>
            </div>
        </div>
    );
}
