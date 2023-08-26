import { JSX } from "solid-js";
import PopupDialog from "../components/popup";

type DashboardPageProps = {
    children?: JSX.Element,
};

export default function DashboardPage({ children }: DashboardPageProps) {
    let popupref: HTMLDialogElement | undefined;
    return (<div>
        <button class="btn" onclick={(e) => {
            e.preventDefault();
            setTimeout(() => popupref?.showModal())
        }}>Open Dialog</button>
        {children}

        <PopupDialog id="testing" title="Ini Test Popup" ref={popupref}>
            <p>
                Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
            </p>
        </PopupDialog>
    </div>);
}
