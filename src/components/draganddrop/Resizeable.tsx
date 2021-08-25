import React, {useState} from 'react'
import { Rnd } from 'react-rnd';

export default function Resizeable() {
    const [rndPosition, setRndPosition] = useState({x: 40, y: 40});
    const [rndSize, setRndSize] = useState({width: `40px`, height: `40px`});
    
    return (
        <Rnd
            size={{ width: rndSize.width,  height: rndSize.height }}
            position={{ x: rndPosition.x, y: rndPosition.y }}
            onDragStop={(e, d) => { setRndPosition({ x: d.x, y: d.y }) }}
            onResizeStop={(e, direction, ref, delta, position) => {
                setRndSize({
                    width: ref.style.width,
                    height: ref.style.height,
                    ...position,
                });
            }}
            style={{background: `red`}}
        >
            001
        </Rnd>
    )
}
