import "./Statistics.css";
import exercises from "../data/exercises.json";
import { motion } from "framer-motion";
import {
    FaDumbbell,
    FaHeartbeat,
    FaBullseye,
    FaTools
} from "react-icons/fa";

const Statistics = () => {

    const totalExercises = exercises.length;

    const bodyParts = new Set(
        exercises.map(ex => ex.body_part)
    ).size;

    const targets = new Set(
        exercises.map(ex => ex.target)
    ).size;

    const equipments = new Set(
        exercises.map(ex => ex.equipment)
    ).size;

    return (

        <section className="stats-section">

            <h2>

                Workout <span>Statistics</span>

            </h2>

            <p>

                Everything you need to build your perfect workout routine.

            </p>

            <div className="stats-grid">

                                <motion.div
    className="stat-card"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
>

                    <FaDumbbell className="stat-icon"/>

                    <h3>{totalExercises}</h3>

                    <span>Exercises</span>

                </motion.div>

                <motion.div
    className="stat-card"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
>

                    <FaHeartbeat className="stat-icon"/>

                    <h3>{bodyParts}</h3>

                    <span>Body Parts</span>

                </motion.div>

                                <motion.div
    className="stat-card"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
>

                    <FaBullseye className="stat-icon"/>

                    <h3>{targets}</h3>

                    <span>Target Muscles</span>

                </motion.div>

                                <motion.div
    className="stat-card"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
>

                    <FaTools className="stat-icon"/>

                    <h3>{equipments}</h3>

                    <span>Equipment</span>

                </motion.div>

            </div>

        </section>

    );

};

export default Statistics;