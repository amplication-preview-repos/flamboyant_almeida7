import { RecommendationCreateNestedManyWithoutMoviesInput } from "./RecommendationCreateNestedManyWithoutMoviesInput";

export type MovieCreateInput = {
  genre?: string | null;
  name?: string | null;
  rating?: number | null;
  recommendations?: RecommendationCreateNestedManyWithoutMoviesInput;
  releaseDate?: Date | null;
};
