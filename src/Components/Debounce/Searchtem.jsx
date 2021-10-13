

const SearchItem = ({result,forwardRef}) => {
    return (
        <div className="card" ref={forwardRef}>
            <div className="description"> 
                <h4>{result.id}</h4>
                <p> {result.title}</p>
            </div>
       
        </div>
    )
}

export default SearchItem
