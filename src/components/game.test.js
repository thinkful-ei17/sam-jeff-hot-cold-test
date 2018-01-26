import React from 'react';
import {shallow} from 'enzyme';

import Game from './game';
import './config';

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
  
    it('Should take in guess whne makeGuess is called', () => {
      const wrapper = shallow(<Game />);
      wrapper.instance().setState({correctAnswer: 40});
      wrapper.instance().makeGuess('1');
      wrapper.update();
      expect(wrapper.state('feedback')).toEqual('You\'re Cold...');
      });
  });
  

