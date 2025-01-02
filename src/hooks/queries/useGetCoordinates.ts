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
          `/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${
            import.meta.env.VITE_GOOGLE_API_KEY
          }`,
        )
        .then(res => res.data.results[0].geometry.location as Location),
    enabled: !!address,
  });
};
