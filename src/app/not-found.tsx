import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container w-full min-h-[100vh-64px] md:min-h-[100vh-80px] flex flex-col items-center justify-center pt-32">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#262626"
        width="200px"
        height="200px"
        viewBox="0 0 22 22"
      >
        <path
          d="M12.822 11.29c.816-.581 1.421-1.348 1.683-2.322.603-2.243-.973-4.553-3.53-4.553-1.15 0-2.085.41-2.775 1.089-.42.413-.672.835-.8 1.167a1.179 1.179 0 0 0 2.2.847c.016-.043.1-.184.252-.334.264-.259.613-.412 1.123-.412.938 0 1.47.78 1.254 1.584-.105.39-.37.726-.773 1.012a3.25 3.25 0 0 1-.945.47 1.179 1.179 0 0 0-.874 1.138v2.234a1.179 1.179 0 1 0 2.358 0V11.78a5.9 5.9 0 0 0 .827-.492z"
          fillRule="nonzero"
        />
        <ellipse cx="10.825" cy="16.711" rx="1.275" ry="1.322" />
      </svg>
      <h1 className="text-2xl lg:text-3xl font-semibold text-neutral-900">
        페이지가 존재하지 않습니다.
      </h1>
      <Link
        href="/"
        className="mt-8 text-neutral-900 flex items-center justify-center p-2 rounded-md hover:bg-neutral-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M16.1795 3.26875C15.7889 2.87823 15.1558 2.87823 14.7652 3.26875L8.12078 9.91322C6.94952 11.0845 6.94916 12.9833 8.11996 14.155L14.6903 20.7304C15.0808 21.121 15.714 21.121 16.1045 20.7304C16.495 20.3399 16.495 19.7067 16.1045 19.3162L9.53246 12.7442C9.14194 12.3536 9.14194 11.7205 9.53246 11.33L16.1795 4.68297C16.57 4.29244 16.57 3.65928 16.1795 3.26875Z"
            fill="#262626"
          />
        </svg>
        홈으로 돌아가기
      </Link>
    </div>
  )
}
