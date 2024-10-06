
function walkPreOrder(curr, path) {
    if (curr === null) return path

    path.push(curr.value)
    walkPreOrder(curr.left, path)
    walkPreOrder(curr.right, path)

    return path
}

function walkInOrder(curr, path) {
    if (curr === null) return path

    walkInOrder(curr.left, path)
    path.push(curr.value)
    walkInOrder(curr.right, path)

    return path
}

function walkPostOrder(curr, path) {
    if (curr === null) return path

    walkPostOrder(curr.left, path)
    walkPostOrder(curr.right, path)
    path.push(curr.value)

    return path
}


function preOrderSearch(head) {
    return walkPreOrder(head, [])
}

function inOrderSearch(head) {
    return walkInOrder(head, [])
}

function postOrderSearch(head) {
    return walkPostOrder(head, [])
}



module.exports = {
    preOrderSearch,
    inOrderSearch,
    postOrderSearch
}
