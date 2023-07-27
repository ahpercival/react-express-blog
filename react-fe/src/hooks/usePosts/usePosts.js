import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const usePosts = () => {
  const query = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:5001/api/v1/articles");

      return data;
    },
  });
  return query;
};
