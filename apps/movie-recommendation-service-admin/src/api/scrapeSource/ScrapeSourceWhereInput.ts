import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ScrapeSourceWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  url?: StringNullableFilter;
};
