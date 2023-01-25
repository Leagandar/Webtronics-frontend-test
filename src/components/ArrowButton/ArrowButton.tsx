import { ButtonHTMLAttributes } from 'react';
import { getClassString } from '../../utils';

import styles from './ArrowButton.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	iconType: 'left' | 'right';
}

const ArrowButton = ({ iconType, className, ...rest }: ButtonProps) => (
	<div className={styles.wrapper}>
		<button className={getClassString([styles.button, className])} {...rest}>
			{iconType === 'left' ? '<' : '>'}
		</button>
	</div>
);
export default ArrowButton;
