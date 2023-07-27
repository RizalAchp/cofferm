import { useNavigate } from "@solidjs/router";
import { createEffect, createSignal, onCleanup } from "solid-js";
import { ROUTE_HOME } from "../utils/route";

import { Icon } from "solid-heroicons";
import { faceFrown } from "solid-heroicons/solid";

const INITIAL_COUNTDOWN = 5;

export default function NotFoundPage() {
    const nav = useNavigate();
    const [countdown, setCountdown] = createSignal(INITIAL_COUNTDOWN);
    createEffect(() => {
        const interval = setInterval(() => {
            setCountdown(prev => prev - 1);
        }, 1000);
        if (countdown() <= 0) nav(ROUTE_HOME);
        onCleanup(() => {
            clearInterval(interval);
        });
    });
    return (<div>
        <div class="hero h-4/5">
            <div class="hero-content text-accent text-center">
                <div class="max-w-md">
                    <Icon path={faceFrown} class="h-48 w-48 inline-block" />
                    <h1 class="text-5xl  font-bold">404 - Not Found</h1>
                    <span class="countdown font-mono text-6xl text-center mt-4">
                        <span style={{ "--value": countdown() }}></span>
                    </span>
                </div>
            </div>
        </div>
    </div>);
}
