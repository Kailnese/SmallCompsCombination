import React,{useState, useRef, useEffect} from 'react'
import {
    Box
} from '@material-ui/core'
import DraggableComp from '../components/draganddrop/DraggableComp'
import Resizeable from '../components/draganddrop/Resizeable'
import CloneComp from '../components/draganddrop/CloneComp'

export default function DragAndDrop() {
    const containerRef = useRef<null | HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ width:0, height: 0 });
    useEffect(() => {
        if(containerRef.current){
            setDimensions({
                width: containerRef.current?.offsetWidth, 
                height: containerRef.current?.offsetHeight
            })
        }
    },[])

    return (
        <Box
            sx={{
                background: `#000`,
                width: `85vw`,
                height: `80vh`,
                display: `flex`,
                alignItems: `center`,
                justifyContent: `space-around`,
                minWidth: `1500px`
            }}
            ref={containerRef}
            id="canvas-box"
        >
            {/* <Box
                sx={{
                    background: `#fff`,
                    height: `70vh`,
                    width: `30vh`,
                    minWidth: `300px`
                }}
            >
                <DraggableComp />
                <Resizeable />
                
            </Box>
            <Box
                sx={{
                    background: `#fff`,
                    height: `70vh`,
                    width: `120vh`,
                    minWidth: `800px`
                }}
            >

            </Box> */}
            <CloneComp dimensions={dimensions} /> 
            
            
        </Box>
    )
}
