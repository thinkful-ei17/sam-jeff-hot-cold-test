import React from 'react';
import {shallow} from 'enzyme';

import AuralStatus from './aural-status';
import './config';

describe('<AuralStatus />', () => {
  it('Smoke Test', () => {
    shallow(<AuralStatus />);
  });

  it('should properly display props', () => {
    const auralStatus='Here is the status of the game right now';
    const wrapper=shallow(<AuralStatus auralStatus={auralStatus}/>);
    expect(wrapper.contains(<p>Here is the status of the game right now</p>));
  });

  it('should have included props', () => {
    const wrapper=shallow(<AuralStatus />);
    expect(wrapper.prop('aria-atomic')).toEqual('true');
  });
});