import Head from 'next/head';
import { blue } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Layout from "../src/components/layout";


export default function MyApp({ Component, pageProps }) {
	const theme = createTheme({
		palette: {
			primary: blue,
		},
	});
	return (
		<ThemeProvider theme={theme}>
			<Head>
				<title>ÚFAL Translator</title>
				<meta name="theme-color" content="#2196F3" />
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
}
