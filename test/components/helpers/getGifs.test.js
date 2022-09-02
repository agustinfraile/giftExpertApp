import { getGifs } from "../../../src/helpers/getGifs";

describe('Probando getGifs()', () => { 
    
    test('Deberia retornar un arreglo de gifs', async() => { 
        
        const gifs = await getGifs('Prueba');
        // console.log(gifs);
        expect( gifs.length ).toBeGreaterThan(0); //arr mayor que 0
        // prueba de que el array cumpla con estas condiciones
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        })
    });
});