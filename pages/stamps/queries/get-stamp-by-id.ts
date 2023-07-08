import { graphqlClient } from "@/shared/graphql/graphql-client";
import { IPaginationOptions } from "@/shared/interfaces/global/pagination-options";
import { IStamp } from "@/shared/interfaces/stamps/stamp.in";
import { QueryResult, gql, useQuery } from "@apollo/client";

export const GET_STAMPS_BY_ID_QUERY = gql`
  query getById($id: String!) {
    stamp(id: $id) {
      id
      name
    }
  }
`;

interface IGetAllStampsResult {
  stamp: IStamp;
}

export function getStampById(
  id: string
): QueryResult<IGetAllStampsResult, { id: typeof id }> {
  return useQuery(GET_STAMPS_BY_ID_QUERY, {
    client: graphqlClient,
    variables: {
      id,
    },
  });
}
