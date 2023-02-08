<script lang="ts">
    import Buttons from "../lib/message-box/Buttons";
    import Button from "@hanmotec/tsui-button";

    export let button: number;

    let isSecondary: boolean = false;

    let text = "关闭";

    $: {
        switch (button) {
            case Buttons.BTN_YES:
                text = "确认";
                break;
            case Buttons.BTN_CLOSE:
                text = "关闭";
                break;
            case Buttons.BTN_CANCEL:
                isSecondary = true;
                text = "取消";
                break;
            default:
                text = "未知"
        }
    }
</script>
<Button style="width: 60px" secondary={isSecondary} on:click>{text}</Button>