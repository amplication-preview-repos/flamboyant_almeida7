import { SortOrder } from "../../util/SortOrder";

export type RecommendationOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  movieId?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
