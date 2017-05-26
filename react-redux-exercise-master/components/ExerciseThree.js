import React, { PropTypes } from "react"


const ExerciseThree = ({ value, optionChange }) => {
  const onChangeFinal = (event) => {
    optionChange(event.target.value)
  }

  return (
    <div>
      <h1>{value}</h1>}
      <select onChange={onChangeFinal}  >
        <option value="option1">option1</option>
        <option value="option2">option2</option>
        <option value="option3">option3</option>
      </select>
    </div>
  )
}
ExerciseThree.propTypes = {
  value: PropTypes.string,
  optionChange: PropTypes.func.isRequired,
}


export default ExerciseThree;
