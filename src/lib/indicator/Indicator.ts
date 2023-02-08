type ShowIndicator= (msg: string) => void;
type HideIndicator = () => void;

export default interface Indicator {
    show?: ShowIndicator,
    hide?: HideIndicator
}

export const initialize = (show: ShowIndicator, hide: HideIndicator): void => {
    window.Indicator = {
        show,
        hide
    };
}

