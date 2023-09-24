import useNavigation from "../useNavigation";

interface RouteProps {
  to: string;
  children: React.ReactNode;
}
export default function Route ({ children, to }: RouteProps) {
  const { currentPath } = useNavigation()

  return to === currentPath ?
    <>{children}</> :
    null
}