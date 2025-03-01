import Head from 'next/head';
import {
	About,
	Header,
	Steps,
	Technologies,
	FAQ,
	Review,
	Gallery,
	Contacts,
	Footer,
} from '../src/sections';

export default function Home() {
	return (
		<>
			<Head>
				<title>Webtronics</title>
				<meta
					name="description"
					content="Start career change with webtronics frontend courses"
				/>
				<meta
					name="keywords"
					content="frontend, courses, online, IT, engineering, development, developer"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="layout">
				<Header />
				<About />
				<Technologies />
				<Steps />
				<FAQ />
				<Review />
				<Gallery />
				<Contacts />
			</main>
			<Footer />
		</>
	);
}
