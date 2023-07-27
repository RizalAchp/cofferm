import { JSX } from "solid-js";

type DashboardPageProps = {
    children?: JSX.Element,
};

export default function DashboardPage({ children }: DashboardPageProps) {
    return (<div>
        <h1>DashboardPage</h1>
        {children}
    </div>);
}
