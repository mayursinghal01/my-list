import useScroll from "./Effects/useScroll"
import Posts from "./Posts"

const InfiniteScrolling = () => {

    const url = `https://jsonplaceholder.typicode.com/photos`

    const {posts,error,loading,loadmore} = useScroll(url)

    return (
        <>
            {error ? <h1>Somthing is Wrong</h1> : 
                posts.map(post => <Posts key={post.id} post={post} />)}
            {loading ? <h1>Loading...</h1> : ''}
            {loadmore  ? '' : <h1>Its over</h1> } 
        </>
    )
}

export default InfiniteScrolling
