import React, {useRef, useEffect, useState} from 'react'
import {
    Box,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    FormLabel
} from '@material-ui/core'

export default function Draw() {

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const contextRef = useRef<CanvasRenderingContext2D | null>(null);
    const [color, setColor] = useState("black");
    const [isDrawing, setIsDrawing] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // console.log((event.target as HTMLInputElement).value);
        setColor((event.target as HTMLInputElement).value);
    };

    const updateColor = (event:any) => {
        setColor(event.target.value);
    }

    // triggered only once on mount
    useEffect(() => {
        const canvas = canvasRef.current;
        if(canvas === null){
            return;
        }
        canvas.width = 1500 * 2 ;
        canvas.height = 700 * 2 ;
        canvas.style.width = `1500px`;
        canvas.style.height = `700px`;

        const context = canvas.getContext("2d");
        if(context === null){
            return;
        }
        context.scale(2,2);
        context.lineCap = "round";
        context.strokeStyle = color;
        context.lineWidth = 5;

        contextRef.current = context;
    }, []);

    useEffect(() => {
        const context = contextRef.current;
        if(context === null){
            return;
        }
        context.strokeStyle = color;
    },[color])

    const startDrawing = ({nativeEvent}:any) => {
        if(contextRef.current === null){
            return;
        }
        const { offsetX, offsetY } = nativeEvent;
        console.log(`begin poing: ${offsetX}, ${offsetY}`)
        contextRef.current.beginPath();
        contextRef.current.moveTo(offsetX, offsetY);
        setIsDrawing(true);
    }

    const finishDrawing = () => {
        if(contextRef.current === null){
            return;
        }
        contextRef.current.closePath();
        setIsDrawing(false);
    }

    const draw = ({nativeEvent}:any) => {
        if(!isDrawing){
            return;
        }
        if(contextRef.current === null){
            return;
        }
        const { offsetX, offsetY } = nativeEvent;
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();
    }

    return (
        <Box
            sx={{
                display: `flex`,
                alignItems: `center`,
                justifyContent: `space-around`
            }}
        >
            <canvas 
                style={{
                    background: `#fff`
                }}
                onMouseDown={startDrawing}
                onMouseUp={finishDrawing}
                onMouseMove={draw}
                ref={canvasRef}
            />
            <FormControl component="fieldset">
                <FormLabel component="legend">Color Picker</FormLabel>
                <RadioGroup aria-label="ColorPicker" name="colorPicker" value={color} onChange={handleChange}>
                    <FormControlLabel value="black" control={<Radio />} label="Black" />
                    <FormControlLabel value="red" control={<Radio />} label="Red" />
                    <FormControlLabel value="grey" control={<Radio />} label="Grey" />
                    <FormControlLabel value="blue" control={<Radio />} label="Blue" />
                    <input type="color" onChange={updateColor} />
                </RadioGroup>
            </FormControl>
        </Box>
    )
}
