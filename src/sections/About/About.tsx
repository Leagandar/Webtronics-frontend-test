import Image from 'next/image';
import { MentorCard } from '../../components';
import { data, images } from '../../constants';
import { getClassString } from '../../utils';
import styles from './About.module.css';

interface AboutProps {}

const About = ({}: AboutProps) => {
	const mentorCards = data.mentors.data.map(
		({ avatar, description, title, id }, index) => (
			<MentorCard
				avatar={avatar}
				description={description}
				title={title}
				className={index === 1 ? styles.mentorCard : ''}
				key={id}
			/>
		)
	);

	const headerClassList = getClassString([
		'h2__clash',
		'flex__center',
		styles.header,
	]);

	const mentorsContainerClassList = getClassString([
		'h3__clash',
		styles.mentorsContainerTitle,
	]);

	return (
		<section className={styles.section} id="about">
			<h2 className={headerClassList}>About Us</h2>
			<div className={getClassString(['flex__center', styles.content])}>
				<div className={styles.mentorsContainer}>
					<h3 className={mentorsContainerClassList}>Mentors</h3>
					<Image
						src={images.mentorsTree}
						alt="mentors tree"
						className={styles.mentorsTree}
					/>
					<div className={styles.mentorsCardsContainer}>{mentorCards}</div>
				</div>
				<div>
					<p className={getClassString(['p1__inter', styles.description])}>
						{data.mentors.description}
					</p>
					<Image
						src={images.frontend}
						alt="frontend banner"
						className={styles.frontImage}
					/>
				</div>
			</div>
		</section>
	);
};

export default About;
