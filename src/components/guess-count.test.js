import React from 'react';
import {shallow} from 'enzyme';

import GuessCount from './guess-count';
import './config';

describe('<GuessCount />', () => {
  it('Smoke Test', () => {
    shallow(<GuessCount />);
  });

  it('should properly display props', () => {
    const guessCount=0;
    const wrapper=shallow(<GuessCount guessCount={guessCount}/>);
    expect(wrapper.contains([<h2 id="guessCount">You've made <span id="count">{guessCount}</span> guesses!</h2>]));
  });

  it('should render plural when appropriate', () => {
    const guessCount=3;
    const wrapper=shallow(<GuessCount guessCount={guessCount}/>);
    expect(wrapper.contains(<h2>peanut butter</h2>));
  })
});

