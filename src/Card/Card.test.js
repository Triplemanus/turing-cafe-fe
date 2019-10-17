import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<Card
      name="Frankenstein"
      date="10/31"
      id="30"
      time="24:00"
      number="30"
    />);

    expect(wrapper).toMatchSnapshot();
  });
})