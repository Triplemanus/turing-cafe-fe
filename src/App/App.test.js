import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App', () => {
  it('should update state with a reservation when addRes is called', () => {
    // Setup
    const wrapper = shallow(<App />);
    const mockRes = { name: 'Victor Mac', date: '10/31', time: '12:00', number: '15', id: Date.now() };
    const expected = [mockRes];

    // Expectation
    expect(wrapper.state('reservations')).toEqual([]);

    // Execution
    wrapper.instance().addRes(mockRes);

    // Expectation
    expect(wrapper.state('reservations')).toEqual(expected);
  });
});