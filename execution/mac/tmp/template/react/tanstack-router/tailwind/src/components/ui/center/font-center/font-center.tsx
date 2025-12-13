import type { CheckerProps } from '@/shared/types/object'
import type { ChildrenOnly } from '@/shared/types/react'
import type { CSSProperties } from 'react'

interface Props extends ChildrenOnly {
    className?: string
    style?: Omit<CSSProperties, 'center'>
}

function FontCenter<T extends Props>(
    props: CheckerProps<T, Props, 'fontCenter has not any props.'>,
) {
    if (typeof props !== 'object') {
        throw Error('runtime error')
    }

    const { className, style, children } = props

    return (
        <div className={`text-center ${className || ''}`} style={style}>
            {children}
        </div>
    )
}

export default FontCenter
