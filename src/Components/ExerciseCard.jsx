import "./ExerciseCard.css";
import { Link } from "react-router-dom";
import { FaDumbbell, FaBullseye, FaArrowRight } from "react-icons/fa";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link
      to={`/exercise/${exercise.id}`}
      className="exercise-link"
    >
      <div className="exercise-card">

        <div className="exercise-image">

          <img
            src={`/${exercise.image}`}
            alt={exercise.name}
          />

          <div className="image-overlay"></div>

        </div>

        <div className="exercise-content">

          <div className="exercise-tags">

            <span className="exercise-body">
              🏋 {exercise.body_part}
            </span>

            <span className="exercise-equipment">
              💪 {exercise.equipment}
            </span>

          </div>

          <h3>{exercise.name}</h3>

          <div className="exercise-info">

            <FaBullseye />

            <span>
              Target:
              <strong>{exercise.target}</strong>
            </span>

          </div>

          <button>

            Explore Exercise

            <FaArrowRight />

          </button>

        </div>

      </div>
    </Link>
  );
};

export default ExerciseCard;