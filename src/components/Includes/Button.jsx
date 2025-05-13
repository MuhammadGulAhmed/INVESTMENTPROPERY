import React from 'react';
import { motion } from 'framer-motion';

function Button({ name }) {
  const isSubscribe = name === "SUBSCRIBE";
  const isLogin = name === "Login" || name === "Sign up" || name === "Create Account" || name === "Send OTP"  || name === "Verify"  ;

  const variants = {
    initial: { x: '-100%' },
    hover: { x: '0%' },
  };

  return (
    <motion.button
      className={` cursor-pointer relative overflow-hidden px-6 py-3  text-white font-semibold bg-blue-900 ${isLogin?"w-full py-5 rounded-2xl" : ""}`}
      initial="initial"
      whileHover="hover"
    
    >
      {/* Animated overlay (responds to button's hover) */}
      <motion.span
        className="absolute left-0 top-0 h-full w-full bg-[#03014C] z-0"
        variants={variants}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      />
      {/* Text stays on top */}
      <span className="relative z-10">{name}</span>
    </motion.button>
  );
}

export default Button;