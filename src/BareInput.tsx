import React from "react"

interface BareInputProps {
  type: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  autoFocus?: boolean
  value?: string
}

class BareInput extends React.Component<BareInputProps> {
  render() {
    const { type: typeInput, ...rest } = this.props
    return <input {...rest} type={typeInput} />
  }
}

// function BareInput(props) {
//   const { type, ...rest } = props
//   return <input {...rest} />
// }

export default BareInput
