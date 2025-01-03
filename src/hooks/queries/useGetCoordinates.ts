import { useQuery } from '@tanstack/react-query';
import { Location } from '../../models/Geometry';
import { useCustomAxios } from '../../security/hooks/queries/useCustomAxios';

const coordinatesQueryKey = 'address';
export const getCoordinatesQueryKey = (address?: string) => [
  coordinatesQueryKey,
  address,
];

export const useGetCoordinates = (address: string) => {
  const customAxios = useCustomAxios();

  return useQuery<Location>({
    queryKey: getCoordinatesQueryKey(address),
    queryFn: () =>
      customAxios
        .get(
          `direct?q=${encodeURIComponent(address)}&limit=1&appid=${
            import.meta.env.VITE_API_KEY
          }`,
        )
        .then(res => res.data[0] as Location),
    enabled: !!address,
  });
};
