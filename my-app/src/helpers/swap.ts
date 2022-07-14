const swap = (
  sourceArray: number[],
  leftIndex: number,
  rightIndex: number
): void => {
  const temp = sourceArray[leftIndex];
  sourceArray[leftIndex] = sourceArray[rightIndex];
  sourceArray[rightIndex] = temp;
};


export default swap