import React from 'react';
import {shallow} from 'enzyme';

import Feedback from './feedback';
import './config';

describe('<Feedback />', () => {
  it('Smoke Test', () => {
    shallow(<Feedback />);
  });
});

