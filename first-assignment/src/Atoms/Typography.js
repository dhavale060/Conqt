import React from 'react';
import styled from 'styled-components';

export default function Typography(props) {
    const {fontFamily, color, text, size} = props
    const Wrapper = styled.div`
       font-family:${fontFamily};
       font-size:${(size)? size : '15px'};
       color:${color};
       position: absolute;
       margin-left: 76px;
       margin-top: 14px;
       font-weight: bold;
    `
  return (
    <Wrapper>{text}</Wrapper>
  )
}
