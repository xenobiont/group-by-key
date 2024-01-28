type MapByKey<T, K extends keyof T> = Map<T[K], T[]>;

function groupByKey<T, K extends keyof T>(items: T[], key: K): MapByKey<T, K> {
	const map: MapByKey<T, K> = new Map();

	items.forEach((item) => {
		const collection = map.get(item[key]);

		if (collection) {
			collection.push(item);
		} else {
			map.set(item[key], [item]);
		}
	});

	return map;
}

const items2 = [
	{ id: 1, name: 'John' },
	{ id: 2, name: 'Mary' },
];

const itemsByName = groupByKey(items2, 'name');

const itemsById = groupByKey(items2, 'id');

const itemsByKey3 = groupByKey(
	[{ id: '1', name: 'Joe', surname: 'Doe' }],
	'name',
);

// this will yield an error:
// @ts-expect-error
const itemsByKey2 = groupByKey([{ name: 'Joe' }], 'id');
