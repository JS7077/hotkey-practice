import { useEffect, type JSX } from "react";
import { KEYS, type KEY } from "./Types"

export function Hotbar({hotbar}:{hotbar:KEY[]}) {
    const slots = hotbar.map(x => <Slot key={x} keybind={x} />)

    useEffect(() => {
        const handleKeyDown = (event) => {
            let keyPressed = (event.key as string).toUpperCase()
            switch (keyPressed) {
                case 'SHIFT': keyPressed = event.location === 1 ? KEYS.LSHIFT : KEYS.RSHIFT; break
                case 'ALT': keyPressed = event.location === 1 ? KEYS.LALT : KEYS.RALT; break
                case 'META': keyPressed = event.location === 1 ? KEYS.LMETA : KEYS.RMETA; break
            }
            let i = hotbar.indexOf(keyPressed as KEY)
            if(i > 8 || i < 0) i = 0
            slots[i] = <Selector slot={slots[i]} />
        };

        window.addEventListener('keydown', handleKeyDown);
        
        // Cleanup function
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div style={{
            flexDirection: 'row'
            }}>
            {slots}
        </div>
    )
}

function Selector({slot}:{slot: JSX.Element}) {
    return (
        <div style={{
            border: '2px solid black'
        }}>
            {slot}
        </div>
    )
}

function Slot({keybind, item}:{keybind:KEY, item?: any}) {
    return (
        <div style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: 100,
            height: 100,
            border: '2px double gray'
        }}>
            {keybind}
        </div>
    )
}