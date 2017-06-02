import React, { PropTypes } from "react"


const ExerciseThree = ({ value, optionChange }) => {
  const onChangeFinal = (event) => {
    optionChange(event.target.value)
  }

  return (
    <div style={{ marginBottom: '10px' }}>
      <i>
        Build me from scratch!<br />
        I need to be a select field which will display the new selected value<br />
        BONUS POINT: and the previous selected value ;)<br />
        Select values are [&apos;&apos;, &apos;blue&apos;, &apos;white&apos;, &apos;red&apos;
        ] - default value = &apos;&apos;
      </i>
      <h1>{value}</h1>
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
