import test from 'tape'
import { Foo } from '../index'

test('Foo test', t => {
  let foo = new Foo()
  t.pass('YAY')
  t.end()
})
