import { useState, useEffect } from "react";
import "./SearchExercises.css";
import { FaSearch } from "react-icons/fa";
import exercises from "../data/exercises.json";

const SearchExercises = ({ setExerciseData }) => {

  const [search, setSearch] = useState("");

  const [selectedBodyPart, setSelectedBodyPart] = useState("All");
  const [selectedEquipment, setSelectedEquipment] = useState("All");
  const [selectedTarget, setSelectedTarget] = useState("All");

  const bodyParts = [
    "All",
    ...new Set(exercises.map((ex) => ex.body_part)),
  ];

  const equipments = [
    "All",
    ...new Set(exercises.map((ex) => ex.equipment)),
  ];

  const targets = [
    "All",
    ...new Set(exercises.map((ex) => ex.target)),
  ];

  useEffect(() => {

    let filtered = exercises;

    if (search.trim()) {
      filtered = filtered.filter((exercise) =>
        exercise.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (selectedBodyPart !== "All") {
      filtered = filtered.filter(
        (exercise) => exercise.body_part === selectedBodyPart
      );
    }

    if (selectedEquipment !== "All") {
      filtered = filtered.filter(
        (exercise) => exercise.equipment === selectedEquipment
      );
    }

    if (selectedTarget !== "All") {
      filtered = filtered.filter(
        (exercise) => exercise.target === selectedTarget
      );
    }

    setExerciseData(filtered);

  }, [
    search,
    selectedBodyPart,
    selectedEquipment,
    selectedTarget,
    setExerciseData,
  ]);

  return (
    <section className="search-section">

      <div className="search-container">

        <span className="search-tag">
          Awesome Exercises For Your Workout
        </span>

        <h2>
          Search <span>Exercises</span>
        </h2>

        <p>
          Discover hundreds of exercises based on muscle groups,
          equipment, or target muscles.
        </p>

        <div className="search-box">

          <input
            type="text"
            placeholder="Search exercises..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button>
            <FaSearch />
            Search
          </button>

        </div>

        {/* Filters */}

        <div className="filters">

          <select
            value={selectedBodyPart}
            onChange={(e) => setSelectedBodyPart(e.target.value)}
          >

            {bodyParts.map((part) => (
              <option key={part} value={part}>
                {part}
              </option>
            ))}

          </select>

          <select
            value={selectedEquipment}
            onChange={(e) => setSelectedEquipment(e.target.value)}
          >

            {equipments.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}

          </select>

          <select
            value={selectedTarget}
            onChange={(e) => setSelectedTarget(e.target.value)}
          >

            {targets.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}

          </select>

        </div>

      </div>

    </section>
  );
};

export default SearchExercises;