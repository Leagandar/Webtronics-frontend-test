import { TechnologyCard } from '../../components';
import { data } from '../../constants';
import { getClassString } from '../../utils';
import styles from './Technologies.module.css';

const Technologies = () => {
	const technologyCards = data.technologies.map(({ id, image, title }) => (
		<TechnologyCard key={id} image={image} title={title} />
	));

	return (
		<section
			className={getClassString(['flex__center', styles.section])}
			id="programs"
		>
			<h2 className={getClassString(['h2__clash', styles.title])}>
				Programming technologies
			</h2>
			<p className={getClassString(['p1__inter', styles.description])}>
				By the end, you’ll have the portfolio and interview skills you need to
				start your new career.
			</p>
			<div className={styles.technologiesContainer}>{technologyCards}</div>
		</section>
	);
};

export default Technologies;
