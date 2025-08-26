import { useState ,useEffect, use} from 'react'
import './App.css'
import { Post, UserCard, DarkMode } from './components'
function App() {
  const [count, setCount] = useState(0)
  

  const posts = [
    {
      title: "React", content: "Learn React", author: "Omkar"
    },
    {
      title: "Django", content: "Learn Django", author: "HC"
    }
  ]

  const users = 
  {
      name: "Lady", 
      profileImage: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
      isOnline: true,
      bio: "I'm Biotechnologist"
  }
  return (
    <>
      {posts.map((post, index) => (
        <Post 
        key={index}
        title={post.title}
        content={post.content}
        author={post.author}
        />
      ))}

      <UserCard
      name={users.name}
      profileImage={users.profileImage}
      isOnline={users.isOnline}
      bio={users.bio}
      /> 

      <h3 style={{color: count >= 0 ? 'green': 'red' }}>Counter : {count}</h3>
      <button onClick={() => setCount(count + 1)}>Add: {count}</button>
      <button onClick={() => setCount(count - 1)}>Substract: {count}</button>


      <DarkMode />
      <h1>All Posts</h1>
    </>
  )
}

export default App
