import "./style.css"
function Checkbox(props) {
    const { checked, handleChange, name, type, Text } = props
    return (
        <form className="checkbox">
            <input
                type={type}
                name={name}
                checked={checked}
                onChange={handleChange}
                id={name}
            />
            <label htmlFor={name}>{Text}</label>
        </form>
    )
}
export default Checkbox
