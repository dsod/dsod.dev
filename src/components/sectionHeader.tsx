import React from "react"

type SectionHeaderProps = {
  section: string
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ section }) => (
  <h2 className="section-header">{section}</h2>
)

export default SectionHeader
