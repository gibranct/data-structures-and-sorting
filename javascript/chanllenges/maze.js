
const dir = [
    [-1,0],  // left
    [0,1], // right
    [0,1],  // top
    [0,-1],  // bottom
]

/**
 * @param {string[][]} maze 
 * @param {string} wall 
 * @param {{x: number, y: number}} curr
 * @param {{x: number, y: number}} end
 * @param {{x: number, y: number}[]} path
 * @returns {boolean}
 */
function walk(maze, wall, curr, end, seen, path) {
    if (curr.x < 0 || curr.x >= maze[0].length
        || curr.y < 0 || curr.y >= maze.length
    ) {
        return false
    }

    if (maze[curr.y][curr.x] === wall) {
        return false
    }

    if (curr.x === end.x && curr.y === end.y) {
        path.push(curr)
        return true
    }

    if (seen[curr.y][curr.x]) {
        return false
    }

    seen[curr.y][curr.x] = true
    path.push(curr)

    for (let i = 0; i < dir.length; i++) {
        const [x,y] = dir[i]
        const myCurr = { x: curr.x + x, y: curr.y + y }
        const finished = walk(maze, wall, myCurr, end, seen, path)
        if (finished) {
            return true
        }
    }

    path.pop()
}

/**
 * @param {string[][]} maze 
 * @param {string} wall 
 * @param {{x: number, y: number}} start 
 * @param {{x: number, y: number}} end 
 * @returns {{x: number, y: number}[]}
 */
function maze_solver(maze, wall, start, end) {
    const seen = []
    const path = []

    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false))
    }

    walk(maze, wall, start, end, seen, path)

    return path
}



module.exports = {
    maze_solver
}