import React, { Component } from 'react';
import styled from 'styled-components';
import Select, { Option } from 'rc-select';
import MediaQuery from 'react-responsive';
import 'rc-select/assets/index.css';

const SelectorWrapper = styled.div`
  width: 90%;
  height: auto;
  padding: 0 5%;
  padding-bottom: 2.5%;
  margin: 0 0;
  @media (min-width: 768px) {
    padding-bottom: 0.5%;
  }
`;

const Title = styled.h1`
  color: black;
  @media (max-width: 415px) {
    font-size: 4vw;
    padding-top: 2vw;
    margin: 0;
  }
  @media (min-width: 768px) {
    font-size: 1vw;
    padding-top: 2vw;
    margin: 0;
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
        <MediaQuery minDeviceWidth={1224} values={{ deviceWidth: 1600 }}>
          <Select
            allowClear
            placeholder={`"Select A ${name}`}
            defaultValue={`${options.values[0].value}`}
            className="selector_wrapper_styles"
            animation="slide-up"
            showSearch={false}
            onChange={(value, props) => onHandleChange(value, props)}>
            {options.values.map(option => {
              return (
                <Option
                  className="selector_option_styles"
                  key={option.value}
                  value={option.value}
                  parent={name}>
                  {option.value}
                </Option>
              );
            })}
          </Select>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1224}>
        <Select
          allowClear
          placeholder={`"Select A ${name}`}
          defaultValue={`${options.values[0].value}`}
          className="selector_wrapper_styles"
          animation="slide-up"
          showSearch={false}
          onChange={(value, props) => onHandleChange(value, props)}>
          {options.values.map(option => {
            return (
              <Option
                className="selector_option_styles"
                key={option.value}
                value={option.value}
                parent={name}>
                {option.value}
              </Option>
            );
          })}
        </Select>
      </MediaQuery>
      </SelectorWrapper>
    );
  }
}
