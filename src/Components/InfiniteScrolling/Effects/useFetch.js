import axios from "axios"
import { useState,useEffect,useRef } from "react"

const useFetch = (url) => {

    const [posts,setPosts] = useState([])
    const [page,setPage] = useState(1)
    const [isFetching,setFetching] = useState(true)
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(false)
    const [loadmore,setLoadmore] = useState(true)

    const lastItemRef = useRef();
    const observer = useRef();


    const postURL = url +`?_page=${page}&_limit=10`

    const getPosts = () => {
        axios.get(postURL).then(
            res => res.data,
        ).then((data) => {
            if(data.length === 0){
                setLoadmore(false)
                setLoading(false)
                return;
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

    useEffect(() => {
        const options = {
            rootMargin: "-8px",
            threshold: 1
        };
        const callback = (entries) => {
            if (entries[0].isIntersecting) {
                setFetching(true)
            }
        };
        observer.current = new IntersectionObserver(callback, options);
        if (lastItemRef.current) {
            observer.current.observe(lastItemRef.current);
        }
        return () => {
            observer.current.disconnect();
        };
    });
    useEffect(() => {
        if(isFetching){
            getPosts();
        }
    },[isFetching])
    return {posts,error,loading,loadmore,lastItemRef}
}

export default useFetch
