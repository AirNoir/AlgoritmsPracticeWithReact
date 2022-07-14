import PriorityQueue from "../../DataStructures/PriorityQueue";
import Maze from "./findLowestCostInMaze";

const Greedy = () => {
  const pq = PriorityQueue();
  pq.enqueue({ element: "q1", priority: 5 });
  pq.enqueue({ element: "q2", priority: 5 });
  pq.enqueue({ element: "q3", priority: 6 });
  pq.enqueue({ element: "q4", priority: 4 });
  pq.enqueue({ element: "q5", priority: 1 });
  pq.print();
  pq.dequeue();
  pq.print();
  return (
    <div>
      ABC
      <Maze />
    </div>
  );
};

export default Greedy;
