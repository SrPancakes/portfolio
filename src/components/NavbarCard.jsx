export default function NavbarCard(props) {

  return (
    <a
      onClick={props.onclick}
      className="hover:cursor-pointer border-none block max-w-md py-4 border rounded-lg shadow hover:bg-gray-100  dark:hover:bg-gray-50/5"
    >
      <h5 
          className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white"
      >
        {props.title}
      </h5>
      <p 
        className="font-normal text-gray-700 dark:text-gray-400"
      >
        {props.description}
      </p>
    </a>
  )
}
