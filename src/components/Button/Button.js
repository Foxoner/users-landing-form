import './Button.scss';

function Button( {label, disabled} ) {
    return(
        <div>
            <button className='Button' disabled={disabled}>{label}</button>
        </div>
    )
}

export default Button;