import './detail.scss';
import { Link } from 'react-router-dom';

const Detail = ({thought}) => {

  return (
    <div className='detail-box'>
        <h2 className='detail-box__title'>{thought.title}</h2>
        <p className='detail-box__text'>{thought.text}</p>
        <Link className='lnk-btn' to='/' >All Thoughts</Link>
    </div>
  )
}

export default Detail