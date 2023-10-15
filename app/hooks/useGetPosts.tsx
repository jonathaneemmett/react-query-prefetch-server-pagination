import { useQuery } from '@tanstack/react-query';
import getQueryClient from '../lib/getQueryClient';

interface IGetPosts {
	page: number;
	pageSize: number;
}

const useGetPosts = ({ page, pageSize }: IGetPosts) => {
	const queryClient = getQueryClient();

	async function getPosts({ page, pageSize }: IGetPosts) {
		const res = await fetch(
			`http://localhost:3001/posts?_page=${page}&_limit=${pageSize}`,
		);
		const json = await res.json();
		return json;
	}

	return useQuery({
		queryKey: ['posts', page, pageSize],
		queryFn: () => getPosts({ page, pageSize }),
		onSuccess: () => {
			// Prefetch next page
			queryClient.prefetchQuery({
				queryKey: ['posts', page + 1, pageSize],
				queryFn: () => getPosts({ page: page + 1, pageSize }),
			});
		},
		keepPreviousData: true,
		staleTime: 600_000,
	});
};

export default useGetPosts;
