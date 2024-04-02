import { useState } from "react"

function Item({ item }) {
    const [isOpen, setIsOpen] = useState(false)

    return <div>
        <button onClick={() => item.children && setIsOpen(!isOpen)}>
            {item.name}
        </button>
        {item.children && (
            <div className={`sub-menu pl-5 ${isOpen ? "" : "hidden"}`} >
                {item.children.map(subitem => <Item item={subitem} />)}
            </div>
        )}
    </div>
}

export default function Menu({ items }) {
    return <div className="pt-2 ml-5 w-72 border-r border-r-zinc-700">
        {items.children.map(item => <Item item={item} />)}
    </div>

}