import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import { type ReviewsData } from '../../constants';
import { getClassString } from '../../utils';
import ArrowButton from '../ArrowButton/ArrowButton';
import styles from './Slider.module.css';

interface SliderProps {
	reviews: ReviewsData;
	currentReviewer: ReviewsData[number];
	setCurrentReviewer: Dispatch<SetStateAction<SliderProps['currentReviewer']>>;
	className: string | undefined;
}

const Slider = ({
	reviews,
	currentReviewer,
	setCurrentReviewer,
	className,
}: SliderProps) => {
	const photos = reviews.map(({ avatar, id }) => {
		const classList = getClassString([
			styles.review,
			id === currentReviewer.id ? styles.activeReview : '',
		]);

		return (
			<div className={classList} key={id}>
				<Image
					src={avatar}
					alt="reviewer avatar"
					className={styles.avatar}
					width={id === currentReviewer.id ? 380 : 180}
				/>
			</div>
		);
	});

	const nextReviewerHandler = () => {
		const { index: currentReviewerIndex } = currentReviewer;
		const nextReviewer = reviews[currentReviewerIndex + 1];

		if (!nextReviewer) {
			setCurrentReviewer(reviews[0]);
			return;
		}

		setCurrentReviewer(nextReviewer);
	};

	const prevReviewerHandler = () => {
		const { index: currentReviewerIndex } = currentReviewer;
		const prevReviewer = reviews[currentReviewerIndex - 1];

		if (!prevReviewer) {
			setCurrentReviewer(reviews[reviews.length - 1]);
			return;
		}

		setCurrentReviewer(prevReviewer);
	};

	return (
		<div className={getClassString([styles.slider, className])}>
			<div className={styles.header}>
				<div className={styles.counter}>
					<h4
						className={getClassString(['h4__clash', styles.currentCounter])}
					>{`${currentReviewer.index + 1}/`}</h4>
					<p className={getClassString(['p1__inter', styles.description])}>
						{reviews.length}
					</p>
				</div>
				<div className={styles.buttons}>
					<ArrowButton
						iconType="left"
						className={styles.leftArrowButton}
						onClick={prevReviewerHandler}
					/>
					<ArrowButton iconType="right" onClick={nextReviewerHandler} />
				</div>
			</div>
			<div className={styles.photos}>{photos}</div>
		</div>
	);
};

export default Slider;
