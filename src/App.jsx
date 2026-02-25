import { useState } from 'react'
import PostForm from './Components/PostForm'

function App() {
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

  return (
    <>
      <header className='text-center'>
        <h1>Create your posts here </h1>
      </header>
      <main className='container'>
        <PostForm
          formData={formData}
          changeFormData={changeFormData}
        />
      </main>
    </>
  )
}

export default App
