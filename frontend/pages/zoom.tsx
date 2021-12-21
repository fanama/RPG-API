import {Headder} from '../component/Headder/Headder'
import {Main} from '../component/main'
import {useEffect, useState} from 'react'
import { Footer } from '../component/Footer'
import { checkToken } from '../tools/redirection'
import { Zoom } from '../component/Utils/Zoom'
import { ZoomProvider } from '../component/Utils/Zoom/Context'

function HomePage() {

    const [zoomLocked, setZoomLocked] = useState(false)

    useEffect(() => {

        checkToken()
    }, [])

    const svg = <svg style={{position:"absolute",zIndex:20}} >
        {/* butiful rectangle green */}
        <rect x="0" y="0" width="50%" height="50%" fill="#00ff00" />
    </svg>

    return <div style={{margin:'none'}}>
          <Headder />

            <h2>Zoom</h2>
            <div>
                <label> Zoom : </label>
                <input type="checkbox"  className="zoom-locked" onClick={() => setZoomLocked(!zoomLocked)} />
            </div>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}} >

            <ZoomProvider>
                <Zoom image={"https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"} WIDTH={640} HEIGHT={480} zoomLock={zoomLocked} svg={svg} />
            </ZoomProvider>
        
        </div>
          
          <Footer/>
      </div>
  }
  
  export default HomePage