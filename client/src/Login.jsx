import { useState } from 'react';
import axios from './axios';

const Login = () => {
  const [userState, setUserState] = useState({});

  const login = (e) => {
    e.preventDefault();
    axios.post('/user/login', userState).then((result) => {
      console.log(result);
    });
  };

  return (
    <form>
      name
      <input
        type="text"
        onChange={(e) => setUserState({ ...userState, name: e.target.value })}
      />
      password
      <input
        type="password"
        onChange={(e) =>
          setUserState({ ...userState, password: e.target.value })
        }
      />
      <input type="button" defaultValue="submit" onClick={login} />
    </form>
  );
};

export default Login;
