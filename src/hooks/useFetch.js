import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState();
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        setHasError(false);
      })
      .catch((err) => {
        setHasError(true);
        console.log(err);
      });
  }, [url]);

  return [data, hasError];
};

export default useFetch;
