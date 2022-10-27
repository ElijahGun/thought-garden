import './search-page.scss';
import { useSearchParams } from "react-router-dom";
import { useFetch } from '../../hooks/useFetch';
import Card from '../../components/card/card';

const SearchPage = () => {

  const [queryParams] = useSearchParams();
  const query = queryParams.get('q');

  const url = 'http://localhost:3000/thoughts?q=' + query;

  const { data: matchingThoughts } = useFetch(url)



  return (
    <div className='cards-container'>
      {matchingThoughts && matchingThoughts.map((thought) => <Card key={thought.id} thought={thought} />)}
    </div>
  )
}

export default SearchPage