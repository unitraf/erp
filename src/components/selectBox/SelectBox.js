import React from 'react'
import './selectbox.css'
const SelectBox = () => {
    return (
        <div className='formContents'>
        <div className='selectBox col-4'>
            
            <select name="pets" id="pet-select">
                <option value="">--Veuillez choisir dans la liste--</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="hamster">Hamster</option>
                <option value="parrot">Parrot</option>
                <option value="spider">Spider</option>
                <option value="goldfish">Goldfish</option>
            </select>
            <label for="pet-select">Choose a pet:</label>
        </div>
        </div>
    )
}

export default SelectBox