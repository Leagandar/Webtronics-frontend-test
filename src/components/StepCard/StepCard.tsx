import { getClassString } from '../../utils';
import styles from './StepCard.module.css';

interface StepCardProps {
	index: string;
	title: string;
	description: string;
}

const StepCard = ({ index, title, description }: StepCardProps) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.card}>
				<h4 className={getClassString(['h4__clash', styles.step])}>
					Step {index}
				</h4>
				<h3 className={getClassString(['h3__clash', styles.title])}>{title}</h3>
				<p className={getClassString(['p1__inter', styles.description])}>
					{description}
				</p>
			</div>
		</div>
	);
};

export default StepCard;
