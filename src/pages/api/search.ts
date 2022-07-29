import { NextApiHandler } from "next";
import axios from "axios";

const searchHandler: NextApiHandler = async (req, res) => {
  if (req.method !== "GET") {
    res.status(405).json({ message: "405 Method Not Allowed", results: [] });
    return;
  }

  const results = await axios.get(
    `https://suggestqueries.google.com/complete/search?client=chrome&q=${
      req.query.q?.toString() ?? ""
    }`
  );
  res
    .status(200)
    .setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate")
    .json({ results: results.data[1] });
};

export default searchHandler;
