import './card.scss';
import { Link } from 'react-router-dom';

const Card = ({ thought }) => {
  const { id, text, title } = thought;
  return (
    <div className='card'>
        <h2 className='card-title'>{title}</h2>
        <p className='card-text'>{text}</p>
        <Link className='lnk-btn card-btn' to={`/thoughts/${id}`}>Explore Thought</Link>
    </div>
  )
}

export default Card