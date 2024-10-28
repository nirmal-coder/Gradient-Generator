import {Button, List} from './styledComponents'

const GradientDirectionItem = props => {
  const {activeButton, obj, updateActiveDirection} = props
  const {directionId, displayText, value} = obj

  const activeBtn = directionId === activeButton

  const callFunction = () => {
    updateActiveDirection(directionId, value)
  }

  return (
    <List>
      <Button activeBtn={activeBtn} type="button" onClick={callFunction}>
        {displayText}
      </Button>
    </List>
  )
}

export default GradientDirectionItem
