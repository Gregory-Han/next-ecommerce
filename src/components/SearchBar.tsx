"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

const SearchBar = () => {

    const router = useRouter()
    const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const name = formData.get('name')
        console.log(name)

        if (name) {
            router.push(`/list?name=${name}`)
        }
    }
    
    return (
        <form className="flex items-center justify-between gab-4 bg-gray-100 p-2 rounded-md w-full"
            onSubmit={onSearch}>
            <input type="text" name='name' placeholder="검색" className="w-full bg-transparent outline-none"/>
            <button>
                <Image src="/search.png" alt="search" width={18} height={18} />
            </button>
        </form>
    )
}

export default SearchBar