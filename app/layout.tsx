import {
	CssBaseline,
	AppBar,
	Toolbar,
	Typography,
	Box,
	Container,
} from '@mui/material';
import Link from 'next/link';
import './globals.css';
import Providers from './providers/providers';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body>
				<Providers>
					<CssBaseline />
					<AppBar component='nav'>
						<Toolbar>
							<Typography
								variant='h6'
								component='div'
								sx={{
									flexGrow: 1,
									display: { xs: 'none', sm: 'block' },
								}}>
								Pagination with React Query
							</Typography>
							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
									gap: '0.5rem',
								}}>
								<Link
									href='/'
									style={{
										color: 'white',
										textDecoration: 'none',
									}}>
									Posts
								</Link>
								<Link
									href='/photos'
									style={{
										color: 'white',
										textDecoration: 'none',
									}}>
									Photos
								</Link>
							</Box>
						</Toolbar>
					</AppBar>
					<Container maxWidth='xl' sx={{ pt: 5, pb: 5 }}>
						{children}
					</Container>
				</Providers>
			</body>
		</html>
	);
}
