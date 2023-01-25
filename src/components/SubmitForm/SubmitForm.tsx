import GradientButton from '../GradientButton/GradientButton';
import Input from '../Input/Input';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './SubmitForm.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import { getClassString, submitFormSchema } from '../../utils';
import { User } from '../../types';
import { LoadingState } from '../../sections/Contacts/Contacts';
import { useEffect } from 'react';

interface SubmitFormProps {
	onSubmitHandler: SubmitHandler<User>;
	loadingState: LoadingState;
	error: string;
}

interface InputData {
	id: string;
	placeholder: string;
	label: keyof User;
	invalid: boolean;
	error: string | undefined;
}

const SubmitForm = ({
	onSubmitHandler,
	loadingState,
	error,
}: SubmitFormProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<User>({
		mode: 'onBlur',
		resolver: yupResolver(submitFormSchema),
	});

	const onSubmit = (data: User) => {
		onSubmitHandler(data);
	};

	useEffect(() => {
		if (loadingState === 'success') {
			reset();
		}
	}, [loadingState]);

	const inputsData: InputData[] = [
		{
			id: 'input#1',
			placeholder: 'Name',
			label: 'name',
			invalid: errors.name ? true : false,
			error: errors.name?.message,
		},
		{
			id: 'input#2',
			placeholder: 'Phone',
			label: 'phone',
			invalid: errors.phone ? true : false,
			error: errors.phone?.message,
		},
		{
			id: 'input#3',
			placeholder: 'Email',
			label: 'email',
			invalid: errors.email ? true : false,
			error: errors.email?.message,
		},
	];

	const inputs = inputsData.map(
		({ id, placeholder, label, invalid, error }) => (
			<div className={styles.inputContainer} key={id}>
				<Input
					placeholder={placeholder}
					className={styles.input}
					register={register}
					label={label}
					disabled={loadingState === 'loading'}
					invalid={invalid}
				/>
				{invalid && (
					<p className={getClassString(['p1__inter', styles.error])}>{error}</p>
				)}
			</div>
		)
	);

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			{inputs}
			<GradientButton
				type="submit"
				className={styles.button}
				disabled={loadingState === 'loading'}
			>
				{loadingState === 'loading' ? 'Loading...' : 'Send'}
			</GradientButton>
			{error && (
				<p className={getClassString(['p1__inter', styles.error])}>{error}</p>
			)}
		</form>
	);
};

export default SubmitForm;
