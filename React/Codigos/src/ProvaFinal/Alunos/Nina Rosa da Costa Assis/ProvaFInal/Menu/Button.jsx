export default (props) => {
    return <button className="btn" onClick={props.onClick}>{props.children}</button>
}