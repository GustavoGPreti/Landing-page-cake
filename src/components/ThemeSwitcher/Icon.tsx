import { useTheme } from "next-themes";
import { MdLightMode, MdDarkMode } from "react-icons/md";
export function Icon() {
    const theme = useTheme()
    const isDark = theme.theme == "dark" ? true : false
    return(
        <div>
            {isDark ? <MdDarkMode/> : <MdLightMode/>}
        </div>
    )

}