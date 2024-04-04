import { useState } from "react"
import { SideMenuIcon } from "./MenuIcon"

function Item({ item }) {
    const [isOpen, setIsOpen] = useState(false)
    const folderIcon = "M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"

    return <div>
        {item.children ?
            <button onClick={() => setIsOpen(!isOpen)} className="my-0.5 flex">
                <SideMenuIcon item={folderIcon} />
                {item.name}
            </button>
            :
            <button onClick={() => setIsOpen(!isOpen)} className="my-0.5 flex">
                {item.name}
            </button>
        }
        {item.children && (
            <div className={`sub-menu pl-5 ${isOpen ? "" : "hidden"}`} >
                {item.children.map(subitem => <Item item={subitem} />)}
            </div>
        )}
    </div>
}

export default function SideMenu({ items }) {
    return <div className="font-mono h-screen flex flex-col pt-2 ml-5 w-72 border-r border-r-zinc-700">
        {items.children.map(item => <Item item={item} />)}
    </div>

}