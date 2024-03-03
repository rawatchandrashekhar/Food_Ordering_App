import React, { useState } from 'react'

export default function InputBox({ placeholder, onChange, value }) {

    const [focus, setFocus] = useState(false);

    const handleChange = (e) => {
        onChange(e.target.value);
    }

    return (
        <div className={`inputbox-container ${focus ? "inputbox-container-focus" : null}`}>
            <div className='inputbox-img-container'>
                <img src={require("../utils/images/search.png")} className='inputbox-image' />
            </div>
            <input type='text' minLength='3' placeholder={placeholder} value={value} onChange={(e) => handleChange(e)} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} className='input-style' />
        </div>
    )
}

InputBox.defaultProps = {
    placeholder: "ADD PLACEHOLDER",
    onChange: () => { },
    value: ""
}
