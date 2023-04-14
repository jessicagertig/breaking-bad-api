import { NextApiRequest, NextApiResponse } from "next";
const charactersData = require("../../../../characters.json");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(charactersData);
}
