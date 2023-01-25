import { useState } from 'react';
import { getClassString } from '../../utils';
import styles from './QuestionCard.module.css';

interface QuestionCardProps {
	title: string;
	description: string;
}

const QuestionCard = ({ title, description }: QuestionCardProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleCardHandler = () => {
		setIsOpen((prevState) => !prevState);
	};

	return (
		<div className={styles.wrapper}>
			<details className={styles.card}>
				<summary className={styles.cardHeader} onClick={toggleCardHandler}>
					<h4 className="h4__clash">{title}</h4>
					<span className="h4__clash">{isOpen ? '-' : '+'}</span>
				</summary>
				<p className={getClassString(['p1__inter', styles.description])}>
					{description}
				</p>
			</details>
		</div>
	);
};

export default QuestionCard;
