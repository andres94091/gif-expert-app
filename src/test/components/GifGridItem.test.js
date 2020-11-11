import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem/>', () => {

    const title = 'este es un titulo'
    const url = 'http://localhost/algo.jpg'

    const wrapper = shallow(<GifGridItem
        title={title}
        url={url}
    />)

    test('debe renderizar el componente de manera correcta', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de tener un parrafo con titulo', () => {

        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title)

    })

    test('debe tener la imagen igual al url y alt de los props', () => {

        const img = wrapper.find('img')
        expect(img.prop('src')).toBe(url)
        expect(img.prop('alt')).toBe(title)
    })

    test('debe tener animate_fadeIn', () => {
        
        const div = wrapper.find('div')
        expect(div.props().className.includes('animate__fadeIn')).toBe(true);
    })
    

})
