export default function RenderCard({ posts }) {

    return (
        <ul className="row">
            {posts.map((post, index) => {
                return (
                    <li key={index} className='my-5 list-unstyled'>
                        <div className="card text-center">
                            <div className="card-header">
                                {post.author}
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text">{post.body}</p>
                            </div>
                            <div className="card-footer text-body-secondary">
                                {post.public ? 'public' : 'private'}
                            </div>
                        </div>
                    </li>
                )
            })}
        </ul>
    )


}