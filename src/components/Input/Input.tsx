import type { InputHTMLAttributes } from 'react';
import { Path, UseFormRegister, type FieldValues } from 'react-hook-form';
import { getClassString } from '../../utils';
import styles from './Input.module.css';

interface InputProps<T extends FieldValues>
	extends InputHTMLAttributes<HTMLInputElement> {
	invalid?: boolean;
	className?: string | undefined;
	label: Path<T>;
	register: UseFormRegister<T>;
}

const Input = <T extends FieldValues>({
	invalid,
	className,
	children,
	label,
	register,
	...rest
}: InputProps<T>) => {
	return (
		<label
			className={getClassString([
				styles.input,
				className,
				invalid ? styles.wrapperError : '',
			])}
		>
			<input
				className={getClassString([
					'p1__inter',
					invalid ? styles.inputError : '',
				])}
				{...register(label)}
				{...rest}
			/>
			{children}
		</label>
	);
};

export default Input;
