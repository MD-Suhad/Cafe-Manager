// import {React,useState} from 'react';
// import { useHistory } from 'react-router-dom';
// import styled from 'styled-components';
// import './Login';
// const LoginPageContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   background-color: #f0f2f5;
// `;

// const LoginForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   padding: 20px;
//   background: white;
//   border-radius: 8px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// `;

// const Input = styled.input`
//   margin-bottom: 10px;
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
// `;

// const Button = styled.button`
//   padding: 10px;
//   color: white;
//   background-color: #007bff;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const history = useHistory();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Perform authentication logic here
//     console.log('Username:', username);
//     console.log('Password:', password);
//     // On successful login, redirect to the dashboard
//     history.push('/dashboard');
//   };
 
 
  

//   return (
//     <LoginPageContainer>
//     <LoginForm onSubmit={handleSubmit}>
//       <h2>Login</h2>
//       <Input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         required
//       />
//       <Input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//       />
//       <Button type="submit">Login</Button>
//     </LoginForm>
//   </LoginPageContainer>
//   );
// };


// export default Login;