import React, {useState}  from 'react';

const ChangeStyleOnClick = () => {
    const [color,changeColor] = useState("");
    return(
        <div className="row section_3" style={{ background: color }}> 
            <div className="text-wrapper"> 
                <h4 className="section-subtitle">Change style of a element on button click</h4>
                <p className="display-4">Aenean imperdiet. Etiam ultricies nisi vel augue. <br />Curabitur ullamcorper ultricies nisi. Nam eget dui.<br />Etiam rhoncus. Maecenas tempus, tellus eget<br />condimentum rhoncus, sem quam semper libero,<br /> sit amet adipiscing sem neque sed ipsum.</p>
                <div className="section-btn"><button className="btn btn-lg btn-info" id="change-color" onClick={() => changeColor("#E49DCD")}>Change Color</button></div>
            </div>
        </div>
    )
}

export default ChangeStyleOnClick;