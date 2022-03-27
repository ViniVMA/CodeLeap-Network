import { useEffect, useState } from "react";
import axios from "axios";

function useFetch<T = unknown>(url: string, offset: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<Boolean>(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response.data.results);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  const refetch = () => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data.results);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const infiniteLoading = () => {
    axios
      .get(offset)
      .then((response) => {
        setData(response.data.results);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {});
  };

  return { data, loading, error, refetch, infiniteLoading };
}

export default useFetch;
