// OAuthBtn.tsx - Generic OAuth button component
import React from "react";

export interface OAuthProvider {
  name: string;
  label: string;
  icon: React.ReactNode;
  className: string;
  hoverClassName?: string;
}

export interface OAuthBtnProps {
  provider: OAuthProvider;
  onClick: () => void;
  disabled?: boolean;
}

export const OAuthBtn: React.FC<OAuthBtnProps> = ({
  provider,
  onClick,
  disabled = false,
}) => {
  const { label, icon, className, hoverClassName } = provider;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        w-full group relative flex items-center justify-center space-x-3 
        py-3 px-4 rounded-xl transition-all duration-300 text-sm font-semibold 
        tracking-wide overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed
        ${className} ${hoverClassName || ""}
      `.trim()}
    >
      {/* Hover effect background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

      {/* Icon */}
      <div className="relative z-10">{icon}</div>

      {/* Label */}
      <span className="relative z-10">{label}</span>
    </button>
  );
};
