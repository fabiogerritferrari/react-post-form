export default function PostForm({ formData, changeFormData }) {

    return (
        <div className="row">
            <form className=''>
                <input type="text" name='author'
                    placeholder='Author'
                    className='form-control'
                    value={formData.author}
                    onChange={changeFormData}
                />
                <input type="text" name='title'
                    placeholder='Title'
                    className='form-control'
                    value={formData.title}
                    onChange={changeFormData}
                />
                <input type="text" name='body'
                    placeholder='Description'
                    className='form-control'
                    value={formData.body}
                    onChange={changeFormData}
                />
                <div class="form-check">
                    <input type="checkbox" name='public'
                        className="form-check-input"
                        value={formData.public}
                        onChange={changeFormData} />
                    <label className="form-check-label" for="public">
                        Public
                    </label>
                </div>
            </form>
        </div>
    )
}