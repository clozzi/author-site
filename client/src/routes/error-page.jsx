import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div>
            <h1>Uh-oh</h1>
            <p>That's not supposed to happen!</p>
            <p>{error.statusText || error.message}</p>
        </div>
    )
}

export default ErrorPage