import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';
import './config';

describe('<GuessForm />', () => {
  it('Smoke Test', () => {
    shallow(<GuessForm />);
  });

  it('should fire onMakeGuess when form is submitted', () => {
    const callback = jest.fn();
    const wrapper = mount(<GuessForm onMakeGuess={callback}/>);
    const value = '2';
    wrapper.update();
    wrapper.find('input[type="number"]').instance().value = value;
    wrapper.find('form').simulate('submit');
    expect(callback).toHaveBeenCalledWith(value);
  })

  it('should not fire onMakeGuess when input is empty', () => {
    const callback = jest.fn();
    const wrapper = mount(<GuessForm onMakeGuess={callback} />);
    wrapper.find('form').simulate('submit');
    expect(callback).not.toHaveBeenCalled();
  })
});



