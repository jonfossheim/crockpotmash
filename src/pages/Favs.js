import useLocalStorage from '../hooks/useLocalStorage';

const Favs = () => {
  const [favs, setFavs] = useLocalStorage('favs');

  return (
    <div>
      {favs.map((item, idx) => {
        return (
          <div key={idx}>
            <p>{item.name}</p>
            <button
              onClick={() => {
                setFavs([]);
              }}
            >
              Reset All
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Favs;
