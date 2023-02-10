<script lang="ts">
    import {createEventDispatcher} from "svelte";
    import Button from "@hanmotec/tsui-button";

    export let saveDisabled: boolean = false;
    export let saveHandler = null;

    const dispatch = createEventDispatcher();

    const handleSaveClick = async () => {
        console.log('button save click');
        if (saveHandler != null) {
            let result = await saveHandler();
            if (result == true) {
                doClose();
            }
        } else {
            doClose();
        }
    }

    const doClose = () => {
        dispatch('close')
    }


</script>
<Button style="width: 60px" disabled={saveDisabled} on:click={handleSaveClick}>保存</Button>
<Button style="width: 60px" secondary on:click={doClose}>关闭</Button>