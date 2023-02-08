import TicatecAppBoard from "./TicatecAppBoard.svelte";
import AppTabContainer from "./app-tab-bar/AppTabContainer.svelte";
import type {Toast} from "./toast";
import type {MessageBox} from "./message-box";
import type {Indicator} from "./indicator";

declare global {
    interface Window {
        Toast: Toast;
        MessageBox: MessageBox;
        Indicator: Indicator;
    }
}

export default TicatecAppBoard;
export {AppTabContainer}