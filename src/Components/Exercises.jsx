import ExerciseCard from "./ExerciseCard";
import "./Exercises.css";
import { useState } from "react";
import Pagination from "./Pagination";
import { useEffect } from "react";
const Exercises = ({ exercises }) => {
const [currentPage,setCurrentPage]=useState(1);

const exercisesPerPage=9;

const indexOfLastExercise=currentPage*exercisesPerPage;

const indexOfFirstExercise=indexOfLastExercise-exercisesPerPage;

const currentExercises=exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
);

const paginate=(pageNumber)=>{

    setCurrentPage(pageNumber);

    window.scrollTo({

        top:1300,

        behavior:"smooth"

    });

};
useEffect(()=>{

    setCurrentPage(1);

},[exercises]);
  return (

    <section className="exercises">

      <h2>Exercise Library</h2>

<p className="exercise-subtitle">

Showing

<span>

{" "}
{indexOfFirstExercise + 1} -
{Math.min(indexOfLastExercise, exercises.length)}

</span>

of

<span>

{" "}
{exercises.length}

</span>

Exercises

</p>

      <div className="exercise-grid">

        {

          currentExercises.map((exercise) => (

            <ExerciseCard

              key={exercise.id}

              exercise={exercise}

            />

          ))

        }

      </div>
     <Pagination
    currentPage={currentPage}
    paginate={paginate}
    totalExercises={exercises.length}
    exercisesPerPage={exercisesPerPage}
/>

    </section>

  );

}

export default Exercises;