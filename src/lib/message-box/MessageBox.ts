import Buttons from "./Buttons";
const MR_CANCEL = 0;
const MR_OK = 1;
const MR_CLOSE = 2;
const MR_YES = 5;

export type ActionCallback = (result: any) => void;
type ShowMessageBox = (message: string, callback: ActionCallback, type?: 'warning' | 'question' | 'info' ) => void;
/**
 * 显示信息提示，带一个带确定按钮的信息框
 */
type ShowMessage = (message: string, callback: ActionCallback) => void;
type ShowConfirmMessage = (message: string, callback: ActionCallback, type?: 'warning' | 'question') => void;

export default interface MessageBox {
    show: ShowMessageBox,
    confirm: ShowConfirmMessage,
    ModalResult: any
    buttons?: any
}

const ModalResult = {
    YES: MR_YES,
    CANCEL: MR_CANCEL,
    CLOSE: MR_CLOSE
}

const initialize = (show: ShowMessage, confirm: ShowConfirmMessage): void=> {
    window.MessageBox = {
        show,
        confirm,
        ModalResult,
        buttons: Buttons
    }
};

export {ModalResult, initialize}
