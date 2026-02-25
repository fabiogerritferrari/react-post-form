export default function PostForm({ formData, changeFormData }) {

    return (
        <>
            <input type="text" name='author'
                placeholder='Author'
                className='form-control mt-3'
                value={formData.author}
                onChange={changeFormData}
            />
            <input type="text" name='title'
                placeholder='Title'
                className='form-control mt-3'
                value={formData.title}
                onChange={changeFormData}
            />
            <textarea type="text" name='body'
                placeholder='Description'
                className='form-control mt-3'
                value={formData.body}
                onChange={changeFormData}
            />
            <div className="form-check mt-3">
                <input type="checkbox" name='public'
                    className="form-check-input"
                    value={formData.public}
                    onChange={changeFormData} />
                <label className="form-check-label">
                    Public
                </label>
            </div>
        </>
    )
}