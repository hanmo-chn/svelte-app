<script lang="ts">
    import {createEventDispatcher} from "svelte";
    import DemoDialog from "./DemoDialog.svelte";

    export let board;
    const dispatch = createEventDispatcher();

    const openDialog = () => {
        board.showDialog(DemoDialog, {item: {name: 'Henry'}});
    }

</script>
<div style="width: 100%; height: 100%; background-color: #ff45ff">
    <a href="javascript:void(0)" on:click={()=>{dispatch('close')}}>关闭</a>
    <a href="javascript:void(0)" on:click={openDialog}>打开对话框</a>
</div>