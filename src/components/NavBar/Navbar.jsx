import React from 'react'
import { NavLink } from "react-router-dom";
import { useDispatch,  useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from '../../redux/actions/auth';
import './Style.css';


function Navbar() {
  const state = useSelector((state) => state);
  let Navigate = useNavigate();
    const dispatch = useDispatch();

    const onLogout = () => {
      dispatch(logout()).then((response) => {
        if (response.status === "success") {
          Navigate("/");
        }
      });
    };
    return(
        <nav className='container-navBar'>
            <div className='navbar-ul'>
                    <NavLink  to="/home" className='navbar-link'> Inicio </NavLink>
                    <NavLink  to="/gallery" className='navbar-link'>Galeria</NavLink>
                    <NavLink  to="" className='navbar-link- btn'  > <button  className=' btn'onClick={() => onLogout()}> Cerrar Sesion</button></NavLink>
            </div>
        </nav>
    )
}

export default Navbar;
