import { useState } from "react";

export function useFetching(callBack) {
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();

  async function fetching(...args) {
    try {
      setIsLoading(true);
      await callBack(...args);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return [fetching, isLoading, error];
}
