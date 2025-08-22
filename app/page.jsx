"use client";
import { useEffect, useState } from 'react';
import Dial from '../components/Dial';
import { WalletIcon, BoostIcon, RocketIcon, FriendsIcon, ProfileIcon } from '../components/Icons';

export default function Page(){
  const [user,setUser] = useState({username:'IVANNIKOV.PRO', avatar:'/avatar.png', points:1273.926});
  useEffect(()=>{
    // fetch mock user
    fetch('/api/user').then(r=>r.json()).then(({user})=>setUser(user));
  },[]);

  return (
    <div className="min-h-screen relative text-white overflow-hidden">
      <div className="absolute inset-0 orbits"></div>
      <div className="px-4 pt-4 flex items-center justify-between">
        <button className="text-white/70">Cancel</button>
        <div className="text-center">
          <p className="h1-clamp tracking-widest">ROAR.MINING</p>
          <p className="text-[11px] text-white/40">bot</p>
        </div>
        <button className="text-white/70">•••</button>
      </div>

      <div className="px-4 mt-4">
        <div className="glass p-3 rounded-2xl flex items-center gap-3">
          <img src={user.avatar} className="w-10 h-10 rounded-xl object-cover" alt="avatar"/>
          <div className="flex-1">
            <p className="text-[13px] font-semibold">{user.username}</p>
            <p className="text-[12px] text-neonCyan/90">1.273926 ROAR</p>
          </div>
          <span className="text-white/50">›</span>
        </div>
      </div>

      <div className="flex flex-col items-center mt-6 pb-36">
        <Dial value={0.2} />
        <div className="mt-4 px-4 glass inline-block rounded-full py-2">
          <span className="text-sm">⚡ 0.01 ROAR/hour</span>
        </div>

        <button className="btn-claim mt-6 text-white font-bold" style={{width:'var(--claim-width)'}}>Claim ROAR</button>
      </div>

      {/* bottom nav */}
      <div className="fixed bottom-6 left-0 right-0 px-5">
        <div className="mx-auto max-w-sm glass rounded-3xl px-4 py-3 flex items-center justify-between">
          <div className="flex flex-col items-center text-white/70 text-[11px]">
            <WalletIcon/>
            <span>Wallet</span>
          </div>
          <div className="flex flex-col items-center text-white/70 text-[11px]">
            <BoostIcon/>
            <span>Boost</span>
          </div>
          <div className="relative -mt-8">
            <div className="w-14 h-14 rounded-full bg-neonCyan/10 border border-neonCyan/20 flex items-center justify-center shadow-neonGlow">
              <RocketIcon className="text-neonCyan"/>
            </div>
            <p className="text-center text-[11px] mt-1 text-neonCyan">Mining</p>
          </div>
          <div className="flex flex-col items-center text-white/70 text-[11px]">
            <FriendsIcon/>
            <span>Friends</span>
          </div>
          <div className="flex flex-col items-center text-white/70 text-[11px]">
            <ProfileIcon/>
            <span>Profile</span>
          </div>
        </div>
      </div>
    </div>
  );
}
