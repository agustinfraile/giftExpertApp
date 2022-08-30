import { useState } from 'react'

export const AddCategory = ( { onNewCategory } ) => {
    
    const [inputValue, setInputValue] = useState('');
    
    // funcion que me permite poder controlar el valor del input
    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    // funcion que evita la recarga del formulario y muestra el valor del input
    const onSubmit = (event) => { 
        const cleanInput = inputValue.trim(); //constante que elimina los espacios
        event.preventDefault(); //para que no recargue
        if( cleanInput.length <= 1 ) return; //para que no pasen palabras vacias
        // setCategories(cate => [...cate, inputValue]); //agrego el valor al array p/mostrar
        onNewCategory(cleanInput);
        setInputValue(''); //limpio el formulario
    }
    
    return (
        <form onSubmit={ onSubmit }>
            <input
                type='text'
                placeholder='Buscar gifs'
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}