import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { RecommendationListRelationFilter } from "../recommendation/RecommendationListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type MovieWhereInput = {
  genre?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  rating?: FloatNullableFilter;
  recommendations?: RecommendationListRelationFilter;
  releaseDate?: DateTimeNullableFilter;
};
