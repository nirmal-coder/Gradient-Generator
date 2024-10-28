// Style your elements here
import styled from 'styled-components'

export const List = styled.li`
  list-style: none;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: #fff;
  color: transperent;
  border: 5px;
  margin-right: 10px;
  padding: 10px 25px;
  border-radius: 5px;
  margin-bottom: 10px;
  opacity: ${props => (props.activeBtn ? 1 : 0.5)};
  cursor: pointer;
`
