'use client'

import { usePopup } from '@/lib/popup'
import { type CheckerProps } from '@/shared/types/object'
import { omitElementObject } from '@/utils/object'
import {
  type ButtonHTMLAttributes,
  type DetailedHTMLProps,
  type ReactNode,
} from 'react'

type ButtonProps = Omit<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  'onClick'
> & {
  popupChildren: ReactNode
}

export function PopupOpenButton<T extends ButtonProps>(
  props: CheckerProps<T, ButtonProps, 'Not Expect In Open Popup Button Props'>,
) {
  if (typeof props !== 'object') {
    throw new Error('This is not props expected elements.')
  }

  const { popupChildren } = props
  const buttonProps = omitElementObject(props, ['popupChildren'])

  const { openPopup } = usePopup()

  return (
    <button
      {...buttonProps}
      onClick={() => openPopup({ children: popupChildren })}
    />
  )
}
