<script lang="ts">
    import "@hanmotec/tsui-themes/tsui-themes.css";
    import "../lib/indicator/Indicator";
    import TicatecAppBoard from "../lib/TicatecAppBoard.svelte";
    import DialogButton from "./DialogButton.svelte";
    import Drawer from "@hanmotec/tsui-drawer"
    import MainHome from "./MainHome.svelte";
    import MainHomeFrame from "./MainHomeFrame.svelte";
    import {onMount} from "svelte";

    let drawOpen: boolean = false;
    let inFrame: boolean = true;

    onMount(()=>{
        inFrame = window.self !== window.top;
    })

</script>
<TicatecAppBoard isSingle={inFrame} style="min-width: 1200px; min-height: 800px" DialogButton={DialogButton}>
    <div slot="header" style="height: 60px; background-color: aliceblue">
        <a href="" on:click={()=>{drawOpen=true}}><span>header</span></a>
    </div>
    <div slot="footer" style="height: 24px; background-color: #f0f0f0">
        <span>footer</span>
    </div>

    {#if inFrame}
        <MainHomeFrame/>
    {:else}
        <MainHome input$style="width: 100%"/>
    {/if}

</TicatecAppBoard>
{#if !inFrame}
<Drawer bind:open={drawOpen}>
    <div>Nav main menu</div>
</Drawer>
{/if}



