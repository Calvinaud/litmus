/* eslint-disable */
// This code is autogenerated using @harnessio/oats-cli.
// Please do not modify this code directly.
import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import type { Project } from '../schemas/Project';
import { fetcher, FetcherOptions } from 'services/fetcher';

export interface ListProjectsQueryQueryParams {
  sortField?: 'name' | 'time';
  sortAscending?: boolean;
  createdByMe?: boolean;
  projectName?: string;
  page?: number;
  limit?: number;
}

export type ListProjectsOkResponse = {
  data?: {
    projects?: Project[];
    totalNumberOfProjects?: number;
  };
};

export type ListProjectsErrorResponse = unknown;

export interface ListProjectsProps extends Omit<FetcherOptions<ListProjectsQueryQueryParams, unknown>, 'url'> {
  queryParams: ListProjectsQueryQueryParams;
}

export function listProjects(props: ListProjectsProps): Promise<ListProjectsOkResponse> {
  return fetcher<ListProjectsOkResponse, ListProjectsQueryQueryParams, unknown>({
    url: `/auth/list_projects`,
    method: 'GET',
    ...props
  });
}

/**
 * This API is used to get project details of logged in user
 *
 */
export function useListProjectsQuery(
  props: ListProjectsProps,
  options?: Omit<UseQueryOptions<ListProjectsOkResponse, ListProjectsErrorResponse>, 'queryKey' | 'queryFn'>
) {
  return useQuery<ListProjectsOkResponse, ListProjectsErrorResponse>(
    ['listProjects', props.queryParams],
    ({ signal }) => listProjects({ ...props, signal }),
    options
  );
}
