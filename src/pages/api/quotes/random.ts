import { NextApiRequest, NextApiResponse } from "next";
const quoteData = require("../../../../data/quotes.json");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const randomQuoteIndex: number = Math.floor(
      Math.random() * quoteData.length
    );

    res.status(200).json(quoteData[randomQuoteIndex]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
