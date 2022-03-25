import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export function useFetch<T = unknown>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<Boolean>(false);

  const fetchresponse = async () => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => setData(response.data.results))
      .then(() => setLoading(false));
  };

  useEffect(() => {
    fetchresponse();
  }, [url]);

  return { data, fetchresponse, loading };
}
