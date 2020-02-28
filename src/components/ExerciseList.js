import React from 'react'
import Card from './Card'
function ExerciseList(props){
    return(
        <div>
            { props.exercises.map((exercise) => {
                return(
                    <Card
                        title={exercise.title}
                        description = {exercise.description}
                        img = {exercise.img}
                        leftColor = {exercise.rightColor}
                        rightColor = {exercise.leftColor}
                    />
                )
            })
            }
        </div>
    )
}

export default ExerciseList