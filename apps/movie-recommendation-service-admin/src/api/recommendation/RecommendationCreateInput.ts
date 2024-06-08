import { MovieWhereUniqueInput } from "../movie/MovieWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RecommendationCreateInput = {
  movie?: MovieWhereUniqueInput | null;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
