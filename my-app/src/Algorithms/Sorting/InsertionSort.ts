import swap from "../../helpers/swap";

const InsertionSort = (nums: number[] = []) => {
  for (let start = 0; start < nums.length; start++) {
    for (let runner = start - 1; runner >= 0; runner--) {
      if (nums[runner + 1] < nums[runner]) {
        swap(nums, runner, runner + 1);
      } else {
        break;
      }
    }
  }
};

export default InsertionSort