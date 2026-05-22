import { useEffect, useRef, useState } from 'react'
import './App.css'
import { Hotbar } from './Hotbar'
import { KEYS, type KEY } from './Types'
import WaterBucket from './assets/Water_Bucket_JE2_BE2.png'
import NethSword from './assets/Enchanted_Netherite_Sword.gif'
import Mace from './assets/Enchanted_Mace.gif'
import WindCharge from './assets/Wind_Charge_(item)_JE1_BE1.png'
import NethSpear from './assets/Enchanted_Netherite_Spear.gif'
import Gap from './assets/Golden_Apple_JE2_BE2.png'
import Pearl from './assets/Ender_Pearl_JE3_BE2.png'
import Web from './assets/Cobweb_(texture)_JE0_BE0.png'

export type hotbarData = [KEY, string]

function App() {
  const hotbar = useRef([KEYS.ONE, KEYS.TWO, KEYS.THREE, KEYS.FOUR, KEYS.Q, KEYS.Z, KEYS.F, KEYS.E, KEYS.R])
  const items = useRef([Mace,NethSword,WaterBucket,NethSpear,WindCharge,Pearl,'',Web,Gap])
  const [keyPressed, setKeyPressed] = useState('')

  useEffect(() => {
    const handleKeyDown = (event: { key: string; location: number }) => {
      setKeyPressed((event.key as string).toUpperCase())
      switch (keyPressed) {
          case 'SHIFT': setKeyPressed(event.location === 1 ? KEYS.LSHIFT : KEYS.RSHIFT); break
          case 'ALT': setKeyPressed(event.location === 1 ? KEYS.LALT : KEYS.RALT); break
          case 'META': setKeyPressed(event.location === 1 ? KEYS.LMETA : KEYS.RMETA); break
      }
      console.log(keyPressed)
    };
    window.addEventListener('keydown', handleKeyDown);
    // Cleanup function
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div style={{
      justifyContent: 'center',
      alignItems: 'center',
      height: '100svh',
      width: '100svw',
      backgroundColor: 'gray'
    }}>
      <Hotbar hotbar={hotbar.current} keyPressed={keyPressed as KEY} items={items.current} />
    </div>
  )
}

export default App
