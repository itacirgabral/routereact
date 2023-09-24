import { useContext } from "react";
import navigationContext from './navigationContext'

const useNavigation = () => useContext(navigationContext)

export default useNavigation