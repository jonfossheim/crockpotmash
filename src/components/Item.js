import { Link } from 'react-router-dom';
const Item = ({ item }) => {
  return (
    <div>
      <Link to={`/class/${item.index}`}>
        <h3>{item.name}</h3>
      </Link>
    </div>
  );
};

export default Item;
