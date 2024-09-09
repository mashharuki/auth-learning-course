
type Props = {
  name?: string,
}

export default function UserPage(props: Props) {
  return (<div>
    Hello, {props.name}
  </div>)
}
