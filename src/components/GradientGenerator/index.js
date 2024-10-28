import {Component} from 'react'
import {
  MainContainer,
  Container,
  Heading,
  Paragraph,
  ButtonContainer,
  InputContainer,
  ColorInputContainer,
  ColorInput,
  Button,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

// Write your code here

class GradientGenerator extends Component {
  state = {
    direction: gradientDirectionsList[0].value,
    activeButton: gradientDirectionsList[0].directionId,
    color1: '#8ae323',
    color2: '#014f7b',
    temp1: '#8ae323',
    temp2: '#014f7b',
    tempValue: gradientDirectionsList[0].value,
  }

  updateActiveDirection = (id, value) => {
    this.setState({activeButton: id, tempValue: value})
  }

  changeColor1 = event => {
    this.setState({temp1: event.target.value})
  }

  changeColor2 = event => {
    this.setState({temp2: event.target.value})
  }

  generateGradient = () => {
    const {temp1, temp2, tempValue} = this.state
    this.setState({direction: tempValue, color1: temp1, color2: temp2})
  }

  render() {
    const {direction, activeButton, color1, color2, temp1, temp2} = this.state
    return (
      <MainContainer
        direction={direction}
        color1={color1}
        color2={color2}
        data-testid="gradientGenerator"
      >
        <Container>
          <Heading>Generate a CSS Color Gradient</Heading>
          <Paragraph>Choose Direction</Paragraph>
          <ButtonContainer>
            {gradientDirectionsList.map(each => (
              <GradientDirectionItem
                key={each.directionId}
                obj={each}
                activeButton={activeButton}
                updateActiveDirection={this.updateActiveDirection}
              />
            ))}
          </ButtonContainer>
          <Paragraph>Pick the Colors</Paragraph>
          <InputContainer>
            <ColorInputContainer>
              <Paragraph>{color1}</Paragraph>
              <ColorInput
                type="color"
                value={temp1}
                onChange={this.changeColor1}
              />
            </ColorInputContainer>
            <ColorInputContainer>
              <Paragraph>{color2}</Paragraph>
              <ColorInput
                type="color"
                value={temp2}
                onChange={this.changeColor2}
              />
            </ColorInputContainer>
          </InputContainer>
          <Button type="button" onClick={this.generateGradient}>
            Generate
          </Button>
        </Container>
      </MainContainer>
    )
  }
}
export default GradientGenerator
