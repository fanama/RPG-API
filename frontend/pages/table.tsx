import {Headder} from '../component/Headder/Headder'
import {TableMaker} from '../component/Utils/TableMaker'
import {useEffect,useState} from 'react'
import { Footer } from '../component/Footer'
import { checkToken } from '../tools/redirection'

function HomePage() {

    const [data, setData] = useState([
        {name:"hero",age:"19",},
        {name:"vilain",age:"50",},
        {name:"vallager",age:"20",},
    ])

    useEffect(() => {

        checkToken()
    }, [])

    return <div style={{margin:'none'}}>
          <Headder />
          <h2>Tableau</h2>
          <TableMaker attributes={data} />
          <Footer/>
      </div>
  }
  
  export default HomePage