import Search from './client/src/components/Search.jsx';
import React from 'react';
import { shallow, mount, render } from 'enzyme';

describe('Search Component', () => {
  const wrapper = shallow(<Search />);
  it('On user input, the state of search component should change', ()=>{
    wrapper.find('#input').simulate('change', {target: {value: 'chicken'}});
    setTimeout(()=>{expect(wrapper.state().userFoodItemInput).toBe('chicken')}, 200)
  })
});

