import React from 'react'

type SectionHeadingProps = {
    children: React.ReactNode,
    className?: String
}

const SectionHeading = ({ className, children }: SectionHeadingProps) => {
    return (
        <h2 className={`section-heading ${className}`}>
            {children}
        </h2>
    )
}

export default SectionHeading