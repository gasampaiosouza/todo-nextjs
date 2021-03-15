import useSWR from 'swr';

interface IUseFetch<T> {
  data?: T;
  error?: string;
}

export function useFetch<T>(url: string, revalidateOnFocus: boolean = false) {
  const { data, error }: IUseFetch<T> = useSWR(
    url,
    async (url) => {
      const response = await fetch(url);
      const data = await response.json();

      return data;
    },
    { revalidateOnFocus },
  );

  return { data, error };
}
