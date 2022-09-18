/* eslint-disable import/no-anonymous-default-export */
export type QueueNodeType = {
  element: any,
  priority:  number
}

export type LinkedListNodeType = {
  value: any,
  next: LinkedListNodeType | null
}

export default {}