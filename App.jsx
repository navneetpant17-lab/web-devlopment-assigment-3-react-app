import { useState } from "react";
import Header from "./Components/Header";
import AddStudentForm from "./Components/AddStudentForm";
import StudentTable from "./Components/StudentTable";
import "./App.css";

const initialStudents = [
  { id: 1, name: "Kunaal", score: 78 },
  { id: 2, name: "Krishn", score: 80 },
  { id: 3, name: "Aditi", score: 78 },
  { id: 4, name: "Niharika", score: 80 },
];

function App() {
  const [students, setStudents] = useState(initialStudents);

  const addStudent = (name, score) => {
    const newStudent = {
      id: Date.now(),
      name,
      score,
    };
    setStudents([...students, newStudent]);
  };

  const updateScore = (id, newScore) => {
    setStudents(
      students.map((s) =>
        s.id === id ? { ...s, score: newScore } : s
      )
    );
  };

  return (
    <>
      <Header />
      <AddStudentForm onAddStudent={addStudent} />
      <StudentTable students={students} onUpdateScore={updateScore} />
    </>
  );
}

export default App;