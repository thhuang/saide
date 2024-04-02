import Navbar from "./Navbar";
import SideMenu from "./SideMenu";

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
        { name: "package.json" }
    ]
}

export default function UserMainPage() {
    return (
        <div>
            <Navbar />
            <SideMenu items={files} />
        </div>
    )
}