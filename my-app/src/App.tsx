import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { Hotbar } from './Hotbar'
import { KEYS, type KEY } from './Types'

function App() {
  const hotbar = [KEYS.ONE,KEYS.TWO,KEYS.THREE,KEYS.FOUR,KEYS.FIVE,KEYS.SIX,KEYS.SEVEN,KEYS.EIGHT,KEYS.NINE]
  const keybinds = useMemo(()=>hotbar,hotbar)
  const [keyPressed, setKeyPressed] = useState('')

  useEffect(() => {
    const handleKeyDown = (event) => {
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
      height: '100svh'
    }}>
      <Hotbar hotbar={keybinds} keyPressed={keyPressed as KEY} />
    </div>
  )
}

export default App
