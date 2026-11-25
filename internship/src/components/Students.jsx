import React from 'react'

const Students = (props) => {
  return (
    <>
    <div>
      <h2>Students</h2>
      <h4>I am {props.name} and age is {props.age}</h4>
      <p>This is the Students component.</p>
      
    </div>
    </>
  )
}

export default Students