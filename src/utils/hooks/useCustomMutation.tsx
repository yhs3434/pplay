import {
  MutationFunction,
  useMutation,
  UseMutationOptions,
} from '@tanstack/react-query';
import {RetryValue} from '@tanstack/query-core/build/lib/retryer';
import type {TParamsProperties} from '@/utils/api';
import {getApiCallerFromPath} from '@/utils/apis';

const mutationFunction =
  <T extends TParamsProperties, V>(
    path: string,
    options?: UseMutationOptions,
  ): MutationFunction<V, T> =>
  async (params: T): Promise<V> => {
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
  };

const useCustomMutation = <
  TParams extends TParamsProperties,
  TError = null,
  TData = null,
>(
  path: string,
  options?: {
    onError?: (
      err: unknown,
      params: unknown,
      context?: unknown,
    ) => Promise<unknown> | void;
    onMutate?: (params: TParams) => unknown;
    onSettled?: (
      data: TData | undefined,
      error: unknown,
      params: TParams,
      context?: unknown,
    ) => unknown;
    onSuccess?: (
      data: TData,
      params: TParams,
      context?: unknown,
    ) => Promise<unknown> | void;
    retry?: RetryValue<unknown>;
    retryDelay?: (retryAttempt: number, error: unknown) => number | number;
    useErrorBoundary?: (error: unknown) => boolean;
    meta?: Record<string, unknown>;
  },
) => {
  return useMutation<TData, TError, TParams>({
    mutationFn: mutationFunction<TParams, TData>(path),
    onError: options?.onError,
    onMutate: options?.onMutate,
    onSettled: options?.onSettled,
    onSuccess: options?.onSuccess,
    retry: options?.retry,
    retryDelay: options?.retryDelay,
    useErrorBoundary: options?.useErrorBoundary,
    meta: options?.meta,
  });
};

export default useCustomMutation;
