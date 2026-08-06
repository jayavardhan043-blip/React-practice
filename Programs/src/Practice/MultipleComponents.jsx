function Header() {
  return <h1>My Website</h1>;
}

function Main() {
  return <p>This is the main section</p>;
}

function Footer() {
  return <h3>Footer Section</h3>;
}

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;