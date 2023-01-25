import { useRef, useEffect, useState, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import styles from './Portal.module.css';

interface PortalProps {
	children: ReactNode;
}

const Portal = (props: PortalProps) => {
	const ref = useRef<Element | null>(null);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		ref.current = document.querySelector<HTMLElement>('#overlays');
		setMounted(true);
	}, []);

	return mounted && ref.current
		? createPortal(
				<div className={styles.overlay}>{props.children}</div>,
				ref.current
		  )
		: null;
};

export default Portal;
