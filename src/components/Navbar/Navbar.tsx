import Image from 'next/image';
import styles from './Navbar.module.css';
import { data, images } from '../../constants';
import Link from 'next/link';
import { useState } from 'react';
import { getClassString } from '../../utils';

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	const toggleNavbarHandler = () => {
		setToggleMenu((prev) => !prev);
	};

	const toggleOffMenu = () => {
		setToggleMenu(false);
	};

	return (
		<nav className={styles.navbar}>
			<div className={styles.navbarLogo}>
				<Image src={images.logo} alt="logo" />
			</div>
			<ul className={styles.navbarLinks}>
				{data.headerLinks.map(({ title, id }) => (
					<li key={id} className="p1__inter">
						<Link href={id}>{title}</Link>
					</li>
				))}
			</ul>

			<div className={styles.smallScreenContent}>
				<div onClick={toggleNavbarHandler} className={styles.burger}>
					<span></span>
					<span></span>
					<span></span>
				</div>
				{toggleMenu && (
					<div
						className={getClassString([
							styles.smallScreenContentOverlay,
							'flex__center',
						])}
						onClick={toggleOffMenu}
					>
						<ul className={styles.smallScreenLinks}>
							{data.headerLinks.map(({ title, id }) => (
								<li key={id} className="p1__inter">
									<Link href={id} onClick={toggleOffMenu}>
										{title}
									</Link>
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
