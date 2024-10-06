function bfs(head, needle) {
    const queue = [head]

    while(queue.length) {
        const curr = queue.shift()
        if (!!curr && curr.value === needle) return true

        if (curr.left) {
            queue.push(curr.left)
        }

        if (curr.right) {
            queue.push(curr.right)
        }
    }

    return false
}

module.exports = {
    bfs
}