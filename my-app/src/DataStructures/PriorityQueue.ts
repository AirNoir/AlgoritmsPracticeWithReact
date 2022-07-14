/* eslint-disable @typescript-eslint/no-unused-vars */
import { QueueNodeType } from '../types'

const PriorityQueue = () => {
  let queue: QueueNodeType[] = []

  function enqueue({element, priority}: { element: any, priority: number}) {
    const newNode: QueueNodeType = {
      element,
      priority
    }
    if(queue.length === 0) {
      queue.push(newNode)
    } else {
      let added = false
      for(let i = 0; i < queue.length; i++) {
        if(queue[i].priority > priority) {
          queue.splice(i, 0, newNode)
          added = true
          break
        }
      }
      if(!added) {
        queue.push(newNode)
      }
    }
  }

  function dequeue() {
    return queue.shift()
  }

  function clear() {
    queue = []
  }

  function size() {
    return queue.length
  }

  function print() {
    console.table(queue)
  }

  return {
    enqueue,
    dequeue,
    clear,
    size,
    print
  }


}





export default PriorityQueue