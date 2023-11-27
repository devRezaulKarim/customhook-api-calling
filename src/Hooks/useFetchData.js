import { useEffect, useState } from "react";

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Couldn't get data for the resource");
        }
        return res.json();
      })
      .then((data) => setData(data))
      .catch((err) => setError(err.message));
  }, [url]);
  return { data, error };
};

export default useFetchData;
