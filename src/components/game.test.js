import React from 'react';
import {shallow} from 'enzyme';

import Game from './game';
import './config';

const mockMath = Object.create(global.Math);
mockMath.random = () => 0.5;
global.Math = mockMath;

describe('<Game />', () => {
  it('Smoke Test', () => {
    shallow(<Game />);
  });

  it('Should update state when restart game is called', () => {
    const wrapper = shallow(<Game />);
    wrapper.instance().restartGame();
    wrapper.update();
    expect(wrapper.state('feedback')).toEqual('Make your guess!');
    expect(wrapper.state('guesses')).toEqual([]);
    expect(wrapper.state('auralStatus')).toEqual('');
    expect(wrapper.state('correctAnswer')).toBeGreaterThan(0);
    expect(wrapper.state('correctAnswer')).toBeLessThan(101);
    });
  
  });
  

