import swap from "../../helpers/swap";

const SelectionSort = (nums: number[]) => {
  for (let starter = 0; starter < nums.length; starter++) {
    let maxIndex = starter;
    for (let checker = starter + 1; checker < nums.length; checker++) {
      if (nums[checker] > nums[maxIndex]) {
        maxIndex = checker;
      }
    }
    swap(nums, starter, maxIndex);
  }
};

export default SelectionSort