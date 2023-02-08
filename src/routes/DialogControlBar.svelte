<script lang="ts">
    import {createEventDispatcher} from "svelte";
    import Button from "@hanmotec/tsui-button";

    const dispatch = createEventDispatcher();


    const handleSaveClick = () => {
        console.log('button save click');
        dispatch('save');
    }


</script>
<Button style="width: 60px" on:click={handleSaveClick}>保存</Button>
<Button style="width: 60px" secondary on:click={()=>{dispatch('close')}}>关闭</Button>