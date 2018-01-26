import React from 'react';
import {shallow} from 'enzyme';

import Game from './game';
import './config';

describe('<Game />', () => {
  it('Smoke Test', () => {
    shallow(<Game />);
  });
});

