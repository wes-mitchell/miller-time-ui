import { useQuery } from 'react-query';

//TODO: Update this to use env variable
//const baseUrl = 'https://localhost:44372/api/Video/'
const baseUrl = 'https://miller-time-api.azurewebsites.net/api/Video/'

export const videoUrls = {
    getAllVideos: baseUrl + 'GetAllVideos',
    addVideo: baseUrl + 'AddVideo',
}

export const videoKeys = {
    getAllVideos: () => [videoUrls.getAllVideos, {}] as const,
    addVideo: (Video: MillerTime.Video) => [videoUrls.addVideo, { Video }] as const,
}

export const useGetAllVideos = () => {
    const url = videoUrls.getAllVideos;
    return useQuery<MillerTime.Video[], Error>(videoUrls.getAllVideos, async () => {
        const response = await fetch(url, {});
        return await response.json() || [] as MillerTime.Video[]
    })
};