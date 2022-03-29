import { useEffect, useState } from "react";
import axios from "axios";
import useUpdateEffect from "./useUpdateEffect";

function useFetch<T = unknown>(url: string, offSetUrl: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<Boolean>(false);
  const [infiniteLoading, setInfiniteLoading] = useState<Boolean>(false);
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

  //handles a refetch call without reloading the app

  const refetch = () => {
    axios
      .get(offSetUrl)
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

  //handles infinite loading
  useUpdateEffect(() => {
    setInfiniteLoading(true);
    axios
      .get(offSetUrl)
      .then((response) => {
        setData(response.data.results);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setInfiniteLoading(false);
      });
  }, [offSetUrl]);

  return { data, loading, error, refetch, infiniteLoading };
}

export default useFetch;
