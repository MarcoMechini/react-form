import { useState } from 'react'
import data from './data/data'

function App() {
  const [post, setPost] = useState(data)
  const [newPost, setNewPost] = useState('')

  const sendPost = event => {
    event.preventDefault()
    console.log(newPost);

    setPost([...post, { id: Date.now(), title: newPost }])
    console.log(post);
    setNewPost('')
  }

  return (
    <>
      <div>
        <form onSubmit={sendPost}>
          <label htmlFor="desc">Post content</label>
          <input
            type="text"
            name="desc"
            id="desc"
            value={newPost}
            onChange={e => {
              setNewPost(e.target.value)
            }}
          />
          <button type='submit'>submit</button>
        </form>
        {/* <p>{post}</p> */}
      </div>
      {post.map(curPost => <div key={curPost.id}>{curPost.title}</div>
      )}
    </>
  )
}

export default App
