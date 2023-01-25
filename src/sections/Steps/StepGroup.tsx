import Image from 'next/image';
import { images } from '../../constants';
import styles from './Steps.module.css';

interface StepGroupProps {
	leftStep: JSX.Element;
	rightStep: JSX.Element | null;
}

const StepGroup = ({ leftStep, rightStep }: StepGroupProps) => {
	return (
		<div className={styles.groupWrapper}>
			<div className={styles.leftStep}>
				{leftStep}
				<Image
					src={images.leftFrame}
					alt="step frame"
					className={styles.leftFrame}
				/>
			</div>
			{rightStep && (
				<div className={styles.rightStep}>
					<Image
						src={images.rightFrame}
						alt="step frame"
						className={styles.rightFrame}
					/>
					{rightStep}
				</div>
			)}
		</div>
	);
};

export default StepGroup;
