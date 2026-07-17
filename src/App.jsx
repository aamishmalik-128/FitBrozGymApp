import React, { useState } from 'react'
import { Box } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import ExerciseDetail from './Pages/ExerciseDetail'
import exercises from "./data/exercises.json";
import Navbar from './Components/Navbar'
import Exercises from './Components/Exercises'
import Statistics from './Components/Statistics'

import Footer from './Components/Footer'
import About from './Components/About'
const App = () => {

  const [exerciseData, setExerciseData] = useState(exercises);

  return (

    <Box sx={{ width: "100%" }}>

      <Navbar />

      <Routes>

        <Route

          path="/"

          element={

            <Home

              exerciseData={exerciseData}

              setExerciseData={setExerciseData}

            />

          }

        />

        <Route

          path="/exercise/:id"

          element={<ExerciseDetail />}

        />
        <Route path="/Statistics" element={<Statistics />} />
<Route
  path="/exercises"
  element={
    <Exercises exercises={exerciseData} />
  }
/>    
        <Route 
 path="/about" 
 element={<About />} 
/>
        <Route path="/footer" element={<Footer />} /> 
      </Routes>

    </Box>

  );

}
export default App