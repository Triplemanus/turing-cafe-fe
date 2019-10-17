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

    expect(wrapper.state('reservations')).toEqual(expected);
  });


})