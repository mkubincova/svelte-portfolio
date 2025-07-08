export function getTimeOfDay() {
	const now = new Date();
	const hours = now.getHours();
	let timeOfDay;

	switch (true) {
		case hours >= 5 && hours < 12:
			timeOfDay = 'morning';
			break;
		case hours >= 12 && hours < 18:
			timeOfDay = 'afternoon';
			break;
		case hours >= 18 && hours < 22:
			timeOfDay = 'evening';
			break;
		case hours >= 22 || hours < 5:
			timeOfDay = 'night';
			break;
		default:
			timeOfDay = 'unknown';
	}
	return timeOfDay;
}
