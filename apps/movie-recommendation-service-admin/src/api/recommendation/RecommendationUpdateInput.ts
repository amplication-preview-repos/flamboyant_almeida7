import { MovieWhereUniqueInput } from "../movie/MovieWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RecommendationUpdateInput = {
  movie?: MovieWhereUniqueInput | null;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
