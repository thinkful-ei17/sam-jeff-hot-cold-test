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
    const wrapper=shallow(<GuessCount guessCount={guessCount} />);
    expect(wrapper.containsMatchingElement(<span>{guessCount}</span>)).toEqual(true);
  });

  it('should render plural when appropriate', () => {
    const guessCount=4;
    const wrapper=shallow(<GuessCount guessCount={guessCount} />);
    expect(wrapper.text()).toContain('guesses');
  })

  // it('should not render plural when appropriate', () => {
  //   const guessCount=1;
  //   const wrapper=shallow(<GuessCount guessCount={guessCount} />);
  //   expect(wrapper.text()).toNotContain('guesses');
  // })
});


