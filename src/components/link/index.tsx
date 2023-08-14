import { useRouter } from 'next/router'
import React from 'react'


type ActiveLinkProps = {
    children: React.ReactNode
    href: string
}

export function ActiveLink({ children, href }: ActiveLinkProps) {
    const router = useRouter()


    const handleClick = (e: React.FormEvent<EventTarget>): void => {
        e.preventDefault()
        router.push(href)
    }

    return (
        <a href={href} onClick={handleClick}>
            {children}
        </a>
    )
}
