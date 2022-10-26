import './thoughts-page.scss';
import { useFetch } from '../../hooks/useFetch';
import Card from '../../components/card/card';

const ThoughtsPage = () => {

  const url = 'http://localhost:3000/thoughts';
  const { data: thoughts } = useFetch(url)
  
  return (
    <div className='cards-container'>
      {thoughts && thoughts.map(thought => <Card key={thought.id} thought={thought} />)}
    </div>
  )
}

export default ThoughtsPage