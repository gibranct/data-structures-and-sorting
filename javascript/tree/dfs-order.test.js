const { tree } = require("./tree");
const { preOrderSearch, inOrderSearch, postOrderSearch } = require("./dfs")

test("Pre order", function () {
    expect(preOrderSearch(tree)).toEqual([
        20,
        10,
        5,
        7,
        15,
        50,
        30,
        29,
        45,
        100,
    ]);
});

test("In order", function () {
    expect(inOrderSearch(tree)).toEqual([
        5,
        7,
        10,
        15,
        20,
        29,
        30,
        45,
        50,
        100,
    ]);
});

test("post order", function () {
    expect(postOrderSearch(tree)).toEqual([
        7,
        5,
        15,
        10,
        29,
        45,
        30,
        100,
        50,
        20,
    ]);
});