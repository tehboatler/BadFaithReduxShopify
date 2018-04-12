import React, { Component } from 'react';
import styled from 'styled-components';
import Select, { Option } from 'rc-select';

const SelectorWrapper = styled.div`
  background-color: pink;
  width: 100%;
  height: auto;
`;

const Title = styled.h1`
  color: red;
  @media (max-width: 415px) {
  }
`;

export default class VariantSelector extends Component {
  state = {};

  componentDidMount = () => {
    const { options, name, onHandleChange, initialLoad } = this.props;
    const initialOption = options.values[0].value;
    initialLoad(name, initialOption);
  };

  render() {
    const { options, name, onHandleChange } = this.props;
    return (
      <SelectorWrapper>
        <Title>{name}</Title>
        <Select
          allowClear
          placeholder={`"Select A ${name}`}
          defaultValue={`${options.values[0].value}`}
          className="selector_wrapper_styles"
          animation="slide-up"
          showSearch={false}
          onChange={(value, props) => onHandleChange(value, props)}
        >
          {options.values.map(option => {
            return (
              <Option
                className="selector_option_styles"
                key={option.value}
                value={option.value}
                parent={name}
              >
                {option.value}
              </Option>
            );
          })}
        </Select>
      </SelectorWrapper>
    );
  }
}
