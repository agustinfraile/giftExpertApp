import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Probando componente <AddCategory />', () => { 
    
    test('Deberia cambiar el valor de la caja de texto', () => { 
        render( <AddCategory onNewCategory={()=>{}} /> );
        // screen.debug();
        const input = screen.getByRole('textbox');
        fireEvent.input( input, { target: {value: 'prueba' } } );
        expect( input.value ).toBe('prueba');
    });

    test('Deberia de llamar onNewCategory si el input tiene un valor', () => { 
        const inputValue = 'prueba';
        const onNewCategory = jest.fn(); //simulacion de una funcion
        
        render( <AddCategory onNewCategory={onNewCategory} /> );

        const input = screen.getByRole('textbox'); 
        const form = screen.getByRole('form'); 

        fireEvent.input( input, { target: {value: 'prueba' } } );
        fireEvent.submit( form );
        expect(input.value).toBe('')
        
        expect(onNewCategory).toHaveBeenCalled(); //la funcion fue llamada ??
        expect(onNewCategory).toHaveBeenCalledTimes(1); // la funcion fue llamada 1 vez?
        expect(onNewCategory).toHaveBeenCalledWith(inputValue) //la funcion fue llamada con el valor que estabamos esperando
        // screen.debug();
    });


    test('No deberia de llamar el onNewCategory si el input esta vacio', () => {  
        
        const onNewCategory = jest.fn(); //simulacion de una funcion  
        render( <AddCategory onNewCategory={onNewCategory} /> );

        const form = screen.getByRole('form'); 

        fireEvent.submit( form );

        expect(onNewCategory).not.toHaveBeenCalled(); //la funcion fue llamada ??
    });

});