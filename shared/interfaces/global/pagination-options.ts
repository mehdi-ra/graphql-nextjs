import { OperationVariables } from "@apollo/client";

export interface IPaginationOptions extends OperationVariables {
  page?: number;
  limit?: number;

  search?: string;
  filters?: string[];
  sort?: string;
}
