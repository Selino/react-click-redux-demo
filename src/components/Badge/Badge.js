/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import colors from "../../tokens/colors"
import fontSizes from "../../tokens/fontSizes"
import spacing from "../../tokens/spacing"
import fontWeights from "../../tokens/fontWeights"
import radii from "../../tokens/radii"

export default function Badge(props) {
  const { variant } = props
  return (
    <div
      className='badge'
      css={css`
        color: ${colors.white};
        padding: ${spacing.tiny};
        font-size: ${fontSizes.tiny};
        font-weight: ${fontWeights.black};
        background-color: ${variant};
        text-transform: uppercase;
        width: 100%;
        border-radius: ${radii.circle};
      `}
    >
      {props.text}
    </div>
  )
}
