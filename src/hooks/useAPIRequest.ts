// import { useAPIRequestInternals } from './useAPIRequestInternals'


// const emptyHeaders: HeadersInit = {};

// export default function useAPIRequest() {
//     const GetAuthToken = async () => {
//         return ''
//     };

//     return useAPIRequestInternals({
//         headers: emptyHeaders,
//         GetAuthToken: GetAuthToken,
//     })
// }

// export default {}
import useAPIRequestInternals, { RequestConfig } from './useAPIRequestInternals';
import { useCallback } from 'react';

export const useAPIRequest = (): {
    get: (url: string, body?: unknown, options?: any) => Promise<any>;
    post: (url: string, body?: unknown, options?: any) => Promise<any>;
} => {
    const { get, post } = useAPIRequestInternals({ headers: {} } as RequestConfig);

    return {
        get: useCallback(get, [get]),
        post: useCallback(post, [post]),
    };
};

