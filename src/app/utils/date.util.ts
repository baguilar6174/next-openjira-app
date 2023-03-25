import { formatDistanceToNow } from 'date-fns';

export const getDateFormat = (date: number) => {
	const fromNow = formatDistanceToNow(date);
	return fromNow;
};
