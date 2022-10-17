import React from 'react';
import styled from 'styled-components';

import {Input} from "../../components-ui/input";
import PropTypes from "prop-types";
import {Colors, MediaViews} from "../../helpers/style-variables";

const UsernameBlock = ({fullName, onChange, error}) => (

  <Content>
    <Label>Full Name: <ErrorText>{error}</ErrorText></Label>
    <Input value={fullName} onChange={onChange} placeholder='Enter your full name' type='text'/>
  </Content>

);

export default UsernameBlock;

UsernameBlock.propTypes = {
  fullName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 20px;
  @media (max-width: ${MediaViews.MOBILE}px) {
    margin-bottom: 10px;
  }
`;

const Label = styled.div`
  padding-left: 10px;
  display: flex;
  align-items: center;
`;

const ErrorText = styled.div`
  color: ${Colors.ERROR_COLOR};
  padding: 0 10px;
`;
