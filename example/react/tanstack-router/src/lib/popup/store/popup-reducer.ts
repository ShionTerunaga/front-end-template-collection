import type { PopupAction, PopupState } from './popup.type'

export function popupReducer(
  popupState: PopupState,
  popupAction: PopupAction,
): PopupState {
  const { type } = popupAction

  switch (type) {
    case 'show':
      return {
        isOpen: true,
        children: popupAction.children,
      }
    case 'hidden':
      return {
        isOpen: false,
      }
    default:
      return {
        ...popupState,
      }
  }
}
