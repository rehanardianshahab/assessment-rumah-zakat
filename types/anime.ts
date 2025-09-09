export interface Anime {
  mal_id: number;
  title: string;
  title_english?: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
  type: string;
  episodes: number;
  status: string;
  score: number;
  year: number;
  synopsis: string;
}

export interface AnimeOmdb {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}