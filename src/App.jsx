import { useState } from 'react'


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
        <div className="row">
          <form onSubmit={changeFormData} className=''>
            <input type="text" name='author' placeholder='Author' className='form-control' />
            <input type="text" name='title' placeholder='Title' className='form-control' />
            <input type="text" name='body' placeholder='Description' className='form-control' />
            <div class="form-check">
              <input className="form-check-input" type="checkbox" value="" name='public' />
              <label className="form-check-label" for="checkDefault">
                Default checkbox
              </label>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}

export default App
