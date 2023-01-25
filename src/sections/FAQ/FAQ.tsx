import { QuestionCard } from '../../components';
import { data } from '../../constants';
import { getClassString } from '../../utils';
import styles from './FAQ.module.css';

const FAQ = () => {
	const questionCards = data.questions.map(({ id, title, description }) => (
		<QuestionCard key={id} title={title} description={description} />
	));

	return (
		<section
			className={getClassString(['flex__center', styles.section])}
			id="questions"
		>
			<h2 className={getClassString(['h2__clash', styles.title])}>
				Frequently Asked Questions
			</h2>
			<div className={styles.content}>
				<div className={styles.questionMarkContainer}>
					<p className="p1__inter">
						Do you have any kind of questions? We are here to help.
					</p>
					<div className={styles.imageContainer}></div>
				</div>
				<div className={styles.questionList}>{questionCards}</div>
			</div>
		</section>
	);
};

export default FAQ;
