import React,{useState, useRef} from 'react'
import Draggable from 'react-draggable'

export default function DraggableComp() {
    const nodeRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [Opacity, setOpacity] = useState(false);

    const trackPos = (data: any) => {
        setPosition({ x: data.x, y: data.y });
    };

    const handleStart = () => {
        setOpacity(true);
    };
    const handleEnd = () => {
        setOpacity(false);
    };

    return (
        <Draggable
            nodeRef={nodeRef}
            onDrag={(e, data) => trackPos(data)}
            onStart={handleStart}
            onStop={handleEnd}
        >
            <div
                ref={nodeRef}
                className="box"
                style={{ opacity: Opacity ? "0.6" : "1" , background: `green`}}
            >
                <div>BOX</div>
                <div>
                    x: {position.x.toFixed(0)}, y: {position.y.toFixed(0)}
                </div>
            </div>
        </Draggable>
    )
}
