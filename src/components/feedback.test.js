import React from 'react';
import {shallow} from 'enzyme';

import Feedback from './feedback';
import './config';

describe('<Feedback />', () => {
  it('Smoke Test', () => {
    shallow(<Feedback />);
  });

  it('should properly display props', () => {
    const feedback='Congratulations';
    const wrapper=shallow(<Feedback feedback={feedback}/>);
    expect(wrapper.contains(<h2>Congratulations</h2>));
  });

  it('should have included props', () => {
    const wrapper=shallow(<Feedback />);
    expect(wrapper.prop('aria-atomic')).toEqual('true');
  });
});

