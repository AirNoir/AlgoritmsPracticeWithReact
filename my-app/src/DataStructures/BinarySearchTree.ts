import TreeNode from './TreeNode'
import {TreeNodeType} from '../types'


const BinarySearhTree = function<T>(rootKey: any, rootValue?: any) {

  const root = TreeNode(rootValue)
  
  const search = function(val: T) {
    return searchWithCurrentNode(root, val)
  }

  const searchWithCurrentNode = (current: TreeNodeType, val: T) => {
    if(current.value === val) {
      return current
    }

    if(current.left) {
      searchWithCurrentNode(current.left, val)
    }

    if(current.right) {
      searchWithCurrentNode(current.right, val)
    }

    return null
  }


  const insert = function(val: T) {
    const current = root
    insertWithCurrentNode(current, val)
  }

  const insertWithCurrentNode = (current: TreeNodeType, val: T) => {
    if(!current) {
      return TreeNode(val)
    }

    if(current.value < val) {
      current.left =  (current.left, val)
    }

    if(current.value > val) {
      current.right = insertWithCurrentNode(current.right, val)
    }

    if(current.value === val) {
      current.value = val
    }

  }

  return {
    search,
    insert
  }


}

export default BinarySearhTree