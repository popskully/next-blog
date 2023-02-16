import useSWR from "swr";

const baseUrl = "http://localhost:3000/";
const response = async (...args: [RequestInfo, RequestInit?]): Promise<any> => {
  const res = await fetch(...args);
  return res.json();
};

export default function fetcher(endpoint: any) {
  const { data, error } = useSWR(`${baseUrl}${endpoint}`, response);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}

// import useSWR, { SWRResponse } from "swr";

// const baseUrl = "http://localhost:3000/";

// type FetcherResponse<T> = SWRResponse<T, any>;

// const response = (...args: any): Promise<any> => fetch(...args).then((res) => res.json());

// export default function fetcher<T>(endpoint: string): FetcherResponse<T> {
//   const { data, error } = useSWR<T>(`${baseUrl}${endpoint}`, response);

//   return {
//     data,
//     isLoading: !error && !data,
//     isError: error,
//   };
// }
