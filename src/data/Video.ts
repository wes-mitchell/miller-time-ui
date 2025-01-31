import { useQuery } from 'react-query';

const baseUrl = `${process.env.REACT_APP_API_BASE_URL}/Video/`;

export const videoUrls = {
  getAllVideos: baseUrl + 'GetAllVideos',
  addVideo: baseUrl + 'AddVideo',
};

export const videoKeys = {
  getAllVideos: () => [videoUrls.getAllVideos, {}] as const,
  addVideo: (Video: MillerTime.Video) =>
    [videoUrls.addVideo, { Video }] as const,
};

export const useGetAllVideos = () => {
  const url = videoUrls.getAllVideos;
  return useQuery<MillerTime.Video[], Error>(
    videoUrls.getAllVideos,
    async () => {
      const response = await fetch(url, {});
      if (!response.ok) {
        throw new Error('Error fetching data');
      }
      return (await response.json()) || ([] as MillerTime.Video[]);
    }
  );
};
