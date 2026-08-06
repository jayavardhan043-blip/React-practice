function Student(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Course: {props.course}</p>
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