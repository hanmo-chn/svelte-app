<script lang="ts">

    import ModuleBoard from "@hanmotec/tsui-app-module";
    import {onMount} from "svelte";
    import DemoDialog from "./DemoDialog.svelte";
    import DemoDetailPage from "./DemoDetailPage.svelte";

    let module;



    const handleButtonClick = () => {
        module.board.push(DemoDetailPage, {});
    }

    const openDialog = () => {
        module.board.showDialog(DemoDialog, {item: {name: 'Henry'}});
    }

    onMount(()=>{
        console.log('组件参数:', $$props)
    });


</script>


<ModuleBoard bind:this={module} style="box-sizing: border-box; padding: 5px">
    <div style="width: 100%; height: 100%; ">
        <a href="javascript:void(0)" on:click={handleButtonClick}>打开新页面</a>
        <a href="javascript:void(0)" on:click={openDialog}>打开对话框</a>
    </div>
</ModuleBoard>
