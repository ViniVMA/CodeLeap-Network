import axios from "axios";
import { useEffect, useState } from "react";

export function useFetch<T = unknown>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => setData(response.data.results))
      .then(() => setLoading(!loading));
  }, []);

  return { data };
}