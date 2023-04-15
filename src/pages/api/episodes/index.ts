import { NextApiRequest, NextApiResponse } from "next";
const episodeData = require("../../../../data/episodes.json");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    res.status(200).json(episodeData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
