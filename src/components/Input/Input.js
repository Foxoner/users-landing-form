import './Input.scss'

function Input( {label, helper, ...rest} ) {
    return(
        <div className="inputBox">
            <input {...rest} />
            <span>{label}</span>
            <p>{helper}</p>
        </div>
    )
}

export default Input