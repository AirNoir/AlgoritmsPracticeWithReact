import swap from "../../helpers/swap";

const bubbleSort =(nums: number[] = []): void => {
  for (let round = 0; round < nums.length; round++) {
    const notArranagedEelemtnsLength = nums.length - round;
    for (let bubble = 1; bubble < notArranagedEelemtnsLength; bubble++) {
      if (nums[bubble - 1] > nums[bubble]) {
        swap(nums, bubble - 1, bubble);
      }
    }
  }
};

export default bubbleSort