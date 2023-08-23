// import React from 'react'

type propType = {
    type: string,
    name: string,
    title: string
}

const Card2 = (props:propType) => {
    return (
        <div className='card2 grid'>
            <p>{props.title} <span style={{color:'red'}}>*</span></p>
            <label className="mcq">
                <input type={props.type} name={props.name} />
                <span className={`checkmark ${props.type}`}></span>
                Option 1
            </label>
            <label className="mcq">
                <input type={props.type} name={props.name} />
                <span className={`checkmark ${props.type}`}></span>
                Option 2
            </label>
            <label className="mcq">
                <input type={props.type} name={props.name} />
                <span className={`checkmark ${props.type}`}></span>
                Option 3
            </label>
            
        </div>
    )
}

export default Card2
