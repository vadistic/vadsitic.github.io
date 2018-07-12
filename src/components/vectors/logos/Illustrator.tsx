import * as React from 'react'

export interface IllustratorProps {
  title?: string;
}

const Illustrator: React.SFC<IllustratorProps> = ({ title, ...props }) => (
  <svg width={32} height={32} fill="none" {...props}>
    <title>{title}</title>
    <path d="M1.333 1.333h29.334v29.334H1.333V1.333z" fill="#261300" />
    <path
      d="M0 0v32h32V0H0zm1.333 1.368h29.334v29.265H1.333V1.367z"
      fill="#FF7C00"
    />
    <path
      d="M11.107 18.031l-1.054 3.932c-.026.105-.066.131-.2.131h-1.96c-.133 0-.16-.04-.133-.197l3.787-13.026c.066-.236.106-.446.133-1.088 0-.092.04-.131.107-.131h2.8c.093 0 .133.026.16.13l4.24 14.142c.026.105 0 .17-.107.17h-2.213c-.107 0-.174-.026-.2-.118l-1.107-3.945h-4.253zm3.706-2.123c-.373-1.454-1.253-4.626-1.586-6.16H13.2c-.28 1.534-.987 4.129-1.547 6.16h3.16zm6-7.286c0-.84.6-1.337 1.36-1.337.814 0 1.36.537 1.36 1.337 0 .865-.573 1.336-1.386 1.336-.774 0-1.334-.471-1.334-1.336zm.16 2.975c0-.105.04-.158.16-.158h2.094c.106 0 .16.04.16.158v10.34c0 .105-.027.157-.16.157H21.16c-.133 0-.173-.065-.173-.17V11.597h-.014z"
      fill="#FF7C00"
    />
  </svg>
)

export default Illustrator
