import { Link, Routes } from "@solidjs/router";
import { Icon } from "solid-heroicons";
import { createSignal, JSX } from "solid-js";
import { ROUTE_ACTIVITY, ROUTE_HOME, ROUTE_SETTING, ROUTE_STATISTIC } from "./utils/route";
import { squares_2x2, cog_6Tooth, bellAlert, chartBar, } from "solid-heroicons/solid"
import { moon, sun } from "solid-heroicons/outline";
import { getTheme, swapTheme } from "./utils/theme";

type LayoutProps = {
    children: JSX.Element;
}

export default function Layout(props: LayoutProps) {
    const [currTheme, setCurrTheme] = createSignal(getTheme());
    function ontheme_change() {
        const theme = currTheme();
        const new_theme = swapTheme(theme);
        setCurrTheme(new_theme);
    }


    return <div class="flex flex-col">
        <div class="navbar bg-base-100 z-10 shadow-md">
            <div class="navbar-start">
                <Link href={ROUTE_HOME} class="btn btn-ghost normal-case text-xl">Cofferm</Link>
            </div>
            <div class="navbar-end">
                <label class="swap swap-rotate" >
                    <input type="checkbox" onchange={ontheme_change} />
                    <Icon path={sun} class="swap-on fill-current w-10 h-10" />
                    <Icon path={moon} class="swap-off fill-current w-10 h-10" />
                </label>
            </div>
        </div>
        <main class="flex-1 overflow-y-auto pt-8 px-6 bg-base-100">
            <Routes>
                {props.children}
            </Routes>
        </main>

        <div class="btm-nav shadow-md">
            <Link href={ROUTE_HOME} activeClass="active text-primary">
                <Icon path={squares_2x2} class="w-5 h-5" />
                <span class="btm-nav-label">Home</span>
            </Link >
            <Link href={ROUTE_STATISTIC} activeClass="active text-primary">
                <Icon path={chartBar} class="w-5 h-5" />
                <span class="btm-nav-label">Statistics</span>
            </Link >
            <Link href={ROUTE_ACTIVITY} activeClass="active text-primary">
                <Icon path={bellAlert} class="w-5 h-5" />
                <span class="btm-nav-label">Activities</span>
            </Link >
            <Link href={ROUTE_SETTING} activeClass="active text-primary">
                <Icon path={cog_6Tooth} class="w-5 h-5" />
                <span class="btm-nav-label">Settings</span>
            </Link >
        </div>
    </div>
}

