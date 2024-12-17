import { useState } from 'react'
import data from './data/data'

function App() {
  const [post, setPost] = useState('Prova')

  const sendPost = (event) => {
    event.preventDefault()
    console.log('click');
  }

  return (
    <>
      <div>
        <form onSubmit={() => sendPost(event)}>
          <label htmlFor="desc">Post content</label>
          <input
            type="text"
            name="desc"
            id="desc"
            value={post}
            onChange={e => { setPost(e.target.value) }}
          />
          <button type='submit'>submit</button>
        </form>
      </div>
      {data.map(curPost => <div key={curPost.id}>{curPost.title}</div>
      )}
    </>
  )
}

export default App
