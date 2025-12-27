'use client'

import { popupReducer } from './popup-reducer'
import type { PopupAction, PopupState } from './popup.type'
import type { ReactNode } from 'react'
import type { ChildrenOnly } from '@/shared/types/react'
import { createReducerContext } from '@/lib/context/reducer-context'

export const popupContext = createReducerContext<PopupState, PopupAction>({
  errorMessage: 'PopupProviderで初期化がされていません',
  reducer: popupReducer,
  initialState: {
    isOpen: false,
  },
})

interface Props {
  layoutPopup: ReactNode
}

export function PopupProvider({ layoutPopup, children }: Props & ChildrenOnly) {
  const [Provider] = popupContext

  return (
    <Provider>
      {layoutPopup}
      {children}
    </Provider>
  )
}
