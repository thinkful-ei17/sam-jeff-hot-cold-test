import React from 'react';
import {shallow} from 'enzyme';

import GuessCount from './guess-count';
import './config';

describe('<GuessCount />', () => {
  it('Smoke Test', () => {
    shallow(<GuessCount />);
  });
});

