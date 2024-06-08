import { Movie } from "../movie/Movie";
import { User } from "../user/User";

export type Recommendation = {
  createdAt: Date;
  id: string;
  movie?: Movie | null;
  timestamp: Date | null;
  updatedAt: Date;
  user?: User | null;
};
