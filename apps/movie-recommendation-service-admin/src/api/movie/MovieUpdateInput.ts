import { RecommendationUpdateManyWithoutMoviesInput } from "./RecommendationUpdateManyWithoutMoviesInput";

export type MovieUpdateInput = {
  genre?: string | null;
  name?: string | null;
  rating?: number | null;
  recommendations?: RecommendationUpdateManyWithoutMoviesInput;
  releaseDate?: Date | null;
};
