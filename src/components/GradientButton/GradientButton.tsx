import { ButtonHTMLAttributes } from 'react';
import { getClassString } from '../../utils';

import styles from './GradientButton.module.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const GradientButton = ({ children, className, ...rest }: ButtonProps) => (
	<button className={getClassString([styles.button, className])} {...rest}>
		{children}
	</button>
);
export default GradientButton;
