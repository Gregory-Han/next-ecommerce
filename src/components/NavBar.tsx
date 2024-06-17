import Link from "next/link"
import Menu from "./Menu"

const NavBar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        {/* Mobile */}
        <Link href="/" > LAMA </Link>
        <Menu/>
    </div>
  )
}

export default NavBar