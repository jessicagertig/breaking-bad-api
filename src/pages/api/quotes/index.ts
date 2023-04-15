import { NextApiRequest, NextApiResponse } from "next";
const data = require("../../../../data/quotes.json");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
