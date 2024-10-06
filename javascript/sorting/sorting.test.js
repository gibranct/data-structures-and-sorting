const sorting = require("./sorting.js");

test("bubble-sort", function () {
    const arr = [420, 69, 42, 9, 7, 4, 3];
    const sortedArr = [3, 4, 7, 9, 42, 69, 420];

    sorting.bubble_sort(arr);
    expect(arr).toEqual(sortedArr);

    const arr2 = [9, 3, 7, 4, 69, 420, 42];

    sorting.bubble_sort(arr2);
    expect(arr2).toEqual([3, 4, 7, 9, 42, 69, 420]);
});

test("quick-sort", function () {
    const arr = [420, 69, 42, 9, 7, 4, 3];
    const sortedArr = [3, 4, 7, 9, 42, 69, 420];

    sorting.quick_sort(arr);
    expect(arr).toEqual(sortedArr);

    const arr2 = [9, 3, 7, 4, 69, 420, 42];

    sorting.quick_sort(arr2);
    expect(arr2).toEqual([3, 4, 7, 9, 42, 69, 420]);
});