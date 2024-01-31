export default function NavbarCard(props) {

  return (
    <a
      onClick={props.onclick}
      className="hover:cursor-pointer  hover:scale-105 block max-w-md py-4 
      rounded-lg hover:bg-gray-100  dark:hover:bg-gray-50/5"
    >
      <h5 
          className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white"
      >
        {props.title}
      </h5>
      <p 
        className="font-normal text-sm text-gray-700 dark:text-gray-400"
      >
        {props.description}
      </p>
    </a>
  )
}
