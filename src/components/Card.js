import React, { Component } from 'react'
import circleImg from '../images/circles.png'
import './styles/Card.css'

class Card extends Component{
    render(){
        const { title, description, img, leftColor, rightColor } = this.props
        return(
            <div className="card mx-auto Fitness-Card"
            style={{
                backgroundImage: `url(${circleImg}), linear-gradient(to right, ${rightColor},${leftColor})`
            }}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src ={img} className="float-right" />
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div> 
                </div>
            </div>
        ) 
    }
}

export default Card
