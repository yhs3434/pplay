import {useQuery, UseQueryOptions} from '@tanstack/react-query';
import type {TParamsProperties, AxiosOptionsType} from '@/utils/api';
import {getApiCallerFromPath} from '@/utils/apis/index';

async function customQueryFn<T extends TParamsProperties, V>(
  path: string,
  params: T,
  options?: UseQueryOptions<V> & AxiosOptionsType,
): Promise<V> {
  const apiCall = getApiCallerFromPath(path);
  if (!apiCall) {
    return {} as V;
  }

  let status, data;
  try {
    const response = await apiCall(params, options);
    status = response?.status;
    data = await response?.json?.();
  } catch (e) {
    throw e;
  }

  if (status !== 200) {
    throw new Error('no 200');
  }

  return data as V;
}

export default function useCustomQuery<T extends TParamsProperties, V>(
  path: string,
  params: T,
  options?: UseQueryOptions<V> & AxiosOptionsType,
) {
  return useQuery<V>({
    queryKey: [path, params.query, params.body],
    queryFn: () => customQueryFn<T, V>(path, params, options),
    ...(options ?? {}),
  });
}
