import { popupReducer } from '@/lib/popup/store/popup-reducer'
import type { PopupAction, PopupState } from '@/lib/popup/store/popup.type'
import type { ReactNode } from 'react'
import { describe, expect, it } from 'vitest'

describe('popupReducer', () => {
  const component: ReactNode = <div>hello</div>
  const initialPopupState: PopupState = {
    isOpen: false,
  }

  it('ポップアップを開くとき', () => {
    const popupAction: PopupAction = {
      type: 'show',
      children: component,
    }

    const popupState: PopupState = {
      isOpen: true,
      children: component,
    }

    const result = popupReducer(initialPopupState, popupAction)

    expect(JSON.stringify(popupState)).toBe(JSON.stringify(result))
  })

  it('ポップアップを閉じる時', () => {
    const popupAction: PopupAction = {
      type: 'hidden',
    }

    const popupState: PopupState = {
      isOpen: false,
    }

    const result = popupReducer(initialPopupState, popupAction)

    expect(JSON.stringify(popupState)).toBe(JSON.stringify(result))
  })

  it('予期せぬ値が入ってきた時', () => {
    const popupAction: PopupAction = {
      type: 'hoge' as unknown as 'hidden',
    }

    const result = popupReducer(initialPopupState, popupAction)

    expect(JSON.stringify(result)).toBe(JSON.stringify(initialPopupState))
  })
})
