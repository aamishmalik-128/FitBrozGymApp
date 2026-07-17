import React from 'react'
import HeroBanner from '../Components/HeroBanner'
import SearchExercises from '../Components/SearchExercises'
import Exercises from '../Components/Exercises'
import { Box } from '@mui/material'

const Home =  ({ exerciseData, setExerciseData }) => {
  return (
    <Box>
        <HeroBanner/>
        <SearchExercises
                setExerciseData={setExerciseData}
            />
        <Exercises
                exercises={exerciseData}
            />
    </Box>
  )
}

export default Home