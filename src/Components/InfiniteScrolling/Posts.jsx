
const Posts = ({post}) => {
    return (
        <div className="card" >
            <img src={post.url} height="100px" width="100px" />
            <div className="description"> 
                <h4>{post.id}</h4>
                <p> {post.title}</p>
            </div>
       
        </div>
    )
}

export default Posts
