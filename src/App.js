import { useState} from 'react';

import './App.css';
import axios from 'axios';

function App() {
  const [user, setUser] = useState(null)
  const login = ({username, password}) => {
    axios.post(process.env.REACT_APP_BACKEND_URI + "/users/login", {
        username,
        password
    })
    .then(res => {
      setUser(res.data.user)
    })
    .catch(err => {
      console.error(err)
    })
  }

  const onFormSubmit = (e) => {
    e.preventDefault()
    const {
      username: {value: username},
      password: {value: password}
    } = e.target
    
    login({username, password})
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={onFormSubmit}>
          <h2>User Info</h2>
          <input name="username" type="text" placeholder="Username"/>
          <input name="password" type="password" placeholder="Password"/>
          <input type="submit" value="Login"/>     
        </form>


        { user && (
            <div>
            <br/>
            <label>Username</label>: {user.username}
            <br/>
            <label>Age</label>: {user.age}
          </div>
          )
        }
        

      </header>
    </div>
  );
}

export default App;
