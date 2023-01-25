import { ReviewGallery } from '../../components';
import { data } from '../../constants';
import { getClassString } from '../../utils';
import styles from './Review.module.css';

const Review = () => {
	return (
		<section className={getClassString(['flex__center', styles.section])} id="review">
			<h2 className={getClassString(['h2__clash', styles.title])}>Review</h2>
			<ReviewGallery reviews={data.reviews} />
		</section>
	);
};

export default Review;
