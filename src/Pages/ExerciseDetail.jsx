import { useParams, Link } from "react-router-dom";
import exercises from "../data/exercises.json";
import "./ExerciseDetail.css";
import { useEffect } from "react";
import {
  FaDumbbell,
  FaBullseye,
  FaHeartbeat,
  FaFire
} from "react-icons/fa";

import RelatedExercises from "../Components/RelatedExercises";
const ExerciseDetail = () => {

  const { id } = useParams();

  const exercise = exercises.find(
    (item) => item.id === id
  );

  if (!exercise) {
    return <h2>Exercise Not Found</h2>;
  }
  useEffect(() => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}, [id]);

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
            src={`/${exercise.gif_url}`}
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
              <FaHeartbeat className="info-icon" />
              <h4>Body Part</h4>
              <p>{exercise.body_part}</p>
            </div>

            <div className="info-card">
              <FaBullseye className="info-icon" />
              <h4>Target Muscle</h4>
              <p>{exercise.target}</p>
            </div>

            <div className="info-card">
              <FaDumbbell className="info-icon" />
              <h4>Equipment</h4>
              <p>{exercise.equipment}</p>
            </div>

            <div className="info-card">
              <FaFire className="info-icon" />
              <h4>Difficulty</h4>
              <p>Intermediate</p>
            </div>

          </div>

        </div>
      <div className="instructions">

    <h2>How To Perform</h2>

    <ol>

        <li>Warm up your muscles before starting.</li>

        <li>Maintain correct posture throughout the movement.</li>

        <li>Control both lifting and lowering phases.</li>

        <li>Breathe naturally while exercising.</li>

        <li>Repeat according to your workout plan.</li>

    </ol>

</div>
<div className="benefits">

<h2>Benefits</h2>

<div className="benefit-list">

<div>🔥 Improves muscle strength</div>

<div>💪 Builds endurance</div>

<div>⚡ Enhances athletic performance</div>

<div>❤️ Improves overall fitness</div>

</div>

</div>


      </div>
<RelatedExercises exercise={exercise} />
    </section>

  );

};

export default ExerciseDetail;