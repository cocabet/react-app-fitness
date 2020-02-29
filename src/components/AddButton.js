import React from 'react'
import './styles/AddButton.css'
import buttonImg from '../images/add.png'
import { Link } from 'react-router-dom'

function AddButton(props){
    return(
        <Link to="/exercise/new">
            <img src={buttonImg} class="Fitness-Add" />
        </Link>
    )
}

export default AddButton