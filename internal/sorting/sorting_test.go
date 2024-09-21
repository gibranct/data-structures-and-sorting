package sorting_test

import (
	"testing"

	"github.com.br/gibranct/cache-lru/internal/sorting"
	"github.com/stretchr/testify/assert"
)

func TestBubbleSort(t *testing.T) {
	arr := []int{420, 69, 42, 9, 7, 4, 3}
	sorted := []int{3, 4, 7, 9, 42, 69, 420}

	sorting.BubbleSort(arr)

	assert.Equal(t, sorted, arr)
}
