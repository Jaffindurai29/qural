import React from 'react';

interface HexagonNumberProps {
    number: string | number;
    className?: string;
}

const HexagonNumber: React.FC<HexagonNumberProps> = ({ number, className = '' }) => {
    return (
        <div className={`relative flex items-center justify-center w-14 h-16 ${className}`}>
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-[#ed3543] opacity-5 blur-xl rounded-full"></div>
            <svg
                viewBox="0 0 100 115"
                className="absolute inset-0 w-full h-full drop-shadow-sm"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M50 2L95 28.5V86.5L50 113L5 86.5V28.5L50 2Z"
                    stroke="#ed3543"
                    strokeWidth="3"
                    strokeOpacity="0.4"
                />
            </svg>
            <span className="relative z-10 text-3xl font-bold font-['Outfit'] text-[#ed3543]">
                {number}
            </span>
        </div>
    );
};

export default HexagonNumber;
