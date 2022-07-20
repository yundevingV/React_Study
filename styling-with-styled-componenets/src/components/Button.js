import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

  /* 색상 */
const colorStyles = css`
  ${({theme,color}) => {
    const selected = theme.palette[color]
    return css`
    background: ${selected};
    &:hover {
      background: ${lighten(0.1,selected)};
    }
    &:active {
      background: ${darken(0.1,selected)};
    }
    ${props =>
      props.outline &&
      css`
        color: ${selected};
        background: none;
        border: 1px solid ${selected};
        &:hover {
          background: ${selected};
          color: white;
        }
      `}
    `
  }}
  `

const sizes = {
  large : {
    height : '3rem',
    fontSize : '1.25rem'
  },
  medium : {
    height : '2.25rem',
    fontSize : '1rem'
  },
  small : {
    height: '1.75rem',
    fontSize: '0.875rem'
  }

}
  /* 크기 */
const sizeStyles = css`
  ${({size}) => css`
  height : ${sizes[size].height};
  fontSize : ${sizes[size].fontSize};
  `}
`
const fullWidthStyle = css`
${props =>
  props.fullWidth &&
  css`
    width :100%;
    justify-content : center;
    & + & {
      // margin-left : 0;
      margin-top : 1rem;
    }
  `}
`
const StyledButton = styled.button`
  /* 공통 스타일 */
  display:inline-block;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /* 크기 */
  ${sizeStyles}

  /* 색상 */
  ${colorStyles}


  /* 기타 */
  & + & {
    margin-left : 1rem;
  }

  /* 풀화면 */
  ${fullWidthStyle}
`;

function Button({ children,color,size,outline,fullWidth, ...rest }) {
  return (<StyledButton color={color} size={size} outline={outline} fullWidth={fullWidth} {...rest}>
           {children}
         </StyledButton>);
}
// childeren 태그 이름 , ...rest 앞에 서술한 요소를 제외한 나머지

Button.defaultProps ={
  color :'blue',
  size : 'medium'
}
// 기본값 blue.


export default Button;