import Card from '../Card/Card';
import data from '../data';
import './CardsList.css';

const CardsList = (props) => {
  return (
    <div className='cards-list'>
      {data.cards.map(card => 
      {
        const { id, value, suit, image} = card;
        return <Card id={id} value={value} suit={suit} image={image} />
      }
      )}
    </div>
  );
};

export default CardsList;