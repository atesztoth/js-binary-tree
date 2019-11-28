export interface BinTree<T> {
  node: T
  left?: BinTree<T>
  right?: BinTree<T>
}

export type TreeCutter<T, U> = { [k: string]: [T, U] }

export const rememberingTree = <T extends {}, U = any, V = any>(
  cutters: TreeCutter<U, V>[], // properties used for cutting
  prevNode: T,
  cutterParam?: { [k: string]: U | V }
): BinTree<T> | null => {
  const [[k, v]] = Object.entries(cutterParam ?? [null, null])
  const node = { ...prevNode, ...(v ? { [k]: v } : {}) }
  if (cutters.length < 1) return { node }
  const [[newKey, [v1, v2]]] = Object.entries(cutters[0])
  return {
    node,
    left: rememberingTree(cutters.slice(1), node, { [newKey]: v1 }) ?? undefined,
    right: rememberingTree(cutters.slice(1), node, { [newKey]: v2 }) ?? undefined
  }
}
