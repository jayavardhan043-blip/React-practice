function FruitList({ fruits }) {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}

function App() {
  const fruits = ['Apple', 'Banana', 'Mango'];

  return <FruitList fruits={fruits} />;
}

export default App;