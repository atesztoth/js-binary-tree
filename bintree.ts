// a: igen nem
// b: igen nem

interface BinTree<T> {
  node: T
  left?: BinTree<T>
  right?: BinTree<T>
}

type TreeCutter<T, U> = { [k: string]: [T, U] }
type SingeCutter<X> = { [k: string]: X }

// Cutters can be optionally fixed to any type
export const binTreeBuilder = <T extends {}, U = any, V = any>(
  cutters: TreeCutter<U, V>[], // properties used for cutting
  prevNode: T,
  cutterParam?: { [k: string]: U | V }
): BinTree<T> | null => {
  if (cutters.length < 1) return null
  const [[k, v]] = Object.entries(cutterParam ?? [null, null])
  const [[newKey, [v1, v2]]] = Object.entries(cutters[0])
  const node = { ...prevNode, ...(k ? { [k]: v } : {}) }
  return {
    node,
    left: binTreeBuilder(cutters.slice(1), node, { [newKey]: v1 }) ?? undefined,
    right: binTreeBuilder(cutters.slice(1), node, { [newKey]: v2 }) ?? undefined
  }
}

const cutters: TreeCutter<string, string>[] = [{ szin: ['piros', 'kek'] }, { fajta: ['kutya', 'macska'] }]
const tree = binTreeBuilder(cutters, { name: 'Laci' })

JSON.stringify(tree, null,2)
