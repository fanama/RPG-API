import { Headder } from '../component/Headder/Headder'
import { Main } from '../component/main'
import { useEffect } from 'react'
import { Footer } from '../component/Footer'
import { checkToken } from '../tools/redirection'

function HomePage() {
    useEffect(() => {
        checkToken()
    }, [])

    return (
        <div style={{ margin: 'none' }}>
            <Headder />
            <Main />
            <Footer />
        </div>
    )
}

export default HomePage
