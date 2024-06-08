import { ScrapeSourceWhereInput } from "./ScrapeSourceWhereInput";
import { ScrapeSourceOrderByInput } from "./ScrapeSourceOrderByInput";

export type ScrapeSourceFindManyArgs = {
  where?: ScrapeSourceWhereInput;
  orderBy?: Array<ScrapeSourceOrderByInput>;
  skip?: number;
  take?: number;
};
