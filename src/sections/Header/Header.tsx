import { getClassString } from '../../utils';
import GradientButton from '../../components/GradientButton/GradientButton';
import styles from './Header.module.css';
import { Navbar } from '../../components';
import Image from 'next/image';
import { images } from '../../constants';

const Header = () => {
	const startHandler = () => {
		document.getElementById('getInTouch')?.scrollIntoView({
			block: 'center',
			behavior: 'smooth',
			inline: 'start',
		});
	};

	return (
		<header id="home" className={styles.header}>
			<Navbar />
			<Image
				className={styles.background}
				src={images.headerBackground}
				alt="header background"
			/>
			<div className={styles.backgroundOverlay} />
			<div className={styles.headerContent}>
				<div className={styles.headerLine}>
					<h1 className="h1__clash">Front-End </h1>
					<p className={getClassString(['p1__inter', styles.description])}>
						Make UIs and websites beautiful, functional, and fast. Cover all the
						topics that expensive bootcamps teach (and more).
					</p>
				</div>
				<div className={styles.headerLine}>
					<GradientButton className={styles.button} onClick={startHandler}>
						Start my career change
					</GradientButton>
					<h1 className="h1__clash">Developer</h1>
				</div>
				<div className={styles.lastLine}>
					<h3 className="h3__clash">Courses</h3>
				</div>
			</div>

			<div className={styles.smallScreenContent}>
				<h2 className="h2__clash">Front-End Developer Courses</h2>
				<p className={getClassString(['p1__inter', styles.description])}>
					Make UIs and websites beautiful, functional, and fast. Cover all the
					topics that expensive bootcamps teach (and more).
				</p>
				<GradientButton className={styles.button} onClick={startHandler}>
					Start my career change
				</GradientButton>
			</div>
		</header>
	);
};

export default Header;
