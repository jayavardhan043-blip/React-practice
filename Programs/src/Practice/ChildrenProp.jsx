function Card({ children }) {
  return (
    <div
      style={{
        border: '2px solid black',
        padding: '20px',
        margin: '20px'
      }}
    >
      {children}
    </div>
  );
}

function App() {
  return (
    <Card>
      <h2>React Card</h2>
      <p>This content comes from App.</p>
    </Card>
  );
}

export default App;