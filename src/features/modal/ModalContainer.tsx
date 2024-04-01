'use client'

import React, { ReactElement, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import useModal from './store/useModal'
import { Modal } from './store/modalSlice'
import ModalWrapper from './ModalWrapper'

const MODAL_COMPONENTS: {
  [key: string]: (props: any) => ReactElement
} = {}

export default function Container() {
  const [mounted, setMounted] = useState<boolean>(false)

  const { modals, closeModal } = useModal()

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  if (typeof window === 'undefined') return <div />

  const renderModal = (
    <>
      {modals.map(({ type, props }: Modal) => {
        const ModalComponent = MODAL_COMPONENTS[type]
        return (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <ModalWrapper key={type} {...props} onClose={closeModal}>
            <ModalComponent />
          </ModalWrapper>
        )
      })}
    </>
  )

  return mounted ? (
    createPortal(
      renderModal,
      document.getElementById('modal-root') as HTMLElement,
    )
  ) : (
    <div />
  )
}
