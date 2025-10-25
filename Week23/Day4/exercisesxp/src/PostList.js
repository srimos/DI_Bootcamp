import posts from './posts.json'

const PostList = () => {
    console.log(posts)
    return(
        <>
        <h1>Hi This is a Title</h1>
        <div>
            {posts.map((p,index) => (
            <div key={index}>
            <h1>{p.title}</h1>
            <p>{p.content}</p>
            </div>
            ))}
        </div>
        </>
    )
}

export default PostList