import { describe, expect, it } from 'vitest'
import { optionUtility } from '@/utils/option'

describe('optionUtility', () => {
  const { createSome, createNone, optionConversion, isSome, isNone } =
    optionUtility

  it('createSome で作った値は isSome が true になる', () => {
    const some = createSome('value')

    expect(isSome(some)).toBe(true)
    if (isSome(some)) {
      expect(some.value).toBe('value')
    }
  })

  it('string型を与えたらSome型が返ってくる', () => {
    const result = optionConversion('string')
    expect(result.kind).toBe('some')

    if (result.kind === 'none') {
      throw new Error('not expect')
    }

    expect(result.value).toBe('string')
  })

  it('nullを渡したらNone型が返ってくる', () => {
    const result = optionConversion(null)

    expect(result.kind).toBe('none')
  })

  it('undefinedを渡したらNone型が返ってくる', () => {
    const result = optionConversion(undefined)

    expect(result.kind).toBe('none')
  })

  it('createNone で作った値は isNone が true になる', () => {
    const none = createNone()

    expect(isNone(none)).toBe(true)
  })

  it('isSome は some でない場合 false を返す', () => {
    const none = createNone()
    expect(isSome(none)).toBeFalsy()
  })

  it('isNone は none でない場合 false を返す', () => {
    const some = createNone()
    expect(isNone(some)).toBeTruthy()
  })
})
