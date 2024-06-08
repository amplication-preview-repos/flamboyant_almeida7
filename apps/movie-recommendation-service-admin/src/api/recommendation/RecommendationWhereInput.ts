import { StringFilter } from "../../util/StringFilter";
import { MovieWhereUniqueInput } from "../movie/MovieWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RecommendationWhereInput = {
  id?: StringFilter;
  movie?: MovieWhereUniqueInput;
  timestamp?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
