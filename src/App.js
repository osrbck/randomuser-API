import React from "react";
import "./App.css";

function App() {
  const [user, setUser] = React.useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1")
      .then((response) => response.json())
      .then((data) => setUser(data));
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const handleFetchNewUser = () => {
    fetchData();
  };

  return Object.keys(user).length > 0 ? (
    <div className="container">
      <h1>Data returned</h1>
      <div className="user-info">
        <h2>First Name: {user.results[0].name.first}</h2>
        <h2>Last Name: {user.results[0].name.last}</h2>
      </div>
      <button className="button" onClick={handleFetchNewUser}>
        Fetch New User
      </button>
    </div>
  ) : (
    <div className="container">
      <h1>Data pending.</h1>
    </div>
    
  );
}

export default App;
