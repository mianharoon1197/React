import React, {useContext,useState} from 'react'
import UserContext from '../context/UserContext'

function Login() {

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password});
    }
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-2'>
      <h2 className='text-3xl font-bold '>Login</h2>
      <input type="text"
      value={username}
      onChange={(e)=> setUsername(e.target.value)}
      placeholder='Enter Username' 
      className='border-2 border-blue-500 rounded-md p-2 mb-2'
      />

      <input type="text"
      value={password}
      onChange={(e)=> setPassword(e.target.value)}
      placeholder='Enter Password'
      className='border-2 border-blue-500 rounded-md p-2 mb-2'
      />
      <button 
      className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300'
      onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
