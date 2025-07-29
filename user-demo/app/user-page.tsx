
type Props = {
  name?: string,
}

/**
 * UserPage d
 * @param props 
 * @returns 
 */
export default function UserPage(props: Props) {
  return (<div>
    Hello, {props.name}
  </div>)
}
