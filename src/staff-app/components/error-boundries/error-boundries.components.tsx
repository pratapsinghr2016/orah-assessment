import React, { Component, ReactNode } from "react"

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error: object, errorInfo: React.ErrorInfo): void {
    console.error("error: " + error)
    console.error("errorInfo: " + JSON.stringify(errorInfo))
    console.error("componentStack: " + errorInfo.componentStack)
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong.</h1>
          <button onClick={() => location.reload()}>Refresh</button>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
