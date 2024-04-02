import Navbar from "./Navbar";
import Menu from "./Menu";

const files = {
    children: [
        { name: "empty_folder", children: [] },
        {
            name: "public",
            children: [{ name: "index.html", name: "favorite.html" }]
        },
        {
            name: "src",
            children: [
                { name: "App.css" },
                { name: "App.js" },
                {
                    name: "components",
                    children: [{ name: "ComponentA.js" }, { name: "ComponentB.js" }]
                }
            ]
        },
        {name: "package.json"}
    ]
}

export default function UserMainPage() {
    return (
    <div>
        <div><Navbar /></div>
        <div>
            <Menu items={files}/>
        </div>
    </div>
    )
}