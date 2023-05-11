import ShowCard from './ShowCard';

const ShowGrid = ({ shows }) => {
  return (
    <div>
      {shows.map(data => (
        <ShowCard
          key={data.show.id}
          id={data.show.id}
          summary={data.show.summary}
          name={data.show.name}
          image={
            data.show.image ? data.show.image.medium : `/imagenotfound.png`
          }
        />
      ))}
    </div>
  );
};
export default ShowGrid;
