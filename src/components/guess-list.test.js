import React from 'react';
import {shallow} from 'enzyme';

import GuessList from './guess-list';
import './config';

describe('<GuessList />', () => {
  it('Smoke Test', () => {
    shallow(<GuessList guesses={[]} />);
  });
});

