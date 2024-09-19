package search_test

import (
	"testing"

	search "github.com.br/gibranct/cache-lru/internal/binary-search"
	"github.com/stretchr/testify/assert"
)

func TestBinarySearch(t *testing.T) {
	numbers := []int{1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420}

	assert.True(t, search.BinarySearch(numbers, 69))
	assert.False(t, search.BinarySearch(numbers, 1336))
	assert.True(t, search.BinarySearch(numbers, 69420))
	assert.False(t, search.BinarySearch(numbers, 69421))
	assert.True(t, search.BinarySearch(numbers, 1))
	assert.False(t, search.BinarySearch(numbers, 0))
}
