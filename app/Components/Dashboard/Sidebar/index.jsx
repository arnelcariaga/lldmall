import Nav from "react-bootstrap/Nav";
import { sidebar, is_open, sidebar_header, category_head, nav_item, active } from './styles.module.css'
import { usePathname } from "next/navigation"
import Link from "next/link"

const sidebarItems = [{
    name: "Inicio",
    icon: <i className="bi bi-house me-3"></i>,
    href: "/dashboard"
},
{
    name: "Productos",
    icon: <i className="bi bi-book me-3"></i>,
    href: "/products"
},
{
    name: "Portofolio",
    icon: <i className="bi bi-card-checklist me-3"></i>,
    href: "/"
},
{
    name: "FAQs",
    icon: <i className="bi bi-patch-question me-3"></i>,
    href: "/"
},
{
    name: "Contact",
    icon: <i className="bi bi-telephone me-3"></i>,
    href: "/"
}]

export default function SideBar({ isOpen }) {
    const path = usePathname()

    return <div className={sidebar + ` ${isOpen && is_open} border-end vh-100`}>
        <div className={sidebar_header}>
            <h3 className="text-white">LLDMAll</h3>
        </div>

        <Nav className="flex-column pt-2">
            <p className={"ml-3 text-white " + category_head}>Heading</p>
            {
                sidebarItems.map(({ name, href, icon }, i) => <Nav.Item
                    key={i}
                    className={nav_item + " " + `${path === href && active}`}
                >
                    <Nav.Link as={Link} href={href}>
                        {icon}
                        {name}
                    </Nav.Link>
                </Nav.Item>)
            }
        </Nav>
    </div>
}