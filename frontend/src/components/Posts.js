import React, {Component} from 'react'
import {Post} from './Post'

let data = [
  {
      "id": 1,
      "title": "Hello World",
      "content": "This is my first post!"
  },
  {
      "id": 2,
      "title": "Job Search Update",
      "content": "Today I had a technical interview with Cedar and a phone screen with the Times."
  },
  {
      "id": 3,
      "title": "Mango Update",
      "content": "On today's walk, Mango chased a squirrel."
  }
]

class Posts extends Component {
  render() {
    return (
      <div>
        {
          data.map(post => {
            return (
              <Post key={post.id} post={post} />
            )
          })
        }
      </div>
    )
  }
}

export default Posts