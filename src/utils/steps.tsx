import { StepsData } from '../constants';
import { StepCard } from '../components';
import StepGroup from '../sections/Steps/StepGroup';

const getStepGroups = (steps: StepsData) => {
	const cards = steps.map(({ id, index, title, description }) => (
		<StepCard key={id} index={index} title={title} description={description} />
	));
	const groups: JSX.Element[] = [];

	for (let i = 0; i < cards.length; i += 2) {
		const left = cards[i];
		const right = cards[i + 1] || null;
		const group = (
			<StepGroup leftStep={left} rightStep={right} key={`group#${i}`} />
		);

		groups.push(group);
	}

	return groups;
};

export { getStepGroups };
