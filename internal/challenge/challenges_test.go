package challenge_test

import (
	"testing"

	"github.com.br/gibranct/cache-lru/internal/challenge"
	"github.com/stretchr/testify/assert"
)

func TestTwoCrystalBallsChallenge(t *testing.T) {
	tests := []struct {
		breaks []bool
		idx    int
	}{
		{
			breaks: []bool{true, true, true, true, true, true},
			idx:    0,
		},
		{
			breaks: []bool{false, false, true, true, true, true},
			idx:    2,
		},
		{
			breaks: []bool{false, false, false, false, false, true},
			idx:    5,
		},
		{
			breaks: []bool{false, false, false, false, false, false},
			idx:    -1,
		},
	}

	for _, test := range tests {
		assert.Equal(t, test.idx, challenge.TwoCrystalBalls(test.breaks))
	}
}
