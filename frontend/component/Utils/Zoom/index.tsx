import *as React from "react";
import { useContext, useEffect, useRef, useState } from "react";
import { ZoomContext } from "./Context";

// const WIDTH=640;
// const HEIGHT=480;
const SCALE = 0.1;
const MAXIMIZE = {
  min : 0,
  max: 8
};
const MINIMIZE = {
  min : 0,
  max: 0.25
};

export function Zoom({ image , WIDTH, HEIGHT ,zoomLock , svg }) {
      const containerRef = useRef<HTMLDivElement>();
      const imgRef = useRef()
      const {rate, setRate} = useContext(ZoomContext);
      const [imgStyle, setImgStyle] = useState<any>()
      const [mouseDowmFlag, setMouseDowmFlag] = useState<boolean>(false);
      const [mouseDowmPos, setMouseDowmPos] = useState<{ x: number; y: number }>({
          x: 0,
          y: 0,
      });


      const [initial, setInitial] = useState<{ width: number; height: number }>({
          width: WIDTH,
          height: HEIGHT,
      });

      useEffect(() => {
            const { width, height } = imgRef.current as HTMLImageElement;
            setInitial({ width, height });
    }, []);


      useEffect(() => {
        document.onmouseover = () => {
            if (mouseDowmFlag) {
                setMouseDowmFlag(false);
            }
        };
        return () => {
            document.onmouseover = null;
        };
    }, [mouseDowmFlag]);


      const handleWheelImage = (event) => {
        console.log(event.deltaY)
        if (!zoomLock){
            return
        }

            const bigger = event.deltaY > 0 ? -1 : 1;
            const transformX = -initial.width / 2;
            const transformY = -initial.height / 2;
            if (bigger > MAXIMIZE.min && rate < MAXIMIZE.max) {
                const enlargeRate = rate + SCALE;
                setImgStyle({
                    ...imgStyle,
                    transform: `matrix(${enlargeRate}, 0, 0, ${enlargeRate}, ${transformX}, ${transformY}) `,
                });
                setRate(enlargeRate);
            } else if (bigger < MINIMIZE.min && rate > MINIMIZE.max) {
                const shrinkRate = rate - SCALE;
                setImgStyle({
                    ...imgStyle,
                    transform: `matrix(${shrinkRate}, 0, 0, ${shrinkRate}, ${transformX}, ${transformY}) `,
                });
                setRate(shrinkRate);
            }
    };

    const handleMouseDown = (event) => {
        const { clientX, clientY } = event;
        event.stopPropagation();
        event.preventDefault();
        setMouseDowmFlag(true);
        setMouseDowmPos({
            x: clientX,
            y: clientY,
        });
    };

    const handleMouseMove = (event) => {
      event.stopPropagation();
      event.preventDefault();

      if (!zoomLock){
        return
    }

      const { clientX, clientY } = event;
          const diffX = clientX - mouseDowmPos.x;
          const diffY = clientY - mouseDowmPos.y;
          if (!mouseDowmFlag || (diffX === 0 && diffY === 0)) return;
          const { offsetLeft, offsetTop } = imgRef.current as HTMLImageElement;
          const offsetX = parseInt(`${diffX + offsetLeft}`, 10);
          const offsetY = parseInt(`${diffY + offsetTop}`, 10);
          setMouseDowmPos({
              x: clientX,
              y: clientY,
          });
          setImgStyle({
              ...imgStyle,
              left: offsetX,
              top: offsetY,
          });

  };

  const handleMouseUp = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setMouseDowmFlag(false);
};


  return (
<div style={{height:HEIGHT+'px',width:WIDTH+'px'}} onWheel={handleWheelImage} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} className="imgArea" ref={containerRef}>

    {/* Tags */}
            {svg}

            <img
                src={image}
                alt="part"
                height={HEIGHT}
                width={WIDTH}
                style={imgStyle}
                ref={imgRef}
                id="zoom"
                
            ></img>

            
            
                
            

        </div>

      
  );
}


