import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export class CoffeeRow extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <StyledRow>
        <Title><strong>{this.props.coffee.name}</strong></Title>
        <Percent>
          <span>{this.props.coffee.percent}</span><strong>%</strong>
        </Percent>


      </StyledRow>
    );
  }
};

CoffeeRow.propTypes = {
  coffee: PropTypes.object.isRequired
};

export default CoffeeRow;

const StyledRow = styled.div`
  background: #fff;
  display: block;
  width: 210px;
  margin-bottom:10px;
  &:after {
    content: '';
    clear:both;
    display:block;
  }
  `

const StyledCell = styled.div`
  margin:0;
  float:left;
`

const Title = styled(StyledCell)`
  width:150px;
`
const Percent = styled(StyledCell)`
  width:60px;
  text-align:right;
`