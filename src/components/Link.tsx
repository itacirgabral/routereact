import useNavigation from "../useNavigation";

interface LinkProps {
  to: string;
  children: React.ReactNode;
}
type HandleClick = React.MouseEventHandler<HTMLAnchorElement>
export default function Link ({ to, children }: LinkProps) {
  const { navigate, currentPath } = useNavigation()
  const handleClick: HandleClick = ev => {
    if (!ev.ctrlKey && !ev.metaKey) {
      ev.preventDefault()
      if (currentPath != to) {
        navigate(to)
      }
    }
  }

  return <a href={to} onClick={handleClick}>{
    children
  }</a>
}