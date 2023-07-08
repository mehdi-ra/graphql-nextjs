import { graphqlClient } from "@/shared/graphql/graphql-client";
import { IPaginationOptions } from "@/shared/interfaces/global/pagination-options";
import { IStamp } from "@/shared/interfaces/stamps/stamp.in";
import { QueryResult, gql, useQuery } from "@apollo/client";

export const GET_ALL_STAMPS_QUERY = gql`
  query getAllStamps($options: PaginationInput) {
    stamps(pagination: $options) {
      id
      name
    }
  }
`;

interface IGetAllStampsResult {
  stamps: IStamp[];
}

export function getAllStamps(
  options?: Readonly<IPaginationOptions>
): QueryResult<IGetAllStampsResult, { options: typeof options }> {
  return useQuery(GET_ALL_STAMPS_QUERY, {
    client: graphqlClient,
    variables: {
      options,
    },
  });
}
