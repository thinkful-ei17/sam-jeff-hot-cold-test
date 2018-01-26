import React from 'react';
import {shallow} from 'enzyme';

import TopNav from './top-nav';
import './config';

describe('<TopNav />', () => {
  it('Smoke Test', () => {
    shallow(<TopNav />);
  }); 

  it('should fire Restart Game when clicked', () => {
    const callback = jest.fn();
    const wrapper = shallow(<TopNav onRestartGame={callback} />);
    wrapper.find('.new').simulate('click');
    expect(callback).toHaveBeenCalled();
  });

  it('should fire Aural Update when clicked', () => {
    const callback = jest.fn();
    const wrapper = shallow(<TopNav onGenerateAuralUpdate={callback} />);
    wrapper.find('.status-link').simulate('click');
    expect(callback).toHaveBeenCalled();
  });
});


