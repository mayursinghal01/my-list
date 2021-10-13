import axios from "axios";
import { useState,useEffect,useRef } from "react"
import SearchItem from "./Searchtem";


const DebounceSearch = () => {

    const url = `https://jsonplaceholder.typicode.com/posts?q=`;
    const [searchTerm, setSearchTerm] = useState('');
    const [posts, setPosts] = useState([]);
    const [page,setPage] = useState(1)
    const [isFetching,setFetching] = useState(true)
    const [searching,setSearching] = useState(false)
    const [found,setFound] = useState(false)
    const lastItemRef = useRef();
    const observer = useRef();
    

    const [query, setQuery] = useState(searchTerm);

    useEffect(() => {
        const handler = setTimeout(() => {
            setFound(false)
            setPosts([])
            setPage(1)
            setQuery(searchTerm);
            setFetching(true)
        }, 500);
        return () => {
            clearTimeout(handler);
        };
    },[searchTerm]);


    const getPosts = (query) => {
        const newQuery = query.replace(" ","+");
        const postUrl = url + `${newQuery}&_limit=10&_page=${page}`
        setSearching(true)
        axios.get(postUrl).then(
            res => res.data,
        ).then((data) => {
            if(data.length === 0){
                setPage(1)
                setSearching(false)
                setFound(true)
                return;
            }
            setSearching(false)
            setPosts([...posts,...data])
            setPage(page+1)
            setFetching(false)
        }).catch(error => {
            console.log(error)    
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
        if (query && isFetching) {
            getPosts(query)
        }
    },[query,isFetching]);


    return (
        <div className='search'>
            <input 
                type="text" placeholder="Enter Something" 
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
            <div style={{color:"black",fontWeight:"bolder"}} >Search : hi, odio, autem, distinctio qu, optio</div>
            {posts.map(post => (
                <SearchItem forwardRef={lastItemRef} key={post.id} result={post} />
            ))}
            {searching && <h1>Searching....</h1> }
            {found && <h1>Its over</h1> }
        </div>
    )
}

export default DebounceSearch
