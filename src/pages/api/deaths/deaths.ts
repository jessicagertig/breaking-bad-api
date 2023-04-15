import { NextApiRequest, NextApiResponse } from "next";
const deathData = require("../../../../data/deaths.json");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    res.status(200).json(deathData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
