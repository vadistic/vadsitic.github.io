import * as React from 'react'
import { css } from 'react-emotion'

import { styled, ThemeProps, verticalMarginStylesFn } from '../../styles'

export interface HeadingProps {
  variant:
    | 'display'
    | 'title'
    | 'annotation'
    | 'heading'
    | 'subheading'
    | 'subsubheading'
  color?: boolean
}

const Heading: React.SFC<HeadingProps> = ({ variant, children, ...rest }) => {
  const Tag = {
    display: 'h1',
    title: 'h1',
    annotation: 'h2',
    heading: 'h3',
    subheading: 'h4',
    subsubheading: 'h5',
  }[variant]

  return <Tag {...rest}>{children}</Tag>
}

export const headingStyles = ({
  theme: { fonts, fontWeights, leading },
}: ThemeProps) => css`
  line-height: ${leading.normal};
  font-family: ${fonts.sans};
  font-weight: ${fontWeights.medium};
`

export const headingColorStyles = ({ color, variant }: HeadingProps) => ({
  theme: { mode, fontColors },
}: ThemeProps) => {
  // converts boolean to string selector & adds "defaultProp" `colored` for variant="heading"
  const _coloredSelector = color || variant === 'heading' ? 'color' : 'base'
  const _headingColor = {
    light: {
      base: fontColors.headings,
      color: fontColors.accent,
    },
    dark: {
      base: fontColors.headingsInverted,
      color: fontColors.accentInverted,
    },
    color: {
      base: fontColors.headingsInverted,
      color: fontColors.headings,
    },
  }[mode.color][_coloredSelector]

  return css`
    color: ${_headingColor};
  `
}

export const headingVariantStyles = ({ variant }: HeadingProps) => ({
  theme: { fontSizes, tracking, fontWeights, leading },
}: ThemeProps) =>
  ({
    display: css`
      font-size: ${fontSizes.m8};
    `,
    title: css`
      line-height: ${leading.tight};
      font-size: ${fontSizes.m7};
      ${verticalMarginStylesFn(fontSizes.m8, fontSizes.m6)};
    `,
    annotation: css`
      font-size: ${fontSizes.m5};
      text-transform: uppercase;
      letter-spacing: ${tracking.wide};
      ${verticalMarginStylesFn('0', fontSizes.m7)};
    `,
    heading: css`
      font-weight: ${fontWeights.light};
      font-size: ${fontSizes.m6};
      ${verticalMarginStylesFn(fontSizes.m7, fontSizes.m5)};
    `,
    subheading: css`
      font-size: ${fontSizes.m5};
      ${verticalMarginStylesFn(fontSizes.m6, fontSizes.m4)};
    `,
    subsubheading: css`
      font-size: ${fontSizes.m4};
      line-height: ${leading.loose};
      ${verticalMarginStylesFn(fontSizes.m5, '0')};
    `,
  }[variant])

const StyledHeading = styled(Heading)`
  grid-area: Heading;
  ${headingStyles};
  ${headingColorStyles};
  ${headingVariantStyles};
`
export { StyledHeading as Heading }