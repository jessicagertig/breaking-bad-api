import { NextApiRequest, NextApiResponse } from "next";
const quoteData = require("../../../../data/quotes.json");

/**
 *
 * @param req /api/quotes?character=Jesse+Pinkman ==> fetches all quotes by specific character
 * @param req /api/quotes ====> fetches all quotes
 * @param res
 */

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { character } = req.query;
  try {
    if (character) {
      const filterQuoteByCharacter = quoteData.filter(
        (quote: any) => quote.character === character
      );
      if (filterQuoteByCharacter) {
        res.status(200).json(filterQuoteByCharacter);
      } else {
        res.status(400).json({ message: "Name of character not Found" });
      }
    } else {
      res.status(200).json(quoteData);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
