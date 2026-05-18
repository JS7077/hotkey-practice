import { useMemo } from 'react'
import './App.css'
import { Hotbar } from './Hotbar'
import { KEYS } from './Types'

function App() {
  const hotbar = [KEYS.ONE,KEYS.TWO,KEYS.THREE,KEYS.FOUR,KEYS.FIVE,KEYS.SIX,KEYS.SEVEN,KEYS.EIGHT,KEYS.NINE]
  const keybinds = useMemo(()=>hotbar,hotbar)
  return (
    <div style={{
      justifyContent: 'center',
      alignItems: 'center',
      height: '100svh'
    }}>
      <Hotbar hotbar={keybinds} />
    </div>
  )
}

export default App
