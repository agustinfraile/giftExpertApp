import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Probando componente <GifGrid />', () => { 
    const categor = 'categoria'
    
    test('Deberia mostrar el loading inicialmente', () => { 
        
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid categor={categor}/>);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(categor));

         // screen.debug();

    });


    test('Deberia mostrar items cuando se cargan las imagenes useFetchGifs', () => { 
        const gifs = [
            {
                id: 'abc',
                title: 'titulo',
                url: 'https://lagaceta.com'
            },
            {
                id: 'abc2',
                title: 'titulo2',
                url: 'https://lagaceta.com'
            }
    ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid categor={categor}/>);


        expect(screen.getAllByRole('img').length).toBe(2)
    });
});