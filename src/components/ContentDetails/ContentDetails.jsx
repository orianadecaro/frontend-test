import React from 'react';

import './Style.css';

function ContentDetails(props) {
    return(
        <div className='conteiner-details'>
            <h1 className='textDetail' >{props.title}</h1>
            <div className='conteiner-imgDetails'>

           
            <img src='/assets/imagen7.jpg' className='imgDetails'/>
            <p  className='pDetails'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni impedit accusamus harum ut,
                 debitis temporibus non exercitationem, <br/>
                enim quo iste quaerat nihil reiciendis, commodi dolore assumenda quis omnis molestias quae.<br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni impedit accusamus harum ut,
                 debitis temporibus non exercitationem, <br/>
                enim quo iste quaerat nihil reiciendis, commodi dolore assumenda quis omnis molestias quae.
            </p> 
             </div>
        </div>
    )
   
}

export default ContentDetails;
