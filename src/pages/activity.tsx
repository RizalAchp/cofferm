import { JSX } from "solid-js";

type ActivityPageProps = {
    children?: JSX.Element,
};

export default function ActivityPage({ children }: ActivityPageProps) {
    return (<div>
        <h1>ActivityPage</h1>
        {children}
    </div>);
}
