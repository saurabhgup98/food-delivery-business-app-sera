import React from 'react';
import { SectionHeaderPrimaryProps } from './interfaces/SectionHeaderPrimaryInterface';
import { SIZE_CONFIG, DOT_COLOR_CONFIG } from './config/SectionHeaderPrimaryConfig';

const SectionHeaderPrimary: React.FC<SectionHeaderPrimaryProps> = ({
    icon,
    heading,
    subHeading,
    rightSideDot,
    rightSideText,
    size = 'medium',
    className = '',
    isExpandable = false,
    isExpanded = false,
    onToggle
}) => {
    const config = SIZE_CONFIG[size];
    const dotConfig = rightSideDot ? DOT_COLOR_CONFIG[rightSideDot.color] : null;

    return (
        <div 
            className={`bg-gradient-to-br from-sera-pink/60 via-sera-orange/50 to-sera-yellow/55 border-b-2 border-sera-pink/50 relative z-10 flex-shrink-0 ${isExpandable ? 'cursor-pointer hover:bg-gradient-to-r hover:from-sera-pink/70 hover:to-sera-orange/60 transition-all duration-300' : ''} ${className}`}
            onClick={isExpandable ? onToggle : undefined}
        >
            <div className={config.padding}>
                <div className="flex items-center justify-between">
                    {/* Left Side - Icon and Text */}
                    <div className="flex items-center space-x-3">
                        {/* Enhanced Icon */}
                        <div className={`${config.iconSize} bg-gradient-to-br from-white/40 to-white/20 rounded-xl flex items-center justify-center shadow-xl border border-white/40 backdrop-blur-sm`}>
                            <span className={`text-white ${config.iconTextSize} drop-shadow-lg`}>{icon}</span>
                        </div>

                        <div>
                            <h2 className={`text-white font-bold ${config.headingSize} drop-shadow-lg tracking-wide`}>
                                {heading}
                            </h2>
                            <p className={`text-white/90 ${config.subHeadingSize} font-medium tracking-wide`}>
                                {subHeading}
                            </p>
                        </div>
                    </div>

                    {/* Right Side - Optional Dot, Text, and Expand Arrow */}
                    {(rightSideDot || rightSideText || isExpandable) && (
                        <div className="flex items-center space-x-2">
                            {/* Optional Dot */}
                            {rightSideDot && (
                                <div className="flex items-center space-x-1">
                                    <div className={`w-3 h-3 ${dotConfig?.dot} rounded-full animate-pulse shadow-lg ${dotConfig?.shadow}`}></div>
                                    <span className={`${dotConfig?.text} text-xs font-bold tracking-wide`}>
                                        {rightSideDot.text}
                                    </span>
                                </div>
                            )}

                            {/* Optional Right Side Text */}
                            {rightSideText && (
                                <span className="text-white/90 text-xs font-bold tracking-wide">
                                    {rightSideText}
                                </span>
                            )}

                            {/* Expand/Collapse Arrow */}
                            {isExpandable && (
                                <svg 
                                    className={`w-5 h-5 text-white/70 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SectionHeaderPrimary;