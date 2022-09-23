import { useContext } from "react";
import AlertContext from "../context/alert/AlertContext";
import { MdOutlineError } from 'react-icons/md'

const Alert = () => {

    const { alert } = useContext(AlertContext)
    return alert !== null && (
        <p>
            {alert.type === "error" && (
                <MdOutlineError color="red" size={30} />
            )}
            <span className="ms-2">
                <strong>{alert.message}</strong>
            </span>
        </p>
    )
}

export default Alert;
