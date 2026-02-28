import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  icon?: ReactNode;
}

export function Button({ children, onClick, className = "", variant = 'primary', icon }: ButtonProps) {
  const baseStyles = "relative px-6 py-3 font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden group";
  
  const variants = {
    primary: "bg-neon-cyan text-black hover:bg-neon-teal shadow-[0_0_20px_rgba(255,140,0,0.3)] hover:shadow-[0_0_30px_rgba(255,140,0,0.5)]",
    secondary: "bg-white text-black hover:bg-slate-200 shadow-lg",
    outline: "bg-transparent border border-white/20 text-white hover:bg-white/5 hover:border-neon-cyan/50 hover:text-neon-cyan hover:shadow-[0_0_15px_rgba(255,140,0,0.1)]",
    ghost: "bg-transparent text-slate-400 hover:text-white"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {/* Sweep Effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10 pointer-events-none" />
      
      <span className="relative z-20 flex items-center gap-2">
        {children}
        {icon}
      </span>
    </motion.button>
  );
}
