import { NextApiRequest, NextApiResponse } from "next";
const charactersData = require("../../../../data/characters.json");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { production } = req.query;
  const { name } = req.query;
  if (production) {
    const filteredByProductionCharacters = charactersData.filter(
      (character: any) => character.production === production
    );
    res.status(200).json(filteredByProductionCharacters);
  } else if (name) {
    const filterByCharacterName = charactersData.filter(
      (character: any) => character.name === name
    );
    res.status(200).json(filterByCharacterName);
  } else {
    res.status(200).json(charactersData);
  }
}
