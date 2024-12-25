type PortfolioHeadersTypes = {
  "x-rapidapi-key": string;
  "x-rapidapi-host": string;
};
type PortfolioOptionsTypes = {
  method: string;
  headers: PortfolioHeadersTypes;
};

export const fetchPortfolios = async () => {
  const url: string =
    "https://yahoo-finance166.p.rapidapi.com/api/portfolio/get-most-popular";
  const options: PortfolioOptionsTypes = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
      "x-rapidapi-host": process.env.NEXT_PUBLIC_RAPID_API_HOST || "",
    },
  };
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    return response.json();
  }
};
