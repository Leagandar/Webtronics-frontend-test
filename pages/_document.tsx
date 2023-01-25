import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link
					href="https://fonts.cdnfonts.com/css/clash-display"
					rel="stylesheet"
				/>
			</Head>
			<body>
				<Main />
				<div id="overlays"></div>
				<NextScript />
			</body>
		</Html>
	);
}
