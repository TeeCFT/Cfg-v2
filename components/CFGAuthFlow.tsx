"use client"

import { useEffect, useState } from "react" import { AnimatePresence, motion } from "framer-motion"

export default function CFGAuthFlow() { const [showSplash, setShowSplash] = useState(true)

useEffect(() => { const timer = setTimeout(() => { setShowSplash(false) }, 2500)

return () => clearTimeout(timer)

}, [])

return ( <div className="relative h-screen w-full overflow-hidden bg-black text-white"> {/* Background Video /} <video
autoPlay
muted
loop
playsInline
className="absolute inset-0 h-full w-full object-cover"
> {/ Replace with your uploaded GitHub/raw video URL */} <source src="/PinDown.io_@The_Honored1_1778267198.mp4" type="video/mp4"/> </video>

{/* Overlay */}
  <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

  {/* Splash Screen */}
  <AnimatePresence>
    {showSplash && (
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-50 flex items-center justify-center bg-black"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="rounded-full border border-white/10 bg-white/10 px-10 py-6 backdrop-blur-3xl"
        >
          <h1 className="text-5xl font-black tracking-[0.4em] text-white">
            CFG
          </h1>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>

  {/* Main Screen */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: showSplash ? 0 : 1 }}
    transition={{ duration: 1.2 }}
    className="relative z-20 flex h-full flex-col justify-between px-6 py-10"
  >
    {/* Top Logo */}
    <div className="flex justify-center pt-4">
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="rounded-full border border-white/15 bg-white/10 px-8 py-4 shadow-2xl backdrop-blur-3xl"
      >
        <h1 className="text-3xl font-black tracking-[0.45em]">
          CFG
        </h1>
      </motion.div>
    </div>

    {/* Middle Text */}
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: showSplash ? 40 : 0, opacity: showSplash ? 0 : 1 }}
      transition={{ delay: 0.4, duration: 1 }}
      className="mb-10 mt-auto"
    >
      <div className="space-y-4">
        <h2 className="max-w-sm text-5xl font-black leading-[0.95] tracking-tight">
          Unlock
          <span className="block text-white/65">The Network.</span>
        </h2>

        <p className="max-w-xs text-sm leading-relaxed text-white/70">
          Premium configs. Elite creators. Unlimited access.
        </p>
      </div>
    </motion.div>

    {/* Bottom Buttons */}
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: showSplash ? 80 : 0, opacity: showSplash ? 0 : 1 }}
      transition={{ delay: 0.7, duration: 1 }}
      className="space-y-4 pb-5"
    >
      <LiquidGlassButton text="Sign Up" />
      <LiquidGlassButton text="Login" />
      <LiquidGlassButton text="Become Creator" />
      <LiquidGlassButton text="Creator Login" />

      <p className="pt-2 text-center text-xs tracking-wide text-white/45">
        Built for the community. Powered by creators.
      </p>
    </motion.div>
  </motion.div>
</div>

) }

function LiquidGlassButton({ text }) { return ( <LiquidButton
className="w-full rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-3xl py-4 text-sm font-semibold tracking-wide shadow-[0_0_30px_rgba(255,255,255,0.06)]"
> <span className="relative z-20 text-white"> {text} </span> </LiquidButton> ) }

function LiquidButton({ className, children, ...props }) { return ( <button className={relative flex items-center justify-center overflow-hidden transition-all duration-300 active:scale-[0.98] ${className}} {...props} > <div
className="absolute top-0 left-0 z-0 h-full w-full rounded-full
shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(255,255,255,0.25),inset_-3px_-3px_0.5px_-3px_rgba(255,255,255,0.15),inset_0_0_6px_6px_rgba(255,255,255,0.05),0_0_12px_rgba(255,255,255,0.1)]"
/>

<div
    className="absolute top-0 left-0 isolate -z-10 h-full w-full overflow-hidden rounded-full"
    style={{ backdropFilter: 'url("#container-glass")' }}
  />

  <div className="pointer-events-none z-10 flex items-center justify-center">
    {children}
  </div>

  <GlassFilter />
</button>

) }

function GlassFilter() { return ( <svg className="hidden"> <defs> <filter
id="container-glass"
x="0%"
y="0%"
width="100%"
height="100%"
colorInterpolationFilters="sRGB"
> <feTurbulence
type="fractalNoise"
baseFrequency="0.05 0.05"
numOctaves="1"
seed="1"
result="turbulence"
/>

<feGaussianBlur
        in="turbulence"
        stdDeviation="2"
        result="blurredNoise"
      />

      <feDisplacementMap
        in="SourceGraphic"
        in2="blurredNoise"
        scale="70"
        xChannelSelector="R"
        yChannelSelector="B"
        result="displaced"
      />

      <feGaussianBlur
        in="displaced"
        stdDeviation="4"
        result="finalBlur"
      />

      <feComposite
        in="finalBlur"
        in2="finalBlur"
        operator="over"
      />
    </filter>
  </defs>
</svg>

) }
