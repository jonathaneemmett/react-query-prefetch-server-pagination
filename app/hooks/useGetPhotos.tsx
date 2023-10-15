import React from 'react';
import { useQuery } from '@tanstack/react-query';
import getQueryClient from '../lib/getQueryClient';
const queryClient = getQueryClient();

interface IGetPhotos {
	page: number;
	pageSize: number;
}

const useGetPhotos = ({ page, pageSize }: IGetPhotos) => {
	async function getPhotos({ page, pageSize }: IGetPhotos) {
		const res = await fetch(
			`http://localhost:3001/photos?_page=${page}&_limit=${pageSize}`,
		);
		const json = await res.json();
		return json;
	}

	return useQuery({
		queryKey: ['photos', page, pageSize],
		queryFn: () => getPhotos({ page, pageSize }),
		onSuccess: () => {
			// prefetch next page
			queryClient.prefetchQuery({
				queryKey: ['photos', page + 1, pageSize],
				queryFn: () => getPhotos({ page: page + 1, pageSize }),
			});
		},
		keepPreviousData: true,
		staleTime: 600_000,
	});
};

export default useGetPhotos;
