import React from 'react'
import styled from 'styled-components'
import {COLOR_PRIMARY} from '../theme'

const Button = styled.button`
border:2px solid ${COLOR_PRIMARY};
background: #fff;
color:${COLOR_PRIMARY};
padding:5px 10px;
font-size:14px;
font-weight: bold;
text-transform: uppercase;
`

export default Button;
