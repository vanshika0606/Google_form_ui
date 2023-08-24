import { useState } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io';


const Dropdown = () => {
    const [dropdownState, setDropdownState] = useState<boolean>(false);
    const [dropdownPosition, setDropDownPosition] = useState<Number>(0);
    const [value, setValue] = useState('Choose');



    function ChangeDropdownState(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        setDropdownState(true);

        setDropDownPosition(event.clientY);
    }

    function changeSelectedValue(e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) {
        setValue(e.currentTarget.innerHTML);
        setDropdownState(false);
    }


    return (
        <div className="card4">
            <p>
                Dropdown <span style={{ color: "red" }}>*</span>
            </p>

            <div className="dropdown box">
                <div className={`selected flex row spaceBetween alignCenter ${value == 'Choose' ? 'gray' : 'black'}`} onClick={(e) => { ChangeDropdownState(e) }} >{value}
                    <IoMdArrowDropdown color='#505050' />
                </div>
                {dropdownState && <div className='dropdownList flex '
                style={{top: `calc(${dropdownPosition}px )`}}
                >
                    <p onClick={(e) => { changeSelectedValue(e) }}>Choose</p>
                    <hr />
                    <p onClick={(e) => { changeSelectedValue(e) }}>Option 1</p>
                    <p onClick={(e) => { changeSelectedValue(e) }}>Option 2</p>
                    <p onClick={(e) => { changeSelectedValue(e) }}>Option 3</p>
                </div>}
            </div>
        </div>

    );
};

export default Dropdown;
