import React from 'react'

export const Post = props => {
  const {post} = props

  return (
    <div className="postTitle">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}