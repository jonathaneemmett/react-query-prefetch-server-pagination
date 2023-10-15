'use client';
import { useState } from 'react';
import { useGetPosts } from '../hooks';
import {
	Container,
	Pagination,
	List,
	ListItem,
	Typography,
} from '@mui/material';

const Posts = () => {
	const [paginationModel, setPaginationModel] = useState({
		page: 1,
		pageSize: 10,
	});
	const { data } = useGetPosts({
		...paginationModel,
	});

	return (
		<Container maxWidth='xl' sx={{ pt: 5, pb: 5 }}>
			<Typography variant='h5'>Posts</Typography>
			<List>
				{data?.map((post: any) => (
					<ListItem key={post.id}>{post.title}</ListItem>
				))}
			</List>
			<Pagination
				count={100 / paginationModel.pageSize}
				page={paginationModel.page}
				onChange={(e, page) =>
					setPaginationModel({ ...paginationModel, page })
				}
				variant='outlined'
				shape='rounded'
			/>
		</Container>
	);
};

export default Posts;
