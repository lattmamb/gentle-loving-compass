
import { useQuery, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import { useLoading } from "@/context/LoadingContext";
import { useEffect } from "react";

export function useLoadingQuery<TData, TError>(
  options: UseQueryOptions<TData, TError> & { 
    showGlobalLoading?: boolean;
    loadingMessage?: string;
  }
): UseQueryResult<TData, TError> {
  const { showGlobalLoading = false, loadingMessage, ...queryOptions } = options;
  const { startLoading, stopLoading, setLoadingMessage } = useLoading();
  
  const query = useQuery<TData, TError>({
    ...queryOptions,
  });
  
  useEffect(() => {
    if (showGlobalLoading) {
      if (query.isLoading || query.isFetching) {
        startLoading();
        if (loadingMessage) {
          setLoadingMessage(loadingMessage);
        }
      } else {
        stopLoading();
      }
    }
    // We only want to depend on the loading states, not the functions
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query.isLoading, query.isFetching, showGlobalLoading, loadingMessage]);
  
  return query;
}
