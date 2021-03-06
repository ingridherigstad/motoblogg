export default class {
	constructor(raw_post) {
		this.id = raw_post.id
		this.title = raw_post.title
		this.location = raw_post.location
		this.date = raw_post.date
		this.distance = raw_post.distance
		this.content = raw_post.content
		this.images = raw_post.images
	}

	/**
	 * Converts a geo uri to an array with two float values
	 * @return {Array} [lat, long]
	 */
	get coords() {
		if (this.location.indexOf('geo:') === -1)
			throw new Error('Bad geo URI format')

		let raw_coords = this.location.substr(4)

		if (raw_coords.indexOf('?') !== -1)
			raw_coords = raw_coords.split('?')[0]

		return raw_coords.split(',').map(val => Number.parseFloat(val))
	}

	getDayRelativeTo(date) {
		const initialDay = date.getTime()
		const currentDay = this.date.getTime()

		return Math.floor((currentDay - initialDay) / (1000 * 3600 * 24)) + 1
	}
}
