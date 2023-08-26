import { Icon } from "solid-heroicons";
import { xMark } from "solid-heroicons/outline";
import { JSX } from "solid-js";


export declare interface PopupDialogProps {
    id: string,
    title: string,
    ref?: HTMLDialogElement,
    dialogClass?: string,
    titleClass?: string,
    children?: JSX.Element,
}

export default function PopupDialog({ id, title, titleClass, dialogClass, children, ref }: PopupDialogProps): JSX.Element {
    return (
        <dialog id={id} class="modal" ref={ref}>
            <form method="dialog" class={`modal-box modal-middle ${dialogClass}`}>
                <div class="flex justify-between">
                    <h3 class={titleClass ?? "font-bold text-lg"}>{title}</h3>
                    <button class="btn btn-sm btn-circle btn-ghost order-last">
                        <Icon path={xMark} class="h-6 w-6 text-gray-500" />
                    </button>
                </div>
                <div class="pt-4 pb-4">
                    {children}
                </div>
            </form>
            <form method="dialog" class="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    )
}
