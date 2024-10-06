const { tree, tree2 } = require("./tree");
const { compare } = require("./compare")

test("Compare Binary Trees", function () {
    expect(compare(tree, tree)).toEqual(true);
    expect(compare(tree, tree2)).toEqual(false);
});