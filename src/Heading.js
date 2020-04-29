import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {TYPOGRAPHY, COMMON, get} from './constants'
import theme from './theme'

const Heading = styled.h2`
  font-weight: ${get('fontWeights.bold')};
  margin: 0;
  ${TYPOGRAPHY} ${COMMON};
`

Heading.defaultProps = {
  theme,
}

Heading.propTypes = {
  theme: PropTypes.object,
  ...COMMON.propTypes,
  ...TYPOGRAPHY.propTypes
}

function withHeading(level) {
  const WithHeading = props => <Heading as={level} fontSize={[`mobileHeadingSizes.${level}`, `mobileHeadingSizes.${level}`, `headingSizes.${level}`]} {...props} />
  WithHeading.propTypes = Position.propTypes
  WithHeading.defaultProps = Position.defaultProps
  WithHeading.displayName = `Position.${position}`
  return WithHeading
}

export const H1 = withHeading('h1')
export const H2 = withHeading('h2')
export const H3 = withHeading('h3')
export const H4 = withHeading('h4')
export const H5 = withHeading('h5')
export const H6 = withHeading('h6')

