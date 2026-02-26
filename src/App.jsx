import { useState } from 'react'
import PostForm from './Components/PostForm'
import RenderCard from './Components/RenderCard';

function App() {

  const [posts, Setposts] = useState([])

  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: false
  });

  const changeFormData = (e) => {
    const value =
      e.target.type === "checkbox" ?
        e.target.checked : e.target.value;

    setFormData({
      ...formData,
      [e.target.name]: value
    })
  }

  const addPosts = (e) => {
    e.preventDefault();
    Setposts([...posts, formData]);
    setFormData({
      author: "",
      title: "",
      body: "",
      public: false
    });
  }

  return (
    <>
      <header className='text-center'>
        <h1>Create your posts here </h1>
      </header>
      <main className='container'>
        <PostForm
          formData={formData}
          changeFormData={changeFormData}
          addPosts={addPosts}
        />
        <RenderCard
          posts={posts}
        />
      </main >
    </>
  )
}

export default App
