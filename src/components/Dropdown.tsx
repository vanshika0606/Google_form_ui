// import React from 'react'

const Dropdown = () => {
    return (
        <div className='card4' >
            <p>Dropdown <span style={{color:'red'}}>*</span></p>
            <div className="custom-select" style={{width:"200px"}}>
            <select name="cars" id="cars">
                <option value="">Choose</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
            </div>
        </div>
    )
}

export default Dropdown;
