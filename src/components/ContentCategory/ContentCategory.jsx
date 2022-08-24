import React from 'react';
import { Link } from "react-router-dom";
import './Style.css';

function ContentCategory (props) {
    return (
        <div className='conteiner-category'>
            <img src={props.image}  className='imgCategory'/>
            <Link to='' className='btnCategory'> {props.name}</Link>
        </div>
    )
}

export default ContentCategory ;
