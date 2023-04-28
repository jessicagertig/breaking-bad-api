import { NextApiRequest, NextApiResponse } from "next";
const quoteData = require("../../../../data/quotes.json");
/**
 *
 * @param req /quotes/random?character=Jesse+Pinkman
 * @param res gets a random quote query on character
 * @param req /quotes/random
 * @param res gets random quote from quote data file
 * @param req /quotes/random?production=Breaking+Bad
 * @param res gets random quote by query on production
 */

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { character } = req.query;
  const { production } = req.query;
  try {
    const randomQuoteIndex: number = Math.floor(
      Math.random() * quoteData.length
    );
    if (character) {
      const randomQuoteByCharacter = quoteData.filter(
        (quote: any) => quote.character === character
      );
      const randomCharacterQuoteIndex: number = Math.floor(
        Math.random() * randomQuoteByCharacter.length
      );
      res.status(200).json(randomQuoteByCharacter[randomCharacterQuoteIndex]);
    } else if (production) {
      const randomQuoteByProduction = quoteData.filter(
        (quote: any) => quote.production === production
      );
      const randomQuoteProductionIndex: number = Math.floor(
        Math.random() * randomQuoteByProduction.length
      );
      res.status(200).json(randomQuoteByProduction[randomQuoteProductionIndex]);
    } else {
      res.status(200).json(quoteData[randomQuoteIndex]);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
