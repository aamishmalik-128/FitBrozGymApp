import React, { useState } from 'react'
import {Box} from '@mui/material'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import ExerciseDetail from './Pages/ExerciseDetail'
import exercises from "./data/exercises.json";
import Navbar from './Components/Navbar'
const App = () => {

    const [exerciseData,setExerciseData] = useState(exercises);

    return (

        <Box sx={{ width:"100%" }}>

            <Navbar/>

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

                    element={<ExerciseDetail/>}

                />

            </Routes>

        </Box>

    );

}
export default App