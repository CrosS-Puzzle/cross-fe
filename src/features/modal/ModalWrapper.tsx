import { useEffect } from 'react'

export default function ModalWrapper({
  onClose,
  children,
}: {
  onClose: () => void
  children: React.ReactNode
}) {
  const handleClose = () => {
    onClose?.()
  }

  // Modal 외부 스크롤 제한
  useEffect(() => {
    const $body = document.querySelector('body')
    const overflow = $body?.style.overflow
    if ($body) {
      $body.style.overflow = 'hidden'
    }
    return () => {
      if ($body) {
        $body.style.overflow = overflow || ''
      }
    }
  })

  return (
    <div className="fixed w-full h-full top-0 bottom-0 left-0 right-0 bg-neutral-400/80">
      <div className="w-fit min-w-[400px] h-fit min-h-[300px] max-h-[50vh] rounded-lg bg-neutral-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 overflow-auto">
        <button
          type="button"
          onClick={handleClose}
          className="w-6 h-6 cursor-pointer absolute top-4 right-4 rounded-full hover:bg-neutral-400  hover:text-neutral-50 "
        >
          X
        </button>
        {children}
      </div>
    </div>
  )
}
