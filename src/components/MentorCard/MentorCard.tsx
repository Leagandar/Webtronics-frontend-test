import Image, { type StaticImageData } from 'next/image';
import { HTMLAttributes } from 'react';
import { getClassString } from '../../utils';
import styles from './MentorCard.module.css';

interface MentorCardProps extends HTMLAttributes<HTMLDivElement> {
	avatar: StaticImageData;
	title: string;
	description: string;
}

const MentorCard = ({
	avatar,
	title,
	description,
	className,
}: MentorCardProps) => {
	return (
		<div className={getClassString([styles.container, className])}>
			<Image src={avatar} alt="mentor" className={styles.avatar} />
			<h4 className={getClassString(['h4__clash', styles.title])}>{title}</h4>
			<p className={getClassString(['p2__inter', styles.description])}>
				{description}
			</p>
		</div>
	);
};

export default MentorCard;
