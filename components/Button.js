import { useDispatch } from 'react-redux'
import { update } from 'redux/calculator.js'

const Button = ({ text, textcolor }) => {
  const dispatch = useDispatch()

  return (
    <div
      className="button__container"
      style={{ color: textcolor }}
      onClick={() => dispatch(update(text))}
    >
      {text}
    </div>
  )
}

export default Button
