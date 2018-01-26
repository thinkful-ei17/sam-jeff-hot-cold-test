import React from 'react';
import {shallow} from 'enzyme';

import GuessSection from './guess-section';
import './config';

describe('<GuessSection />', () => {
  it('Smoke Test', () => {
    shallow(<GuessSection />);
  });
});

