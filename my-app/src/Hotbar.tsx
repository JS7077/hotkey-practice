import { type JSX } from "react";
import { KEYS, type KEY } from "./Types"

export function Hotbar({hotbar, keyPressed}:{hotbar:KEY[], keyPressed: KEY}) {
    const slots = hotbar.map(x => <Slot key={x} keybind={x} />)
    // slots[0] = <Selector slot={<Slot keybind={KEYS.A} />} />

    let i = hotbar.indexOf(keyPressed as KEY)
    if(i > 8 || i < 0) i = 0
    slots[i] = <Selector slot={slots[i]} />

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