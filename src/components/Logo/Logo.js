import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
             <Tilt className="Tilt br2 shadow-2" options={{ max : 85 }} style={{ height: 150, width: 150 }} >
                    <div className="Tilt-inner pa3"> <img style={{paddingTop:'13px'}} alt="brain" src={brain}></img> </div>
            </Tilt>
        </div>
       
    )
}

export default Logo;

// app.models
// .predict(
// Clarifai.COLOR_MODEL,
//     // URL
//     "https://samples.clarifai.com/metro-north.jpg"
// )
// .then(function(response) {
//     // do something with responseconsole.log(response);
//     },
//     function(err) {// there was an error}
// );