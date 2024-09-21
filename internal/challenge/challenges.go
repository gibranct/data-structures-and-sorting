package challenge

import "math"

func TwoCrystalBalls(breaks []bool) int {
	jmpAmount := int(math.Floor(math.Sqrt(float64(len(breaks)))))

	i := jmpAmount

	for ; i < len(breaks); i += jmpAmount {
		if breaks[i] {
			break
		}

	}

	i -= jmpAmount

	for j := 0; j <= jmpAmount && i < len(breaks); j += 1 {
		if breaks[i] {
			return i
		}
		i += 1
	}

	return -1
}
