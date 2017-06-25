import Search from './client/src/components/Search.jsx';
import React from 'react';
import { shallow, mount, render } from 'enzyme';


describe('Search Component', () => {
  const wrapper = shallow(<Search />);

  it('Test state after user input', ()=>{
    wrapper.find('input').simulate('change', {target: {value: 'chicken'}});
    
    setTimeout(()=>{expect(wrapper.state().userFoodItemInput).toBe('chicken')}, 2000)
  
  })

});