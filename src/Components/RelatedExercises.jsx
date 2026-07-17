import exercises from "../data/exercises.json";
import ExerciseCard from "./ExerciseCard";
import "./RelatedExercises.css";

const RelatedExercises = ({ exercise }) => {

    const relatedExercises = exercises
        .filter(
            (item) =>
                item.body_part === exercise.body_part &&
                item.id !== exercise.id
        )
        .slice(0, 6);

    return (

        <section className="related-section">

            <h2>

                Related <span>Exercises</span>

            </h2>

            <p>

                More exercises for your <strong>{exercise.body_part}</strong> workout.

            </p>

            <div className="related-grid">

                {

                    relatedExercises.map((item)=>(

                        <ExerciseCard

                            key={item.id}

                            exercise={item}

                        />

                    ))

                }

            </div>

        </section>

    );

};

export default RelatedExercises;