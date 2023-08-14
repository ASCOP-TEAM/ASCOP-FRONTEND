import { IRouters } from "@interfaces"
import { ActiveLink } from "src/components/link"
import { StyledMenuLinks } from "./styles"

type MenuLinksProps = {
    routers: IRouters[],
    isMenuOpen: boolean,
}


export function MenuLinks({ routers, isMenuOpen }: MenuLinksProps) {

    return (
        <StyledMenuLinks>
            <ul className={isMenuOpen ? "is-Active" : ""}>
                {routers.map((route) => (
                    <li key={route.id}>
                        <ActiveLink href={route.path}>{route.name}</ActiveLink>
                    </li>))}
            </ul>
        </StyledMenuLinks>
    )
}