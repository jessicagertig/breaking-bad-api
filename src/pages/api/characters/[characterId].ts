const characters = require("../../../../data/characters.json");
import { NextApiRequest, NextApiResponse } from "next";

type Character = {
  character_id: number;
  name: string;
  birthday: string;
  occupations: string[];
  images: string[];
  full_name: string;
  aliases: string[];
  status: string;
  appearance: {
    breaking_bad: number[];
    better_call_saul: number[];
    el_camino: number[];
  };
  portrayed_by: string;
  production: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { characterId } = req.query;
  const character = characters.find(
    (char: Character) => char.character_id === Number(characterId)
  );

  if (!character) {
    res.status(404).json({ message: "Character not found" });
    return;
  }

  res.status(200).json(character);
}
