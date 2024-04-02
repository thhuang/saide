import { useState } from "react"

function Item({ item }) {
    const [isOpen, setIsOpen] = useState(false)

    return <div className="menu-item">
        <button onClick={() => item.children && setIsOpen(!isOpen)}>
            {item.name}
        </button>
        {item.children && (
            <div className={`sub-menu pl-5 ${isOpen? "" : "hidden"}`} >
                {item.children.map(subitem => <Item item={subitem} />)}
            </div>
        )}
    </div>
}

export default function Menu({ items }) {
    return <div className="ml-5 wrapper">
        {items.children.map(item => <Item item={item} />)}
    </div>
}