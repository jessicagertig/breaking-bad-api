type Appearance = {
  breaking_bad: number[];
  better_call_saul: number[];
  el_camino: number[];
}

export interface Character {
  character_id: number;
  name: string;
  birthday: string;
  occupations: string[];
  images: string[];
  full_name: string;
  aliases: string[];
  status: string;
  appearance: Appearance;
  portrayed_by: string;
  productions: string[];
}

export interface Death {
  death_id: number;
  character: string;
  image: string;
  cause: string;
  details: string;
  responsible: string[];
  connected: string[];
  last_words: string;
  episode: number;
  production: string;
}

export interface Episode {
  episode_id: number;
  production: string;
  episode: number;
  title: string;
  image: string;
  synopsis: string;
  written_by: string;
  directed_by: string;
  air_date: string;
  characters: string[];
}

export interface Quote {
  quote_id: number;
  quote: string;
  character: string;
  production: string;
  episode: number;
}

export interface RefetchHandle {
  refetchQuery: () => void;
}