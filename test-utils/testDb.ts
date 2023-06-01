import characterData from '../data/characters.json';
import episodeData from '../data/episodes.json';
import deathData from '../data/deaths.json';
import quoteData from '../data/quotes.json';

import { Character, Episode, Death, Quote } from '@/types';

const characters: Character[] = [...characterData];
const episodes: Episode[] = [...episodeData];
const deaths: Death[] = [...deathData];
const quotes: Quote[] = [...quoteData]

const character: Character = characters[0]
const episode: Episode = episodes[0]
const death: Death = deaths[0]
const quote: Quote = quotes[0]

type Kind = Character | Episode | Death | Quote
type Kinds = Character[] | Episode[] | Death[] | Quote[]

async function getRandom(kind: string): Promise<Kind | undefined> {
  switch (kind) {
    case 'character':
      return character;
    case 'episode':
      return episode;
    case 'death':
      return death;
    case 'quote':
      return quote;
    default:
      break;
  }
}

async function getAll(kind: string): Promise<Kinds | undefined> {
  switch (kind) {
    case 'character':
      return characters;
    case 'episode':
      return episodes;
    case 'death':
      return deaths;
    case 'quote':
      return quotes;
    default:
      break;
  }
}

export { getRandom, getAll }