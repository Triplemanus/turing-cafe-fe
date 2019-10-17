import React from 'react';
import { shallow } from 'enzyme'
import Form from './Form';

describe('Form', () => {
  let wrapper;
  const mockAddReservation = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Form addRes={mockAddReservation} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state when handleChange is called', () => {
    const mockEvent = { target: {  name: 'name', value: "Frankenstein"} };

    const expected = "Frankenstein";

    wrapper.instance().handleChange(mockEvent);

    expect(wrapper.state('name')).toEqual(expected);
  });

  it('should reset state to default when resetInputs method is called', () => {
    const defaultState = { 
      name: "Frank",
      time: "24:00", 
      date: "10/31",
      number: "30"
    };

    const expected = { name: '', time: '', date: '', number: '' };
    
    wrapper.instance().setState(defaultState);

    wrapper.instance().resetInputs();

    expect(wrapper.state()).toEqual(expected);
  });

})