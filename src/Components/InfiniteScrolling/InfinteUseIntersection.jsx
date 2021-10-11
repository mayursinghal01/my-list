import Posts from "./Posts"
import useFetch from "./Effects/useFetch"

const InfinteUseIntersection = () => {

    //If this is not working
    const postURL = `https://jsonplaceholder.typicode.com/photos`

    // Use this..
    // const postURL = `https://jsonplaceholder.typicode.com/posts`
    

    const {posts,error,loading,loadmore,lastItemRef} = useFetch(postURL)

    return (
        <>
            {error ? <h1>Somthing is Wrong</h1> : 
                posts.map(post => <Posts forwardRef={lastItemRef} key={post.id} post={post} />)}
            {loading ? <h1>Loading...</h1> : ''}
            {loadmore  ? '' : <h1>Its over</h1> } 
        </>
    )
}

export default InfinteUseIntersection
