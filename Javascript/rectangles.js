const isCorner = (str) => /^[+]$/.test(str);
const isHSide = (str) => /^[-+]$/.test(str);
const isVSide = (str) => /^[|+]$/.test(str);
export function count(rows) {
    if (rows.length === 0) return 0;
    const grid = rows.map((row) => [...row]);
    const [lastRow, lastCol] = [grid.length - 1, grid[0].length - 1];
    let counter = 0;
    // scan from top left corner of grid
    for (let top = 0; top < lastRow; top++) {
        for (let left = 0; left < lastCol; left++) {
            if (!isCorner(grid[top][left])) continue;
            for (let right = left + 1; right <= lastCol; right++) {
                if (!isHSide(grid[top][right])) break;
                if (!isCorner(grid[top][right])) continue;
                for (let bottom = top + 1; bottom <= lastRow; bottom++) {
                    if (isCorner(grid[bottom][left]) && isCorner(grid[bottom][right])) {
                        counter++;
                    } else if (
                        !isVSide(grid[bottom][left]) ||
                        !isVSide(grid[bottom][right])
                    ) {
                        break;
                    }
                }
            }
        }
    }
    return counter;
}