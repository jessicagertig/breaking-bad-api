import { NextApiRequest, NextApiResponse } from "next";
const episodeData = require("../../../../data/episodes.json");

/**
 *
 * @param req /episodes?production=Breaking+Bad
 * @param res returns episodes by query production
 */

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { production } = req.query;
  try {
    if (production) {
      const filterEpisodeByProduction = episodeData.filter(
        (episode: any) => episode.production === production
      );
      if (filterEpisodeByProduction.length > 0) {
        res.status(200).json(filterEpisodeByProduction);
      } else {
        res
          .status(404)
          .json({ message: "No episode found with given production name" });
      }
    } else {
      res.status(200).json(episodeData);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
