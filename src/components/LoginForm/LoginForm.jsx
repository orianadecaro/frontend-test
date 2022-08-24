import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { login } from '../../redux/actions/auth';
import './Style.css';

function LoginForm() {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState(null)
    const dispatch = useDispatch();
    let Navigate = useNavigate();


    const onLogin = (e) => {
        e.preventDefault();      

        let user = {
          username: email,
          password: pass,
        };
    dispatch(login(user))
          .then((response) => {
            if (response.status === "success") {
              Navigate("/home");
            }
          })
          .catch((error) => {
            Navigate("/");
          }); 

          if (!email.trim()) {
            setError('¡Error datos email vacíos!');
            return
        }
        if(!pass.trim()){
            setError('¡Error datos password vacíos!');
            return
        }
        if (pass.length < 6) {
            setError('¡Error el password debe contener 6 o más carácteres!')
            return
        }
    
      
          
          setError(null)
      };

    return (
        <form className="conteiner-form" onSubmit={onLogin}>
            {
                error ? (
                    <div className="alertLogin">
                        {error}
                    </div>
                ) : null
            }
            <h1 className="textForm">Welcome!</h1>
            <label className="label">Email
                <input
                    name='email'
                    className="inputForm"
                    placeholder='Email'
                    type='text'
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    
                />
            </label>
            <label className="label">Password
                <input
                    name='pass'
                    className="inputForm"
                    placeholder='Password'
                    type='password'
                    onChange={e => setPass(e.target.value)}
                    value={pass}
                    
                />
            </label>
            <Link to="/register" className="textRegister">
                <h3 className="textRegister">Register</h3>
            </Link>

            <button className="btnLogin" type="submit">Login</button>
        </form>
    )
}

export default LoginForm;
