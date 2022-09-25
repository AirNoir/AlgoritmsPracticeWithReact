
import {TreeNodeType} from '../types'


const TreeNode = function(key: any, value: any): TreeNodeType {

   const left = null
   const right = null
   const count: number = 0

  return {
    key,
    value,
    left,
    right,
    count,
  }

}

export default TreeNode