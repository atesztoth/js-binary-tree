import { rememberingTree, TreeCutter } from './bintree'

type ValueTypes = string | number

const cutters: TreeCutter<ValueTypes, ValueTypes>[] = [
  { type: ['Model S', 'Model 3'] },
  { '0-60': [2.4, 3.2] },
  { range: [373, 322] },
  { drive: ['AWD', 'AWD'] },
  { color: ['black', 'blue'] }
]
const tree = rememberingTree(cutters, { manufacturer: 'Tesla' })

console.info(JSON.stringify(tree, null, 2))
