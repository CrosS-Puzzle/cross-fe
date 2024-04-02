import { useEffect } from 'react'

export default function ModalWrapper({
  onClose,
  children,
}: {
  onClose: () => void
  children: React.ReactNode
}) {
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
    <div className="fixed w-full h-full top-0 bottom-0 left-0 right-0 bg-neutral-400/40 z-50">
      <div className="min-w-[400px] rounded-lg bg-neutral-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 overflow-auto">
        <div className="w-full h-ful z-50">{children}</div>
      </div>
    </div>
  )
}
