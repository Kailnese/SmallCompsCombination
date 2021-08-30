import React, {useState, useRef, useEffect} from 'react'
import  { Stage, Layer, Text, Rect, Transformer } from 'react-konva'
import Rectangle from './cloneComp/Rectangle';

export default function CloneComp(props) {
    const [recs, setRecs] = useState([]);
    const [texts, setTexts] = useState([{
        textEditVisible: false,
        textX: 0,
        fill: "black",
        textY: 0,
        textValue: "",
        fontSize: 8,
        width: 400,
        fontStyle: "normal",
        align: "left",
        id: 0}
    ]);
    const ToolBar = () => (
        <Rect
            y={80}
            width={77.5}
            height={355}
            fill="white"
            shadowBlur={5}
            shadowColor="black"
        />
    )
    const [selectedId, setSelectedId] = React.useState(null);
    const stageRef = useRef(null);

    const checkDeselect = (e) => {
        // deselect when clicked on empty area
        const clickedOnEmpty = e.target === e.target.getStage();
        if (clickedOnEmpty) {
            setSelectedId(null);
        }
    };

    const handleTextareaKeyDown = e => {
        if (e.keyCode === 13) {
          let newTextObj  = texts[0];
    
          newTextObj.textEditVisible = false;
          setTexts([...texts, newTextObj])
        }
      };
    const handleTextEdit = e => {
        let newTextObj = texts[0];
        newTextObj.textValue = e.target.value;
        setTexts([...texts, newTextObj])
      };

    const handleTextDblClick = e => {
        const absPos = e.target.getAbsolutePosition();
        let newTextObj = texts[0];
        newTextObj.textEditVisible = true;
        newTextObj.textX = absPos.x;
        newTextObj.textY = absPos.y;
        setTexts([...texts, newTextObj])
      };
    return (
        <>
            <Stage width={props.dimensions.width} height={props.dimensions.height} ref={stageRef} onMouseDown={checkDeselect} style={{background: `#fff`}}>
                <Layer>
                    <ToolBar />
                    <Rect 
                        x={15}
                        y={90}
                        width={50}
                        height={50}
                        fill="green"
                    />
                    <Rect
                        name="draggableRec"
                        x={15}
                        y={90}
                        width={50}
                        height={50}
                        fill="green"
                        draggable
                        onDragEnd={(e) => {
                            // push new circle to view
                            // note that we must push circle first before returning draggable circle
                            // because e.target.x returns draggable circle's positions
                            var id = recs.length+1;
                            setRecs((prevRecs) => [
                                ...prevRecs,
                                { x: e.target.x(), y: e.target.y(), fill: "green", width: 50, height: 50 }
                            ]);
                            // return draggable circle to original position
                            // notice the dot (.) before "draggableCircle"
                            var stage = stageRef.current;
                            var draggableRec = stage.findOne(".draggableRec");
                            draggableRec.position({ x: 15, y: 90 });
                            
                        }}
                    />
                    <Text
                        fontSize={40}
                        text="T"
                        fontFamily="Belgrano"
                        x={29}
                        y={160}
                    />
                    <Text
                        fontSize={40}
                        text="T"
                        fontFamily="Belgrano"
                        draggable
                        x={29}
                        y={160}
                        width={texts[0].width}
                        onDblClick={e => handleTextDblClick(e)}
                    />

                    {recs.map((eachRec, id) => 
                            {
                                return (
                                    <Rectangle
                                        key={id}
                                        shapeProps={eachRec}
                                        isSelected={id === selectedId}
                                        onSelect={() => {
                                            setSelectedId(id);
                                        }}
                                        onChange={(newAttrs) => {
                                            console.log(recs);
                                            const rects = recs.slice();
                                            rects[id] = newAttrs;
                                            setRecs(rects);
                                        }}
                                    />
                                )
                            }
                        )
                    }
                </Layer>
            </Stage>
            <textarea 
                value={texts[0].textValue}
                style={{
                    display: texts[0].textEditVisible ? "block" : "none",
                    position: `absolute`,
                    top: texts[0].textY + "px",
                    left: texts[0].textX + "px",
                    width: "300px",
                    height: "300px",
                    fontSize: 40,
                    fontFamily: "Belgrano",
                    overflow: "hidden",
                    border: "none",
                    padding: "0px",
                    margin: "0px",
                    outline: "none",
                    resize: "none",
                    background: "none"
                }}
                onChange={e => handleTextEdit(e)}
                onKeyDown={e => handleTextareaKeyDown(e)}
            />
        </>
    )
}