import React from 'react'
import styled from 'styled-components'

class Input extends React.Component {
  constructor(props) {
    super(props)
    this.input = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.input.current.focus();
  }
  render() {
    return <Wrapper>
      <Label onClick={this.handleClick}>{this.props.label}</Label>
      {(() => {
        switch (this.props.type) {
          case 'select': return <SelectElement ref={this.input} {...this.props.input}>
                                  {this.props.options && this.props.options.length &&
                                  this.props.options.map((option, i) => <option key={i} value={option}>{option}</option>)
                                  }
                                </SelectElement>;
          default: return <InputElement type={this.props.type} ref={this.input} {...this.props.input} />;
        }
      })()}

    </Wrapper>
  }
}

export default Input;

const Label = styled.label`
  width:150px;
  display:inline-block;
`

const Wrapper = styled.div`
  margin-bottom:20px;
  width:400px;
`

const InputElement = styled.input`
  width: 170px;
`
const SelectElement = styled.select`
  width: 170px;
`
