import Link from "next/link"

export const NavBar = () => {
    return (
        <nav className="flex flex-row justify-start list-none p-4 bg-white shadow-lg ">
            <li className="m-6 text-3xl p-1 italic text-orange-500 font-bold capitalize">FoodFast</li>
        </nav>
    )
}