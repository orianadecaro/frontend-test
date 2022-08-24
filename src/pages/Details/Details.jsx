import React from 'react';
import ContentDetails from '../../components/ContentDetails/ContentDetails';
import Navbar from '../../components/NavBar/Navbar';


function Details() {
    return (
        <>
            <Navbar />
            <ContentDetails title={'Movies Details'} />
        </>
    )
}

export default Details;
