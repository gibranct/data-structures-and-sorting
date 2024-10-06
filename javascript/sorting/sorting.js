

function bubble_sort(numbers) {
    for (let i=0; i < numbers.length; i++) {
        for (let j=0; j < numbers.length - i; j++) {
            if (numbers[j+1] < numbers[j]) {
                swap(j, j+1, numbers)
            }
        }
    }

}

function qs(arr, lo, hi) {
    if (lo >= hi) return

    const pivotIdx = partition(arr, lo, hi)

    qs(arr, lo, pivotIdx - 1)
    qs(arr, pivotIdx + 1, hi)
}

function partition(arr, lo, hi) {
    const pivot = arr[hi]
    let idx = lo - 1

    for (let i = lo; i < hi; i++) {
        const n = arr[i]
        if (n <= pivot) {
            idx++
            swap(i, idx, arr)
        }
    }

    idx++
    arr[hi] = arr[idx]
    arr[idx] = pivot

    return idx
}

function quick_sort(arr) {
    qs(arr, 0, arr.length - 1)
}

function swap(idx1, idx2, arr) {
    const temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
}

module.exports = {
    bubble_sort,
    quick_sort
}


