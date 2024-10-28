import styled from 'styled-components'

export const MainContainer = styled.div`
  background-image: linear-gradient(
    to ${props => props.direction},
    ${props => props.color1},
    ${props => props.color2}
  );
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  width: min(90%, 1000px);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Heading = styled.h1`
  color: #fff;
  font-wight: 700;
`

export const Paragraph = styled.p`
  color: #fff;
`
export const ButtonContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`
export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ColorInputContainer = styled.div``
export const ColorInput = styled.input`
  width: 80px;
  height: 40px;
  border: 0px;
  margin: 15px;
`
export const Button = styled.button`
  background-color: #00c9b7;
  padding: 10px 20px;
  color: #1e293b;
  border: 0px;
  border-radius: 5px;
  cursor: pointer;
`
