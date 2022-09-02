import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";


describe('probando componente <GifItem />', () => { 
    const title = 'Un titulo';
    const url = 'https://www.lagaceta.com.ar/';

    test('deberia hacer match con el snapshot', () => { 
        const { container } = render( <GifItem title={title} url={url}/> );
        expect(container).toMatchSnapshot();
    });

    test('deberia mostrar la imagen con el url y el alt indicado', () => { 
        render( <GifItem title={title} url={url}/> );
        // screen.debug();
        // expect( screen.getByRole('img').src ).toBe( url ); 
        // expect( screen.getByRole('img').alt ).toBe( title ); 
        
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe(  url );
        expect( alt ).toBe( alt );
    });

    test('deberia mostrar el titulo en el componente', () => { 
        render( <GifItem title={title} url={url}/> );
        expect(  screen.getByText(title));
        
    });

});