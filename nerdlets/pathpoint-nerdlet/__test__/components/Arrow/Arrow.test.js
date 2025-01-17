import React from 'react';
import { mount } from 'enzyme';
import Arrow from '../../../components/Arrow/Arrow';

describe('<Arrow/>', () => {
  it('Arrow render latency 100', () => {
    const step = mount(
      <Arrow
        arrowWidth={12}
        lightColor="blue"
        latencyPercentage={100}
        textLevelBar="anyText"
        showHealth
      />
    );
    expect(step.length).toEqual(1);
  });

  it('Arrow render latency 0', () => {
    const step = mount(
      <Arrow
        arrowWidth={12}
        lightColor="blue"
        latencyPercentage={0}
        textLevelBar="anyText"
        showHealth
      />
    );
    expect(step.length).toEqual(1);
  });
});
