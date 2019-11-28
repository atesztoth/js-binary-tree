// @flow strict

export interface BinTree<T> {
  node: T;
  left?: ?BinTree<T>;
  right?: ?BinTree<T>;
}

export type TreeCutter<T, U> = { [k: string]: [T, U] }

export const binTreeBuilder = <T: {}, U = any, V = any>(
  cutters: TreeCutter<U, V>[], // properties used for cutting
  prevNode: T,
  cutterParam?: { [k: string]: U | V }
): BinTree<T> | null => {
  if (cutters.length < 1) return null
  const [[k, v]] = Object.entries(cutterParam ?? [null, null])
  const node = { ...prevNode, ...(v ? { [k]: v } : {}) }
  if (cutters.length < 1) return { node }
  const [[newKey, [v1, v2]]] = ((Object.entries(cutters[0]): any): [[string, [U | V, U | V]]])
  return {
    node,
    left: binTreeBuilder(cutters.slice(1), node, { [newKey]: v1 }) ?? undefined,
    right: binTreeBuilder(cutters.slice(1), node, { [newKey]: v2 }) ?? undefined
  }
}
