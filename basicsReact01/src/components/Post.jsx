import React from 'react'

function Post({title, content, author}) {
  return (
    <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <a href="#">{author}</a>
    </div>
  )
}

export default Post