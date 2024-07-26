import Link from "next/link";

export default function NotFound() {
    return (
        <div>
            <h2>Not Found</h2>
            <p>Sorry, The page you are looking does not exist </p>
            <Link href="/">Return to Home Page</Link>
        </div>
    );
}