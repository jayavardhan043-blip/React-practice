import UserContext from "./UserContext";
import user from "./User";

function App(){
  const username = "Jaya";
  return (
    <UserContext.Provider
    value = {username}>
      <User />
    </UserContext.Provider>
  );
}

export default App;