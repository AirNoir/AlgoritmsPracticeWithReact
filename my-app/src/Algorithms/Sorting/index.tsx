import { useState, useEffect } from "react";
import BubbleSort from "./BubbleSort";
import InsertionSort from "./InsertionSort";
import SelectionSort from "./SelectionSort";

export default function Sorting() {
  const [arr, setArr] = useState<number[]>([]);
  const [sortedArr, setSortedArr] = useState<number[]>([]);
  const [val, setVal] = useState<string>("");
  const [algorithm, setAlgorithm] = useState(() => BubbleSort);

  const algorithmOptions = [
    {
      desc: "Bubble Sort",
      value: "bubbleSort",
    },
    {
      desc: "Insertion Sort",
      value: "insertionSort",
    },
    {
      desc: "Selection Sort",
      value: "selectionSort",
    },
  ];

  const algorithmMap: Record<string, () => void> = {
    bubbleSort: () => BubbleSort,
    insertionSort: () => InsertionSort,
    selectionSort: () => SelectionSort,
  };

  useEffect(() => {
    const sort = () => {
      const cloneArr = [...arr];
      algorithm(cloneArr);
      setSortedArr(cloneArr);
    };
    sort();
  }, [arr, algorithm]);

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number.isNaN(parseInt(e.target.value, 10))) {
      return;
    }
    setVal(e.target.value);
  };

  const addNum = () => {
    if (Number.isNaN(parseInt(val, 10))) {
      return;
    }
    const newArr = [...arr, parseInt(val, 10)];
    setArr(newArr);
    setVal("");
  };

  const handleAlgorithmChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAlgorithm(algorithmMap[e.target.value]);
  };

  return (
    <main className="App">
      <select onChange={handleAlgorithmChange}>
        {algorithmOptions.map((option) => (
          <option value={option.value}>{option.desc}</option>
        ))}
      </select>
      <input onChange={inputChange} value={val} type="number" step="1" />
      <button onClick={addNum}>Add Num</button>
      <h1>Origin Numbers:</h1>
      <h2>{arr.join(",")}</h2>
      <h1>Sorted Numbers:</h1>
      <h2>{sortedArr.join(",")}</h2>
    </main>
  );
}
