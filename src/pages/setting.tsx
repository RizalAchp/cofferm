import { JSX } from "solid-js";

type SettingPageProps = {
    children?: JSX.Element,
};

export default function SettingPage({ children }: SettingPageProps) {
    return (<div>
        <h1>SettingPage</h1>
        {children}
    </div>);
}
