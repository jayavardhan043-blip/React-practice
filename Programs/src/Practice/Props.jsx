function Greeting(props){
    return <h2>Hello {props.name}</h2>;
}
function App(){
    return (
        <div>
            <Greeting name="Jaya" />
            <Greeting name="Rahul" />
            <Greeting name="Priya" />
        </div>
    );
}
export default App;