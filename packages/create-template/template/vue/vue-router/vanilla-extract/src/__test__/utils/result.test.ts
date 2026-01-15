import { describe, expect, it } from 'vitest'
import { resultUtility } from '@/utils/result'

describe('resultUtility', () => {
  const {
    createOk,
    createNg,
    checkResultReturn,
    checkResultVoid,
    checkPromiseReturn,
    checkPromiseVoid,
    UNIT,
  } = resultUtility

  it('createOk で作った値は isOK が true になる', () => {
    const ok = createOk('value')

    expect(ok.isOk).toBeTruthy()

    if (ok.isOk) {
      expect(ok.value).toBe('value')
    }
  })

  it('createNg で作った値は isNG が true になる', () => {
    const ng = createNg('err')

    expect(ng.isErr).toBeTruthy()

    if (ng.isErr) {
      expect(ng.err).toBe('err')
    }
  })

  it('isOK は ok でない場合 false を返す', () => {
    const ng = createNg('err')

    expect(ng.isOk).toBeFalsy()
  })

  it('isNG は ng でない場合 false を返す', () => {
    const ok = createOk('value')

    expect(ok.isErr).toBeFalsy()
  })

  it('checkResultReturn は成功時に ok を返す', () => {
    const res = checkResultReturn({
      fn: () => 'ret',
      err: (e) => createNg('err'),
    })

    expect(res.isOk).toBeTruthy()

    if (res.isOk) expect(res.value).toBe('ret')
  })

  it('checkResultReturn は例外時に ng を返す', () => {
    const res = checkResultReturn({
      fn: () => {
        throw new Error('boom')
      },
      err: (e) => createNg('myErr'),
    })

    expect(res.isErr).toBeTruthy()

    if (res.isErr) expect(res.err).toBe('myErr')
  })

  it('checkResultVoid は成功時に UNIT を返す', () => {
    const res = checkResultVoid({
      fn: () => {},
      err: (e) => createNg('e'),
    })

    expect(res.isOk).toBeTruthy()

    if (res.isOk) expect(res.value).toBe(UNIT)
  })

  it('checkPromiseReturn は解決時に ok を返す', async () => {
    const res = await checkPromiseReturn({
      fn: async () => 'async',
      err: (e) => createNg('e'),
    })

    expect(res.isOk).toBeTruthy()

    if (res.isOk) expect(res.value).toBe('async')
  })

  it('checkPromiseReturn は拒否時に ng を返す', async () => {
    const res = await checkPromiseReturn({
      fn: async () => {
        throw new Error('fail')
      },
      err: (e) => createNg('err'),
    })

    expect(res.isErr).toBeTruthy()

    if (res.isErr) expect(res.err).toBe('err')
  })

  it('checkPromiseVoid は成功時に UNIT を返す', async () => {
    const res = await checkPromiseVoid({
      fn: async () => {},
      err: (e) => createNg('e'),
    })

    expect(res.isOk).toBeTruthy()

    if (res.isOk) expect(res.value).toBe(UNIT)
  })
})
