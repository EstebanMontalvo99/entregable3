import useFetch from "../hooks/useFetch";

const getAllLocations = () => {
  const allLocations = [];
  const [maxPages] = useFetch(
    "https://rickandmortyapi.com/api/location?page=1"
  );
  for (let i = 1; i <= 7; i++) {
    const [locations] = useFetch(
      `https://rickandmortyapi.com/api/location?page=${i}`
    );
    locations?.results?.map((location) =>
      allLocations.push(location.name.toLowerCase())
    );
  }
  return allLocations;
};

export default getAllLocations;
