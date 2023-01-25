import { Dispatch, ReactNode, SetStateAction } from 'react';
import { getClassString } from '../../utils';
import Portal from '../Portal/Portal';
import styles from './Modal.module.css';

interface ModalProps {
	visible: boolean;
	title?: string;
	setVisible: Dispatch<SetStateAction<boolean>>;
	children: ReactNode;
}

type ModalOverlayProps = Omit<ModalProps, 'setVisible'>;
type BackdropProps = Pick<ModalProps, 'setVisible'>;

const Backdrop = ({ setVisible }: BackdropProps) => {
	return <div className={styles.backdrop} onClick={() => setVisible(false)} />;
};

const ModalOverlay = ({ visible, title, children }: ModalOverlayProps) => {
	return (
		<div
			className={getClassString([styles.modal, visible ? styles.active : ''])}
		>
			<div className={styles.content} onClick={(e) => e.stopPropagation()}>
				{title && <h2 className={styles.title}>{title}</h2>}
				{children}
			</div>
		</div>
	);
};

const Modal = ({ visible, setVisible, title, children }: ModalProps) => {
	return (
		<>
			<Portal>
				<Backdrop setVisible={setVisible} />, portalElement)
			</Portal>
			<Portal>
				<ModalOverlay visible={visible} title={title}>
					{children}
				</ModalOverlay>
			</Portal>
		</>
	);
};

export default Modal;
