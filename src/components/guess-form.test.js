import React from 'react';
import {shallow} from 'enzyme';

import GuessForm from './guess-form';
import './config';

describe('<GuessForm />', () => {
  it('Smoke Test', () => {
    shallow(<GuessForm />);
  }); 
});

