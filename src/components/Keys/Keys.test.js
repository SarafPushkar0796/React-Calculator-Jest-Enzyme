import React from 'react';
import { shallow } from 'enzyme';
import Keys from './Keys';

describe('Keys', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <Keys
                keyAction={jest.fn()}
                keyType={''}
                keyValue={''}
            />
        );
    });

    it('should render a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('should render the value of keyValue', () => {
        wrapper.setProps({ keyValue: 'test' });
        expect(wrapper.text()).toEqual('test');
    });

    it('should render correctly', () => expect(wrapper).toMatchSnapshot());
});