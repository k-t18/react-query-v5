import { useQuery } from "@tanstack/react-query";
import { fetchPortfolios } from "../api";

function useFetchPortfoliosList() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["portfolios"],
    queryFn: () => fetchPortfolios(),
  });

  return { isLoading, error, data };
}

export default useFetchPortfoliosList;
