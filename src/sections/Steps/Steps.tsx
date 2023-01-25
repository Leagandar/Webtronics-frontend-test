import Image from 'next/image';
import { data, images } from '../../constants';
import styles from './Steps.module.css';
import { getStepGroups, getClassString } from '../../utils';

const Steps = () => {
	const groups = getStepGroups(data.steps);

	return (
		<section
			className={getClassString(['flex__center', styles.section])}
			id="steps"
		>
			<h2 className={getClassString(['h2__clash', styles.title])}>Steps</h2>
			{groups}
			<Image
				src={images.stepsLine}
				alt="steps line"
				className={styles.stepsLine}
			/>
		</section>
	);
};

export default Steps;
