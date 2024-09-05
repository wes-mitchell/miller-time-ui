import { useQuery } from 'react-query';

const baseUrl = 'https://localhost:44372/api/User/'

export const userUrls = {
    getAllUsers: baseUrl + 'GetAllUsers'
}

export const userKeys = {
    getAllUsers: () => [userUrls.getAllUsers, {}] as const,
}

export const useGetAllUsers = () => {
    const url = userUrls.getAllUsers;
    return useQuery<MillerTime.User[], Error>(url, async () => {
        const response = await fetch(url, {});
        return await response.json() || [] as MillerTime.User[]
    });
};