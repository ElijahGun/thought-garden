import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"


export const SearchBar = () => {

    const [searchText, setSearchText] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        
        navigate(`/search?q=${searchText}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Search: </label>
            <input placeholder="Search Thoughts.." onChange={(e) => setSearchText(e.target.value)} value={searchText} />
        </form>
    )
}