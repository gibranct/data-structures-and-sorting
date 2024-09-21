package sorting

func BubbleSort(numbers []int) {

	for i := range numbers {
		for j := 0; j < len(numbers)-i-1; j += 1 {
			if numbers[j] > numbers[j+1] {
				swap(j, j+1, numbers)
			}
		}
	}

}

func swap(idx1, idx2 int, numbers []int) {
	temp := numbers[idx1]

	numbers[idx1] = numbers[idx2]
	numbers[idx2] = temp
}
