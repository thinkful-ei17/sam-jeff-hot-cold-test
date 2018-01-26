import React from 'react';
import {shallow} from 'enzyme';

import AuralStatus from './aural-status';
import './config';

describe('<AuralStatus />', () => {
  it('Smoke Test', () => {
    shallow(<AuralStatus />);
  });
});