function Student({ name, age, course }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Course: {course}</p>
    </div>
  );
}

function App() {
  return (
    <Student
      name="Jaya"
      age={22}
      course="ECE"
    />
  );
}

export default App;