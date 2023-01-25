import { Roboto } from '@next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { data, images } from '../../constants';
import { getClassString } from '../../utils';
import styles from './Footer.module.css';

const roboto = Roboto({
	weight: ['400', '700'],
	subsets: ['latin'],
});

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.info}>
				<Image src={images.logo} alt="footer logo" />
				<p className="p1__inter">
					Wisconsin Ave, Suite 700 Chevy Chase, Maryland 20815
				</p>
			</div>
			<div className={styles.company}>
				<h4 className={getClassString([roboto.className, styles.title])}>
					Company
				</h4>
				<ul className={styles.links}>
					{data.footerLinks.map(({ id, title }) => (
						<li key={id} className="p1__inter">
							<Link href={id}>{title}</Link>
						</li>
					))}
				</ul>
			</div>
			<div className={styles.socials}>
				<h4 className={getClassString([roboto.className, styles.title])}>
					Social media
				</h4>
				<ul>
					{data.socials.map(({ id, title, icon, link }) => (
						<li key={id}>
							<Link href={link}>
								<Image src={icon} alt={title} />
							</Link>
						</li>
					))}
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
