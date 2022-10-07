const UIButton = ({title, clicked})=> {
    return (
        <button className="btn_" onClick={clicked}>
            <span>{title}</span>
        </button>
    )
}

export const UISubmitButton = ({title})=> {
    return (
        <button className="btn_" type="submit">
            <span>{title}</span>
        </button>
    )
}

export default UIButton;