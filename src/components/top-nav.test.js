import React from 'react';
import {shallow} from 'enzyme';

import TopNav from './top-nav';
import './config';

describe('<TopNav />', () => {
  it('Smoke Test', () => {
    shallow(<TopNav />);
  }); 
});
