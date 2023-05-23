import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(url) {
  const [state, setState] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    async function res() {
      setState("loading");
      try {
        const result = await axios.get(url);
        setData(result.data);
        setState("success");
      } catch (error) {
        setState("error");
      }
    }
    res();
  }, []);

  return { data, state };
}
