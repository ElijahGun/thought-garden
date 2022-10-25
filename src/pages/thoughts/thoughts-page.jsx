import './thoughts-page.scss';

import Card from '../../components/card/card';
import {useFetch} from '../../hooks/useFetch';

const ThoughtsPage = () => {

  const url = 'http://localhost:3000/thoughts';
 const { data: thoughts } = useFetch(url)
 console.log(thoughts)

  return (
    <div className='cards-container'>
      {thoughts && thoughts.map(thought => <Card key={thought.id} thought={thought} />)}
    </div>
  )
}

export default ThoughtsPage