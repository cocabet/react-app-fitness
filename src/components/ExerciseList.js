import React from 'react'
import Card from './Card'

const ExerciseList = ({exercises}) => (
    <div>
        { exercises.map((exercise) => (
            <Card
                title={exercise.title}
                description = {exercise.description}
                img = {exercise.img}
                leftColor = {exercise.rightColor}
                rightColor = {exercise.leftColor}
            />
        ))}
    </div>
)

export default ExerciseList