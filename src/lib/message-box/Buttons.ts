const BTN_YES = 1;  //按钮 是
const BTN_NO = 2;   //按钮 否
const BTN_OK = 4;   //按钮 确认
const BTN_CANCEL = 8;  //按钮 取消
const BTN_CLOSE = 16;  //按钮 关闭

const BUTTONS_YES_NO = BTN_YES | BTN_NO;
const BUTTONS_YES_NO_CANCEL = BTN_YES | BTN_NO | BTN_CANCEL;
const BUTTONS_OK_CANCEL = BTN_OK | BTN_CANCEL;
const BUTTONS_OK = BTN_OK;

export default {
    BTN_YES, BTN_NO, BTN_OK, BTN_CANCEL, BTN_CLOSE
}