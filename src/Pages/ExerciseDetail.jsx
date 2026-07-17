import { useParams, Link } from "react-router-dom";
import exercises from "../data/exercises.json";
import "./ExerciseDetail.css";

const ExerciseDetail = () => {

    const { id } = useParams();

    const exercise = exercises.find(
        (item) => item.id === id
    );

    if (!exercise) {
        return <h2>Exercise Not Found</h2>;
    }

    return (

        <section className="detail-page">

            <Link
                to="/"
                className="back-btn"
            >
                ← Back
            </Link>

            <div className="detail-container">

                <div className="detail-image">

                    <img
                        src={exercise.image}
                        alt={exercise.name}
                    />

                </div>

                <div className="detail-content">

                    <span className="detail-tag">

                        {exercise.body_part}

                    </span>

                    <h1>

                        {exercise.name}

                    </h1>

                    <p className="detail-description">

                        Build strength and improve your fitness using the
                        <strong> {exercise.name} </strong>
                        exercise.

                    </p>

                    <div className="info-grid">

                        <div className="info-card">

                            <h4>Body Part</h4>

                            <p>{exercise.body_part}</p>

                        </div>

                        <div className="info-card">

                            <h4>Target</h4>

                            <p>{exercise.target}</p>

                        </div>

                        <div className="info-card">

                            <h4>Equipment</h4>

                            <p>{exercise.equipment}</p>

                        </div>

                        <div className="info-card">

                            <h4>Difficulty</h4>

                            <p>Intermediate</p>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

};

export default ExerciseDetail;