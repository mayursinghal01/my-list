
const Posts = ({post,forwardRef}) => {
    return (
        <div className="card" ref={forwardRef} >
            <img src={post.url} height="100px" width="100px" alt="" />
            <div className="description"> 
                <h4>{post.id}</h4>
                <p> {post.title}</p>
            </div>
       
        </div>
    )
}

export default Posts
