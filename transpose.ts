const transpose = <T,>(matrix: T[][]): T[][] => matrix[0].map((_, i) => matrix.map((row) => row[i]));

export default transpose;
