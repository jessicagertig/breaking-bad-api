import { NextApiRequest, NextApiResponse } from "next";
const deathData = require("../../../../data/deaths.json");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const randomDeath: number = Math.floor(Math.random() * deathData.length);

    res.status(200).json(deathData[randomDeath]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
