import AppBoard from "./AppBoard.svelte";
import type {Toast} from "./toast";
import type {MessageBox} from "./message-box";
import type {Indicator} from "./indicator";
import MessageBoxPanel from "./message-box";
import ToastPanel from "./toast";
import IndicatorPanel from "./indicator";

declare global {
    interface Window {
        Toast: Toast;
        MessageBox: MessageBox;
        Indicator: Indicator;
    }
}

export default AppBoard;