interface Props {
  title: string
  description: string
  onclick?: any
}

export default function NavbarCard({ title, description, onclick }: Props) {

  return (
    <a
      onClick={onclick}
      className="hover:cursor-pointer border-none block max-w-md py-4 border rounded-lg shadow hover:bg-gray-100  dark:hover:bg-gray-50/5"
    >
      <h5 
          className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white"
      >
        {title}
      </h5>
      <p 
        className="font-normal text-gray-700 dark:text-gray-400"
      >
        {description}
      </p>
    </a>
  )
}
