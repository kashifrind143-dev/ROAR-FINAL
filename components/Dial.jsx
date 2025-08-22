import React from 'react';
export default function Dial({size='var(--dial-size)', value=0.2}){
  const s = parseFloat(0); // placeholder not used
  const num = value;
  const px = typeof window !== 'undefined' ? Math.min(360, Math.max(260, window.innerWidth*0.52)) : 300;
  const stroke = 12;
  const r = (px - stroke)/2;
  const circ = 2*Math.PI*r;
  const dash = circ * Math.min(1, num);
  return (
    <div style={{width:'var(--dial-size)',height:'var(--dial-size)'}} className="relative">
      <svg width="100%" height="100%" viewBox={`0 0 ${px} ${px}`} preserveAspectRatio="xMidYMid meet">
        <defs>
          <radialGradient id="g1"><stop offset="0%" stopColor="#0ea5e9" stopOpacity="1"/><stop offset="100%" stopColor="#22d3ee" stopOpacity="0.12"/></radialGradient>
        </defs>
        <g transform={`translate(${px/2 - r}, ${px/2 - r})`}>
          <circle cx={r} cy={r} r={r} stroke="rgba(255,255,255,0.06)" strokeWidth={stroke} fill="rgba(0,0,0,0.5)"/>
          <circle cx={r} cy={r} r={r} stroke="url(#g1)" strokeWidth={stroke} fill="none"
            strokeDasharray={`${dash} ${circ-dash}`} strokeLinecap="round" transform={`rotate(-90 ${r} ${r})`}
            style={{filter:'drop-shadow(0 0 16px rgba(34,211,238,0.85))'}}
          />
        </g>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <p className="text-white/70 stat-small">In storage:</p>
        <p className="stat-large text-white font-extrabold">10</p>
        <p className="mt-2 text-[13px] stat-small">Balance: <span className="text-white">12.85 ROAR</span></p>
        <p className="mt-1 text-[12px] text-neonCyan/90 tracking-widest">Fill: 4H : 16M : 05S</p>
      </div>
    </div>
  );
}
