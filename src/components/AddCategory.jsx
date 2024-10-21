import { useState } from "react"

/**
 * AddCategory component
 * @param {*} onNewCategory is a event function for send new category typed
 * @returns 
 */
export const AddCategory = ({ onNewCategory }) => {

    //Input for search
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    /**
     * Get form data
     * @param {*} event 
     * @returns 
     */
    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        console.log(inputValue)
        //setCategories( categories=> [...categories,inputValue]);
        onNewCategory(inputValue);
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            // onChange={ (e)=> onInputChange(e)}
            />
        </form>
    )
}
