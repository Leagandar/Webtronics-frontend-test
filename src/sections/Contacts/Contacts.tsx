import { AxiosError } from 'axios';
import { useState } from 'react';
import { Modal, SubmitForm } from '../../components';
import { sendUserData } from '../../services';
import { User } from '../../types';
import { getClassString } from '../../utils';
import styles from './Contacts.module.css';

export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

const Contacts = () => {
	const [visible, setVisible] = useState(false);
	const [loadingState, setLoadingState] = useState<LoadingState>('idle');
	const [error, setError] = useState('');

	const onSubmitHandler = async (user: User) => {
		setLoadingState('loading');
		setError('');
		try {
			await sendUserData(user);
			setVisible(true);
			setLoadingState('success');
			setTimeout(() => {
				setVisible(false);
			}, 800);
		} catch (e) {
			const error = e as AxiosError;
			setError(error.message);
			setLoadingState('error');
		}
	};

	return (
		<section
			className={getClassString(['flex__center', styles.section])}
			id="getInTouch"
		>
			<div className={styles.content}>
				<div className={styles.header}>
					<h2 className="h2__clash">Contact us</h2>
					<p className="p1__inter">
						Do you have any kind of help please contact with us.
					</p>
				</div>
				<SubmitForm
					onSubmitHandler={onSubmitHandler}
					loadingState={loadingState}
					error={error}
				/>
			</div>
			{visible && (
				<Modal visible={visible} setVisible={setVisible}>
					<h4 className={getClassString(['h4__clash', styles.modalText])}>
						Data was successfully sent!
					</h4>
				</Modal>
			)}
		</section>
	);
};

export default Contacts;
