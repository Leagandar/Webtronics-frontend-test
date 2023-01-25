import Image, { StaticImageData } from 'next/image';
import styles from './TechnologyCard.module.css';

interface TechnologyCardProps {
	title: string;
	image: StaticImageData;
}

const TechnologyCard = ({ image, title }: TechnologyCardProps) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<Image src={image} alt="technology card" className={styles.image} />
				<h4 className="h4__clash">{title}</h4>
			</div>
		</div>
	);
};

export default TechnologyCard;
