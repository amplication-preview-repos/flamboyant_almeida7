import { SortOrder } from "../../util/SortOrder";

export type MovieOrderByInput = {
  createdAt?: SortOrder;
  genre?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  rating?: SortOrder;
  releaseDate?: SortOrder;
  updatedAt?: SortOrder;
};
