import { useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"
import Card from "../../components/card/card"

export const ThoughtDetail = () => {
    
    const { id } = useParams()

    const url = 'http://localhost:3000/thoughts/' + id

    const { data: thought } = useFetch(url)
    console.log(thought)

    return (
        <div>
            {thought && <Card thought={thought} />}
        </div>
    )
}