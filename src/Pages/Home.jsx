import React from 'react'
import HeroBanner from '../Components/HeroBanner'
import SearchExercises from '../Components/SearchExercises'
import Exercises from '../Components/Exercises'
import { Box } from '@mui/material'
import Statistics from "../Components/Statistics";
import Footer from '../Components/Footer'
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
        <Statistics/>
        <Footer/>
    </Box>
  )
}

export default Home