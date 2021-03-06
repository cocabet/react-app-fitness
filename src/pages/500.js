import React from 'react'
import '../components/styles/Error.css'
import FatalErrorImg from '../images/500.png'

const FatalError = () => (
    <div className="text-center">
        <h1 className="Error_Text">Error: 500 Unexpected Error</h1>
        <img src={FatalErrorImg} alt="404 Not Found" className="Error_Image"/>
    </div>
)

export default FatalError