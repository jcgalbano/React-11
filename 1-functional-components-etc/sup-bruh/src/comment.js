import React from 'react'

const Comment = (props) => {
  return (
    <>
      <h5>{props.username}:</h5>
      <p>{props.content}</p>
    </>
  )
}

export default Comment
