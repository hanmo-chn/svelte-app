export type ShowToast = (msg: string, type?: string, duration?: number) => void;

export default interface Toast {
    show: ShowToast;
}

export function initialize(show: ShowToast): void {
    window.Toast = window.Toast || {show}
}

