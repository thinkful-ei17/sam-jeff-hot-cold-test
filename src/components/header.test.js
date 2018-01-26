import React from 'react';
import {shallow} from 'enzyme';

import Header from './header';
import './config';

describe('<Header />', () => {
  it('Smoke Test', () => {
    shallow(<Header />);
  }); 
});

