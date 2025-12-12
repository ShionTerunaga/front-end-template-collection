import type { CheckerProps } from '@/shared/types/object'
import { headingFontStyle } from './heading.css'
import { textColor, type TextTheme } from '@/shared/theme/design-system.css'
import type { ChildrenOnly } from '@/shared/types/react'
import type { ElementType } from 'react'

/**
 * HeadingFont type
 */
export type HeadingFont = keyof typeof headingFontStyle

interface HeadingStyle {
  as?: Extract<ElementType, 'h1' | 'h2' | 'h3'>
  fontStyle?: HeadingFont
  color?: TextTheme
  style?: React.CSSProperties
}

interface HeadingProps extends HeadingStyle, ChildrenOnly {}

export function Heading<T extends HeadingProps>(
  props: CheckerProps<T, HeadingProps, 'Heading Props Error'>,
) {
  const {
    as = 'h1',
    fontStyle = 'firstBig',
    color = 'textNormal',
    style,
    children,
  } = props

  const cn = [headingFontStyle[fontStyle], textColor[color]].join(' ')

  const As = as
  return (
    <As className={cn} style={style}>
      {children}
    </As>
  )
}
