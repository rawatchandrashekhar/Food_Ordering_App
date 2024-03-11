import { useRouteError } from "react-router-dom";
import { IMAGES } from "../utils/constants";

export default function Error() {

    const { status, statusText, message } = useRouteError();

    return (
        <div className="error-container">
            <img src={IMAGES.notFound} className="error-image" />
            <h1>({status}) {statusText || message}</h1>
        </div>
    )
}