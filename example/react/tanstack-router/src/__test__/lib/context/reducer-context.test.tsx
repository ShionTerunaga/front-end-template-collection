import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createReducerContext } from '@/lib/context/reducer-context'
import { describe, it, expect } from 'vitest'

const initialState = { count: 0 }
const reducer = (state: typeof initialState, action: { type: string }) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      return state
  }
}

describe('createReducerContext', () => {
  it('should provide the initial state and dispatch function', async () => {
    const [Provider, useReducerContext] = createReducerContext({
      errorMessage: 'Context not found',
      reducer,
      initialState,
    })

    const TestComponent = () => {
      const [state, dispatch] = useReducerContext()

      return (
        <>
          <div data-testid="count">{state.count}</div>
          <button
            data-testid="increment"
            onClick={() => dispatch({ type: 'increment' })}
          >
            Increment
          </button>
        </>
      )
    }

    render(
      <Provider>
        <TestComponent />
      </Provider>,
    )

    expect(screen.getByTestId('count').textContent).toBe('0')

    const incrementButton = screen.getByTestId('increment')
    await userEvent.click(incrementButton)

    expect(screen.getByTestId('count').textContent).toBe('1')
  })

  it('should throw an error if context is not provided', () => {
    const [, useReducerContext] = createReducerContext({
      errorMessage: 'Context not found',
      reducer,
      initialState,
    })

    const TestComponent = () => {
      try {
        useReducerContext()
      } catch (error) {
        return (
          <div data-testid="error">
            {error instanceof Error ? error.message : 'エラーです'}
          </div>
        )
      }
      return null
    }

    render(<TestComponent />)

    expect(screen.getByTestId('error').textContent).toBe('Context not found')
  })
})
