import { Component } from 'react'

import ErrorImg from '../../../assets/404-error.jpg'
import { Image } from '../../atoms/Image'

import { altText } from './ErrorBoundary.const'

import { style } from './ErrorBoundary.style'

import { ErrorBoundaryProps, ErrorBoundaryState } from './ErrorBoundaty.type'

export class ErrorBoundary extends Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    componentDidCatch() {
        this.setState({ hasError: true })
    }

    render() {
        const { children } = this.props
        const { hasError } = this.state

        return hasError ? (
            <Image src={ErrorImg} alt={altText} style={style} />
        ) : (
            children
        )
    }
}
