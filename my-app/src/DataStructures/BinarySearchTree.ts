import TreeNode from './TreeNode'
import {TreeNodeType} from '../types'


const BinarySearhTree = function<T1, T2>(rootKey: any, rootValue?: any) {

  let root = TreeNode(rootKey, rootValue)
  
  const search = function(val: T2) {
    return searchWithCurrentNode(root, val)
  }

  const searchWithCurrentNode = (current: TreeNodeType, val: T2) => {
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


  const insert = function(key: T1, val: T2) {
    let current = root
    root = insertWithCurrentNode(current, key, val)
  }

  const insertWithCurrentNode = (current: TreeNodeType | null, key: T1, val: T2) => {
    if(!current) {
      return TreeNode(key, val)
    }

    if(current.key < key) {
      current.left =  insertWithCurrentNode(current.left, key, val)
    }

    if(current.key > val) {
      current.right = insertWithCurrentNode(current.right, key, val)
    }

    if(current.key === key) {
      current.value = val
    }

    return current
  }

  const size = function(): number {
    return getNodeSize(root)
  }

  const getNodeSize = function(current: TreeNodeType | null): number {
    if(!current) {
      return 0
    }
    return current.count
  }

  const rank = function(key: T1): number {
    return getNodeRank(key, root)
  }

  const getNodeRank = function(key: T1, current: TreeNodeType | null): number {
    if(!current) {
      return 0
    }
    // should implement compareTo here
    if(key < current.key ) {
      return getNodeRank(key, current.left)
    }

    if(key > current.key) {
      return 1 + getNodeSize(current.left) + getNodeRank(key, current.right)
    }

    return 0
  }

  const remove = function(key: T1): void {

  }

  return {
    search,
    insert,
    size,
    rank,
    remove
  }


}

export default BinarySearhTree