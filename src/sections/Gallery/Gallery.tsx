import Image from 'next/image';
import { images } from '../../constants';
import { getClassString } from '../../utils';
import styles from './Gallery.module.css';

const Gallery = () => {
	return (
		<section
			className={getClassString(['flex__center', styles.section])}
			id="gallery"
		>
			<h2 className="h2__clash">Gallery</h2>
			<div className={styles.gallery}>
				<div className={styles.leftSide}>
					<p className="p1__inter">
						By the end of this course, you will be able to develop and publish
						your very own Google Chrome extension! In this course we will focus
						on coding exercises and projects.
					</p>
					<div>
						<Image src={images.gallery_1} alt="gallery photo" />
					</div>
				</div>
				<div className={styles.mainContentWrapper}>
					<div className={styles.mainSide}>
						<div className={styles.mainPhoto}>
							<Image src={images.gallery_2} alt="gallery photo" />
						</div>
						<div className={styles.rightSide}>
							<Image src={images.gallery_3} alt="gallery photo" />
							<Image src={images.gallery_4} alt="gallery photo" />
						</div>
					</div>
					<p className="p1__inter">
						If you would like to learn web development and get a job in the tech
						industry, you are going to LOVE this course! Learn HTML, CSS,
						JavaScript, Bootstrap and more with over 15 hours of HD video
						tutorials! This course was designed to be extremely beginner
						friendly. We will begin with the very basics of HTML and build a
						simple web page.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Gallery;
