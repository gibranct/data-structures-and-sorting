package cache_test

import (
	"strings"
	"testing"

	cache "github.com.br/gibranct/cache-lru/internal/LRU"
)

func TestNewLRUCache(t *testing.T) {
	cache := cache.NewLRUCache[int64, string](3)

	if cache == nil {
		t.Errorf("expected not nil, got: %v", cache)
	}

	if cache.Get(1) != nil {
		t.Errorf("expected nil, got: %s", *cache.Get(1))
	}
}

func TestGetAndUpdate(t *testing.T) {
	cache := cache.NewLRUCache[int, string](3)

	fakeKey := 55

	key1 := 4
	v1 := "four"
	cache.Update(key1, v1)

	key2 := 50
	v2 := "fifty"
	cache.Update(key2, v2)

	key3 := 78
	v3 := "seventy eight"
	cache.Update(key3, v3)

	if cache.Get(fakeKey) != nil {
		t.Errorf("expected nil, got: %s", *cache.Get(fakeKey))
	}
	if cache.Get(key1) == nil {
		t.Errorf("expected not nil, got: %s", *cache.Get(key1))
	}
	if cache.Get(key2) == nil {
		t.Errorf("expected not nil, got: %s", *cache.Get(key2))
	}
	if cache.Get(key3) == nil {
		t.Errorf("expected not nil, got: %s", *cache.Get(key3))
	}

	v3UpdatedValue := "seventy eight updated"
	cache.Update(key3, v3UpdatedValue)
	if cache.Get(key3) == nil {
		t.Errorf("expected not nil, got: %s", *cache.Get(key3))
	}
	if strings.Compare(*cache.Get(key3), v3UpdatedValue) != 0 {
		t.Errorf("expected '%s', got: '%s'", v3UpdatedValue, *cache.Get(key3))
	}

	key4 := 45
	v4 := "forty five"
	cache.Update(key4, v4)

	if cache.Get(key4) == nil {
		t.Errorf("expected nil, got: %s", *cache.Get(key4))
	}

	if cache.Get(key1) != nil {
		t.Errorf("expected nil, got: %s", *cache.Get(key1))
	}
}
