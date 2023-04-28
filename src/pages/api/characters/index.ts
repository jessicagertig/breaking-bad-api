import { NextApiRequest, NextApiResponse } from "next";
const charactersData = require("../../../../data/characters.json");

/**
 *
 * @param req /characters?productions=Breaking+Bad || /characters?productions=Better+Call+Saul
 * @param res characters by production
 *
 * @param req /characters?name=Walter+White
 * @param res character by name
 */

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { productions } = req.query;
  const { name } = req.query;

  try {
    if (!productions && !name) {
      res.status(200).json(charactersData);
      return;
    }

    if (productions) {
      const filteredByProductionCharacters = charactersData.filter(
        (character: any) => character.productions.includes(productions)
      );
      if (filteredByProductionCharacters.length > 0) {
        res.status(200).json(filteredByProductionCharacters);
      } else {
        res.status(404).json({
          message:
            "No character found for given production. Check spelling or series name.",
        });
      }
    }
    if (name) {
      const filterByCharacterName = charactersData.filter(
        (character: any) => character.name === name
      );
      if (filterByCharacterName.length > 0) {
        res.status(200).json(filterByCharacterName);
      } else {
        res.status(404).json({
          message: "No character found, check spelling or character name",
        });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
