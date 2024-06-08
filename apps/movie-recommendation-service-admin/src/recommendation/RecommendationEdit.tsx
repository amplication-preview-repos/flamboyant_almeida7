import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";
import { MovieTitle } from "../movie/MovieTitle";
import { UserTitle } from "../user/UserTitle";

export const RecommendationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="movie.id" reference="Movie" label="Movie">
          <SelectInput optionText={MovieTitle} />
        </ReferenceInput>
        <DateTimeInput label="Timestamp" source="timestamp" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
