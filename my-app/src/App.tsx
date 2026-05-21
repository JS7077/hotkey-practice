import { useEffect, useRef, useState } from 'react'
import './App.css'
import { Hotbar } from './Hotbar'
import { KEYS, type KEY } from './Types'

export type hotbarData = [KEY, string]

function App() {
  const hotbar = useRef([KEYS.ONE, KEYS.TWO, KEYS.THREE, KEYS.FOUR, KEYS.Q, KEYS.Z, KEYS.F, KEYS.E, KEYS.R])
  const items = useRef([])
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
      <Hotbar hotbar={hotbar.current} keyPressed={keyPressed as KEY} items={items.current} />
    </div>
  )
}

export default App
