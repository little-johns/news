import React from 'react';
import { shallow } from 'enzyme';
import News from '../client/src/components/News.jsx';


const count = shallow(
 <News/>,
);

describe('Amount of article in a company', () => {
  it('Every Company should have 3 news', () => {
    expect(count.length).toBe(3);
  });
});