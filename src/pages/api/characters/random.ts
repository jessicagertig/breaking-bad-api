import { NextApiRequest, NextApiResponse } from "next";
const characterData = require("../../../../data/characters.json");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const randomCharacter: number = Math.floor(
      Math.random() * characterData.length
    );

    res.status(200).json(characterData[randomCharacter]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
