import React from 'react';
import {shallow} from 'enzyme';

import InfoSection from './info-section';
import './config';

describe('<InfoSection />', () => {
  it('Smoke Test', () => {
    shallow(<InfoSection />);
  }); 
});

