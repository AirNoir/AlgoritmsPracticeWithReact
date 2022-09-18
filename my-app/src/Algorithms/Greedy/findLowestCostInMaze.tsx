import Square from "./Square";
import PriorityQueue from "../../DataStructures/PriorityQueue";

const checkMaze = (source: number[][], start: number[], target: number[]) => {
  const pq = PriorityQueue();
  pq.enqueue({ element: start, priority: source[start[0]][start[1]] });
};

const Maze = () => {
  const maze = [
    [1, 4, 5, 2, 3],
    [6, 7, 4, 5, 2],
    [3, 9, 1, 8, 4],
    [5, 4, 2, 9, 8],
  ];

  checkMaze(maze, [0, 0], [3, 4]);

  return (
    <div className="flex flex-col">
      {maze.map((row) => (
        <div className="flex flex-row">
          {row.map((col) => (
            <Square desc={col.toString()} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Maze;
