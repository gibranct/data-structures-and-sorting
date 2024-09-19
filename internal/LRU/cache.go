package cache

import "sync"

type Node[T any] struct {
	value T
	next  *Node[T]
	prev  *Node[T]
}

type LRU[K, V comparable] struct {
	length        int
	capacity      int
	head          *Node[V]
	tail          *Node[V]
	lookup        map[K]*Node[V]
	reverseLookup map[Node[V]]K
	wg            sync.WaitGroup
}

func NewLRUCache[K, V comparable](capacity int) *LRU[K, V] {
	cache := LRU[K, V]{
		capacity:      capacity,
		length:        0,
		head:          nil,
		tail:          nil,
		lookup:        make(map[K]*Node[V]),
		reverseLookup: make(map[Node[V]]K),
	}
	return &cache
}

func (cache *LRU[K, V]) Update(key K, value V) {
	cache.wg.Add(1)
	node := cache.lookup[key]

	if node == nil {
		newNode := &Node[V]{value: value}
		cache.prepend(newNode)
		cache.lookup[key] = newNode
		cache.reverseLookup[*newNode] = key
		cache.length++
		cache.trimCache()
		return
	}

	cache.detach(node)
	cache.prepend(node)
	node.value = value
	cache.wg.Done()
}

func (cache *LRU[K, V]) Get(key K) *V {
	cache.wg.Add(1)
	node := cache.lookup[key]
	if node == nil {
		return nil
	}

	cache.detach(node)
	cache.prepend(node)

	cache.wg.Done()
	return &node.value
}

func (cache *LRU[K, V]) detach(node *Node[V]) {
	if node.prev != nil && node != nil {
		node.prev.next = node.next
	}

	if node.next != nil && node != nil {
		node.next.prev = node.prev
	}

	if cache.head == node {
		cache.head = cache.head.next
	}

	if cache.tail == node {
		cache.tail = cache.tail.prev
	}

	if node != nil {
		node.prev = nil
		node.next = nil
	}
}

func (cache *LRU[K, V]) prepend(node *Node[V]) {
	if cache.head == nil {
		cache.head = node
		cache.tail = node
		return
	}

	cache.head.prev = node
	node.next = cache.head

	cache.head = node
}

func (cache *LRU[K, V]) trimCache() {
	if cache.length <= cache.capacity {
		return
	}

	tail := cache.tail
	cache.detach(tail)

	key := cache.reverseLookup[*tail]
	delete(cache.lookup, key)
	cache.length--
}
