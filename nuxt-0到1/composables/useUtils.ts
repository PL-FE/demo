// 转换为万
export function convertToTenThousand(number: number, precision: number = 2) {
	return (number / 10000).toFixed(precision)
}

// 转换为亿
export function convertToHundredMillion(number: number, precision: number = 2) {
	return (number / 100000000).toFixed(precision)
}

export function formatTimestamp(timestamp: number) {
	if (!timestamp) {
		return ''
	}

	if (isNaN(timestamp) || timestamp < 0) {
		return ''
	}

	const date = new Date(timestamp)
	if (isNaN(date.getTime())) {
		return ''
	}

	const year = date.getFullYear()
	const month = date.getMonth() + 1
	const day = date.getDate()
	const hours = date.getHours()
	const minutes = date.getMinutes()
	const seconds = date.getSeconds()

	const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
	return formattedDate
}
