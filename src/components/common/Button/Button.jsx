import "./Button.css"

export const Button = ({label, type}) => {
  return (
    <div className={`button bg-button ${type}`}>{label}</div>
  )
}
