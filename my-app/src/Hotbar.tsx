import { useEffect, useState, type JSX } from "react";
import { type KEY } from "./Types"

const borderWidth = 2

export function Hotbar({hotbar, keyPressed, items}:{hotbar:KEY[], keyPressed: KEY, items: string[]}) {
    const [selectI, setSelectI] = useState(0)

    useEffect(() => {
        let i = hotbar.indexOf(keyPressed as KEY)
        if(i < 9 && i >= 0) {
            setSelectI(i)
        }
    }, [keyPressed, hotbar])

    const slots = [] as JSX.Element[]
    for(let i = 0; i < 9; i++) {
        if(i === selectI) {
            slots.push(<Selector slot={<Slot item={items[i]} />} key={i} />)
            continue
        }
        slots.push(<Slot key={i} item={items[i]} />)
    }
    
    return (
        <div style={{
            flexDirection: 'row',
            gap: 0
            }}>
            {slots}
        </div>
    )
}

function Selector({slot}:{slot: JSX.Element}) {
    return (
        <div style={{
            border: `${borderWidth}px solid #777777`,
            margin: -borderWidth
        }}>
            {slot}
        </div>
    )
}

function Slot({item}:{item: string}) {
    return (
        <div style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: 100,
            height: 100,
            border: `${borderWidth}px double black`,
            boxSizing: 'border-box'
        }}>
            <img style={{
                width: '90%'
            }}
            src={item} 
            />
        </div>
    )
}