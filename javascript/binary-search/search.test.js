const { binarySearch } = require('./search')

test("binary search array", function() {

    const foo1 = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420, 70000];
    expect(binarySearch(foo1, 69)).toEqual(true);
    expect(binarySearch(foo1, 1336)).toEqual(false);
    expect(binarySearch(foo1, 69420)).toEqual(true);
    expect(binarySearch(foo1, 70000)).toEqual(true);
    expect(binarySearch(foo1, 69421)).toEqual(false);
    expect(binarySearch(foo1, 1)).toEqual(true);
    expect(binarySearch(foo1, 0)).toEqual(false);

    const foo2 = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];
    expect(binarySearch(foo2, 69)).toEqual(true);
    expect(binarySearch(foo2, 1336)).toEqual(false);
    expect(binarySearch(foo2, 69420)).toEqual(true);
    expect(binarySearch(foo2, 70000)).toEqual(false);
    expect(binarySearch(foo2, 69421)).toEqual(false);
    expect(binarySearch(foo2, 1)).toEqual(true);
    expect(binarySearch(foo2, 0)).toEqual(false);

    const foo3 = [1, 3, 4];
    expect(binarySearch(foo3, 1)).toEqual(true);
    expect(binarySearch(foo3, 3)).toEqual(true);
    expect(binarySearch(foo3, 4)).toEqual(true);
    expect(binarySearch(foo3, 1336)).toEqual(false);
    expect(binarySearch(foo3, 70000)).toEqual(false);
    expect(binarySearch(foo3, 69421)).toEqual(false);
    expect(binarySearch(foo3, 0)).toEqual(false);

    const foo4 = [1, 3];
    expect(binarySearch(foo4, 1)).toEqual(true);
    expect(binarySearch(foo4, 3)).toEqual(true);
    expect(binarySearch(foo4, 1336)).toEqual(false);
    expect(binarySearch(foo4, 70000)).toEqual(false);
    expect(binarySearch(foo4, 69421)).toEqual(false);
    expect(binarySearch(foo4, 0)).toEqual(false);
});