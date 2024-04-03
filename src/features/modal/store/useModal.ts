import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { open, close, selectModals } from './modalSlice'

export default function useModal() {
  const dispatch = useAppDispatch()

  const modals = useAppSelector(selectModals)

  const openModal = ({ type, props }: { type: string; props?: any }) => {
    dispatch(open({ type, props }))
  }

  const closeModal = () => {
    dispatch(close())
  }

  return {
    openModal,
    closeModal,
    modals,
  }
}
