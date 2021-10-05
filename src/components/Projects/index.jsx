import React from 'react';

import { Item, List } from './styles';

export default function Projects({ projectsData }) {
	if (!projectsData) return null;

	return (
		<section>
			<List>
				{projectsData.map((current) => (
					<Item key={current.title}>
						<a href={current.url}>
							<img src={current.image} alt={current.title} />
						</a>
					</Item>
				))}
			</List>
		</section>
	);
}
