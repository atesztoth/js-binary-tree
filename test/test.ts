import { BinTree, rememberingTree, TreeCutter } from '../src/ts/bintree'

describe('BinTree', () => {
  type SampleTypes = string | number

  it('constructing an tree with a single node', () => {
    const cutters: TreeCutter<SampleTypes, SampleTypes>[] = []
    const tree = rememberingTree(cutters, { manufacturer: 'Tesla' })
    expect(JSON.stringify(tree)).toEqual(JSON.stringify({ node: { manufacturer: 'Tesla' } }))
  })

  it('constructing an tree with one cut', () => {
    const cutters: TreeCutter<SampleTypes, SampleTypes>[] = [
      { glass: ['broken', 'will break'] } // hehe 😈
    ]
    const tree = rememberingTree(cutters, { manufacturer: 'Tesla' })

    const target: BinTree<{ [k: string]: string }> = {
      node: {
        manufacturer: 'Tesla'
      },
      left: {
        node: {
          manufacturer: 'Tesla',
          glass: 'broken'
        }
      },
      right: {
        node: {
          manufacturer: 'Tesla',
          glass: 'will break'
        }
      }
    }

    expect(JSON.stringify(tree)).toEqual(JSON.stringify(target))
  })

  it('constructing a small tree with unequal height subtrees', () => {
    const cutters: TreeCutter<SampleTypes, SampleTypes>[] = [{ color: ['red', null] }]
    const tree = rememberingTree(cutters, { manufacturer: 'Tesla' })
    expect(JSON.stringify(tree)).toEqual(
      JSON.stringify({
        node: { manufacturer: 'Tesla' },
        left: {
          node: {
            manufacturer: 'Tesla',
            color: 'red'
          }
        }
      })
    )
  })

  it('constructing an tree stopping one half', () => {
    const cutters: TreeCutter<SampleTypes, SampleTypes>[] = [
      { glass: [null, 'will break'] }, // hehe 😈
      { like: ['yes', 'no'] }
    ]
    const tree = rememberingTree(cutters, { manufacturer: 'Tesla' })

    const target: BinTree<{ [k: string]: string }> = {
      node: { manufacturer: 'Tesla' },
      right: {
        node: { manufacturer: 'Tesla', glass: 'will break' },
        left: { node: { manufacturer: 'Tesla', glass: 'will break', like: 'yes' } },
        right: { node: { manufacturer: 'Tesla', glass: 'will break', like: 'no' } }
      }
    }

    expect(JSON.stringify(tree)).toEqual(JSON.stringify(target))
  })
})
