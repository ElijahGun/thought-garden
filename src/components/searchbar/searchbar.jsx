import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"

import './searchbar.scss';


export const SearchBar = () => {

    const [searchText, setSearchText] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        
        navigate(`/search?q=${searchText}`)
    }

    return (
        <form onSubmit={handleSubmit} className='searchForm'>
            <label htmlFor="search" className="searchForm--label">Search: </label>
            <input className="searchForm--input" name="search" placeholder="Search Thoughts.." onChange={(e) => setSearchText(e.target.value)} value={searchText} />
        </form>
    )
}