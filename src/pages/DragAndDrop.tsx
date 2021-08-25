import React,{useState, useRef} from 'react'
import {
    Box
} from '@material-ui/core'
import DraggableComp from '../components/draganddrop/DraggableComp'
import Resizeable from '../components/draganddrop/Resizeable'
import CloneComp from '../components/draganddrop/CloneComp'

export default function DragAndDrop() {

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
        >
            <Box
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

            </Box>
        </Box>
    )
}
