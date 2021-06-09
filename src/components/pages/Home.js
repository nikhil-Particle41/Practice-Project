import React from 'react';
import Slider from '../Slider';
import Twopara from '../Twopara';
import ChangeStyleOnClick from '../ChangeStyleOnClick';
import AccordionMain from '../Accordion/AccorfionMain';


const Home = () => {
    return (
        <div>
         <Slider />   
         <AccordionMain />
         <Twopara />
         <ChangeStyleOnClick />
       </div>
    );
}

export default Home;