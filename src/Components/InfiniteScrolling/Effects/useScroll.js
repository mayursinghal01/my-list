import axios from "axios"
import { useState,useEffect } from "react"

const useScroll = (url) => {

    const [posts,setPosts] = useState([])
    const [page,setPage] = useState(1)
    const [isFetching,setFetching] = useState(true)
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(false)
    const [loadmore,setLoadmore] = useState(true)

    const postURL = url +`?_page=${page}&_limit=10`;

    const getPosts = () => {
        axios.get(postURL).then(
            res => res.data,
        ).then((data) => {
            if(data.length === 0){
                setLoadmore(false)
                setLoading(false)
                return
            }
            setPosts([...posts,...data])
            setPage(page+1)
            setFetching(false)
            setError('')
        }).catch((err) => {
            if(err){
                setLoading(false)
                setError(true)
            }
        })

        
    }

    const isScrolling =()=>{
        if(window.innerHeight + document.documentElement.scrollTop!==document.documentElement.offsetHeight){
          return;
        }
        setFetching(true)
    }
    useEffect(() => {
        if(isFetching){
            getPosts();
        }
        window.addEventListener("scroll", isScrolling);
        return () => window.removeEventListener("scroll", isScrolling);
    },[isFetching])

    return {posts,error,loading,loadmore}
}

export default useScroll
