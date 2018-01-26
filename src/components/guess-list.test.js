import React from 'react';
import {shallow} from 'enzyme';

import GuessList from './guess-list';
import './config';

describe('<GuessList />', () => {
  it('Smoke Test', () => {
    shallow(<GuessList guesses={[]} />);
  });

  it('should properly display props', () => {
    const guesses=[23, 42, 7]
    const wrapper=shallow(<GuessList guesses={guesses} />);
    expect(wrapper.containsMatchingElement(<li key={0}>{guesses[0]}</li>)).toEqual(true);
  });

  it('should properly display props', () => {
    const guesses=[23, 42, 7]
    const wrapper=shallow(<GuessList guesses={guesses} />);
    expect(wrapper.containsMatchingElement(<li key={2}>{guesses[2]}</li>)).toEqual(true);
  });

});

