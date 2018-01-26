import React from 'react';
import {shallow} from 'enzyme';

import Feedback from './feedback';
import './config';

describe('<Feedback />', () => {
  it('Smoke Test', () => {
    shallow(<Feedback />);
  });

  it('should properly display props', () => {
    const feedback='Congratulations';
    const wrapper=shallow(<Feedback feedback={feedback} />);
    expect(wrapper.text()).toContain('Congratulations');
  });

  it('should properly display props', () => {
    const guessCount=1
    const wrapper=shallow(<Feedback guessCount={guessCount} />);
    expect(wrapper.containsMatchingElement(<span>Guess again!</span>)).toEqual(true);
  });

  it('should properly display props', () => {
    const guessCount=0
    const wrapper=shallow(<Feedback guessCount={guessCount} />);
    expect(wrapper.containsMatchingElement(<span>Guess again!</span>)).toEqual(false);
  });

  it('should have included props', () => {
    const wrapper=shallow(<Feedback />);
    expect(wrapper.prop('aria-atomic')).toEqual('true');
  });
});

