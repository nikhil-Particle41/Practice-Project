import React from 'react';
import Accordion from './Accordion';


const AccordionMain = () => {
    return(
        <div className="row section_1">
            <div className="col-sm-6">
                <div className="text-wrapper">
                    <h3 className="section-subtitle display-4"><div>HOW WE WORK&nbsp;&nbsp;&nbsp;&nbsp;</div></h3>  
                    <p className="display-4">Aenean imperdiet. Etiam ultricies nisi vel augue. <br />Curabitur ullamcorper ultricies nisi. Nam eget dui.<br />Etiam rhoncus. Maecenas tempus, tellus eget<br />condimentum rhoncus, sem quam semper libero,<br /> sit amet adipiscing sem neque sed ipsum.</p>
                    <div className="section-btn"></div>
                </div>
            </div>  
            <div className="col-sm-6" id="accordion">
            <Accordion
                title="What is your return policy?"
                content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
            <Accordion
                title="How do I track my order?"
                content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
            <Accordion
                title="Can I purchase items again?"
                content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
            </div> 
        </div>
    )
} 

export default AccordionMain;