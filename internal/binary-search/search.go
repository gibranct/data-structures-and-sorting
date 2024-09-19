package search

func BinarySearch(numbers []int, number int) bool {

	high := len(numbers) - 1
	low := 0

	for low <= high {
		medium := (low + high) / 2
		value := numbers[medium]

		if value == number {
			return true
		} else if value > number {
			high = medium - 1
		} else {
			low = medium + 1
		}
	}

	return false
}
