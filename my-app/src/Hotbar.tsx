import type { KEY } from "./Types"

export function Hotbar({hotbar}:{hotbar:KEY[]}) {
    const slots = hotbar.map(x => <Slot key={x} keybind={x} />)

    return (
        <div style={{
            flexDirection: 'row'
            }}>
            {slots}
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