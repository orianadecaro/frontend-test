import React, {useState} from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { register } from '../../redux/actions/auth';
import './Style.css';

function RegisterForm() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [username, setUsername]  = useState('');
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
 let Navigate = useNavigate();
    

    const onRegister = (e) => {
       
        let user = {
          name: username,
          password: pass,
          email: email,
        };
    dispatch(register(user))
          .then((response) => {
            if (response.status === "user successfully created") {
                Navigate("/login");
            }
          })
          .catch((error) => {
            Navigate("/home");
          });

          e.preventDefault()
          if (!username.trim()) {
              setError('¡Error Datos username vacíos!');
              return
          }
          if (!email.trim()) {
              setError('¡Error Datos email vacíos!');
              return
          }
          if(!pass.trim()){
              console.log('Datos vacíos pass!')
              setError('¡Error Datos password vacíos!');
              return
          }
          if (pass.length < 6) {
              setError('¡Error el password debe contener 6 o más carácteres!')
              return
          }
          
          setError(null)
      };
    return (
        <form className="conteiner-form-register" onSubmit={onRegister}>
               {
                error ? (
                    <div className="alertRegister">
                        {error}
                    </div>
                ) : null
            }
            <h1 className="textFormRegister">Register</h1>
            <label className="labelRegister">Username
                <input
                    name='username'
                    placeholder='Username'
                    type='text'
                    onChange={e => setUsername(e.target.value)}
                    value={username}
                />
            </label>
            <label className="labelRegister">Email
                <input
                    name='email'
                    placeholder='Email'
                    type='text'
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    
                />
            </label>
            <label className="labelRegister">Password
                <input
                    name='pass'
                    placeholder='Password'
                    type='password'
                    onChange={e => setPass(e.target.value)}
                    value={pass}
                />
            </label>
            <Link to="/" className="textLogin">
                <h3 className="textLogin">Login</h3>
            </Link>
            <button className="btnRegister" type="submit">Register</button>
        </form>
    )
}

export default RegisterForm;
