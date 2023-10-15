'use client';
import { useState } from 'react';
import { useGetPhotos } from '../hooks';
import { Container } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const DisplayGrid = () => {
	const [paginationModel, setPaginationModel] = useState({
		page: 1,
		pageSize: 5,
	});
	const { data, isLoading } = useGetPhotos({
		...paginationModel,
	});

	const columns = [
		{ field: 'id', headerName: 'ID', width: 70 },
		{ field: 'title', headerName: 'Title', flex: 1 },
		{ field: 'url', headerName: 'URL', flex: 1 },
		{ field: 'thumbnailUrl', headerName: 'Thumbnail URL', flex: 1 },
	];

	if (isLoading) return <div>Loading...</div>;
	return (
		<Container maxWidth='xl' sx={{ pt: 5, pb: 5 }}>
			<DataGrid
				rows={data || []}
				columns={columns}
				loading={isLoading}
				initialState={{
					pagination: { paginationModel },
				}}
				onPaginationModelChange={setPaginationModel}
				pageSizeOptions={[5, 10, 25]}
				paginationMode='server'
				rowCount={5000}
			/>
		</Container>
	);
};

export default DisplayGrid;
