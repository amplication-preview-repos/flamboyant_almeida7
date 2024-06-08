import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { MovieTitle } from "../movie/MovieTitle";
import { UserTitle } from "../user/UserTitle";

export const RecommendationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="movie.id" reference="Movie" label="Movie">
          <SelectInput optionText={MovieTitle} />
        </ReferenceInput>
        <DateTimeInput label="Timestamp" source="timestamp" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
