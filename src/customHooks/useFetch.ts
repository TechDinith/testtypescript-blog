import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(url)
        .then(function (response) {
          setData(response.data);
          setIsPending(false);
        })
        .catch(function (error) {
          setIsPending(false);
          setError(error.message);
        });
    }, 1000);
  }, [url]);

  return { data, isPending, error };
};
export default useFetch;
