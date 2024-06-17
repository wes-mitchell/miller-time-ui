// export interface RequestConfig {
//     headers: HeadersInit;
//     getAuthToken?: () => Promise<string>;
//     baseUrl?: string;
// }

// export default function useAPIRequestInternals(config: {
//     headers: HeadersInit;
//     getAuthToken?: () => Promise<string>;
//     baseUrl?: string;
// }): {
//     get: (url: string, body?: unknown, options?: {
//         successMessage?: string;
//         errorMessage?: string;
//     }) => Promise<any>;
//     post: (url: string, body?: unknown, options?: {
//         successMessage?: string;
//         errorMessage?: string;
//     }) => Promise<any>;
// } {
//     // Implementation goes here
// }

// export default {}

import { useQuery, useMutation, UseQueryResult } from 'react-query';

export interface RequestConfig {
    headers: HeadersInit;
    getAuthToken?: () => Promise<string>;
    baseUrl?: string;
}

const useAPIRequestInternals = (config: RequestConfig) => {
    const { headers, getAuthToken, baseUrl } = config;

    const get = async (url: string, body?: unknown, options?: any) => {
        const authToken = getAuthToken ? await getAuthToken() : '';
        const response = await fetch(baseUrl ? baseUrl + url : url, {
            method: 'GET',
            headers: {
                ...headers,
                Authorization: `Bearer ${authToken}`,
            },
            body: JSON.stringify(body),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    };

    const post = async (url: string, body?: unknown, options?: any) => {
        const authToken = getAuthToken ? await getAuthToken() : '';
        const response = await fetch(baseUrl ? baseUrl + url : url, {
            method: 'POST',
            headers: {
                ...headers,
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authToken}`,
            },
            body: JSON.stringify(body),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    };

    return { get, post };
}

export default useAPIRequestInternals;
