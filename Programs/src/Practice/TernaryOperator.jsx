function App() {
  const isLoggedIn = true;

  return (
    <h1>
      {isLoggedIn ? 'Welcome User' : 'Please Login'}
    </h1>
  );
}

export default App;