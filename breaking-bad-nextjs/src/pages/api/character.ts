import { NextApiRequest, NextApiResponse } from "next";
const charactersData = require("../../../data/characters.json");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(charactersData);
}
