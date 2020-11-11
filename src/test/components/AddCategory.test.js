import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';


describe('pruebas en <AddCategory/>', () => {

    const setCategories = () => {}
    const wrapper = shallow(<AddCategory setCategories = {setCategories}/>);
    
    test('should ', () => {
        
        expect(wrapper).toMatchSnapshot()
    })

    test('debe de cambiar la caja de texto', () => {
        
        const input  = wrapper.find('input')
        const value = 'hola mundo'
        input.simulate('change', {target: {value}})

        expect(wrapper.find('p').text().trim()).toBe(value)
    })
    
    
})
