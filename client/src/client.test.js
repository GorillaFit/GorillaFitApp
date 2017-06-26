import Search from './client/src/components/Search.jsx';
 import React from 'react';
 import { shallow, mount, render } from 'enzyme';
 import sinon from 'sinon';
 import axios from 'axios';
 
 describe('Search Component', () => {
 
   const wrapper = shallow(<Search />);
 
   it('On user input, the state of search component should change', ()=>{
     wrapper.find('#input').simulate('change', {target: {value: 'chicken'}});
     setTimeout(()=>{expect(wrapper.state().userFoodItemInput).toBe('chicken')}, 200)
   })
 
   it('On user click of the submit button, and axios get request should fire', ()=>{
     sinon.spy(axios, "get");
     const wrapper = shallow(<Search />);
     wrapper.find('#submit').simulate('click', {preventDefault: ()=>{return null}});
     expect(axios.get.calledOnce).toBe(true)
   })
   
 });