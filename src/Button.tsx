type ButtonProps = {
  children: React.ReactNode
}

export function Button({ children }: ButtonProps): React.ReactElement {
  return <button>{children}</button>
}
