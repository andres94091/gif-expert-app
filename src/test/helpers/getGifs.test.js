import '@testing-library/jest-dom';

const { getGifs } = require("../../helpers/getGifs")

describe('pruebas con getGifs Fetch', () => {
    
    test('debe de traer 10 elementos', async () => {

        const gifs = await getGifs('One Punch')
        expect(gifs.length).toBe(10)
        
    })

    test('debe de traer 0 elementos si se envia char vacio', async () => {

        const gifs = await getGifs('')
        expect(gifs.length).toBe(0)
        
    })
    
})