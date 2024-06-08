import { Recommendation } from "../recommendation/Recommendation";

export type Movie = {
  createdAt: Date;
  genre: string | null;
  id: string;
  name: string | null;
  rating: number | null;
  recommendations?: Array<Recommendation>;
  releaseDate: Date | null;
  updatedAt: Date;
};
