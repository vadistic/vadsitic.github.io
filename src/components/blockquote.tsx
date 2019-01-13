import React from 'react'

import styled, { css } from '../styles/styled-components'
import { Paragraph, ParagraphProps } from './grommet'

const BlockquoteBase = styled.blockquote(
  ({ theme }) => css`
    margin: 0;
    padding-left: 1em;

    color: ${theme.global.colors['dark-4']};
    font-style: italic;

    border-left-style: solid;
    border-width: 3px;
    border-image: linear-gradient(
        to bottom,
        ${theme.global.colors.brand},
        ${theme.global.colors['brand-alt']}
      )
      1 100%;
  `
)

export const Blockquote: React.SFC<ParagraphProps> = props => (
  <BlockquoteBase>
    <Paragraph {...props} />
  </BlockquoteBase>
)