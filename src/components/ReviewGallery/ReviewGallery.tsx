import { useState } from 'react';
import { type ReviewsData } from '../../constants';
import { getClassString } from '../../utils';
import Slider from '../Slider/Slider';
import styles from './ReviewGallery.module.css';

interface ReviewGalleryProps {
	reviews: ReviewsData;
}

const ReviewGallery = ({ reviews }: ReviewGalleryProps) => {
	const [currentReviewer, setCurrentReviewer] = useState(reviews[0]);

	return (
		<div className={styles.gallery}>
			<div className={styles.infoContainer}>
				<h4 className={getClassString(['h4__clash', styles.title])}>
					{currentReviewer.title}
				</h4>
				<p className={getClassString(['p1__inter', styles.description])}>
					{currentReviewer.description}
				</p>
			</div>
			<Slider
				setCurrentReviewer={setCurrentReviewer}
				currentReviewer={currentReviewer}
				reviews={reviews}
				className={styles.slider}
			/>
		</div>
	);
};

export default ReviewGallery;
