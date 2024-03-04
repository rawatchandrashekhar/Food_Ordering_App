import { useRouteError } from "react-router-dom";
import { IMAGES } from "../utils/constants";

export default function Error() {

    const { status, statusText } = useRouteError();

    return (
        <div className="error-container">
            <img src={IMAGES.error} className="error-image" />
            <h1>{status}: {statusText}!</h1>
        </div>
    )
}