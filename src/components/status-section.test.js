import React from 'react';
import {shallow} from 'enzyme';

import StatusSection from './status-section';
import './config';

describe('<StatusSection />', () => {
  it('Smoke Test', () => {
    shallow(<StatusSection guesses={[]}/>);
  }); 
});

