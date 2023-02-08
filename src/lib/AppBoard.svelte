<script lang="ts">
    import TicatecToast from "./toast/ToastPanel.svelte";
    import TicatecIndicator from "./indicator/IndicatorPanel.svelte";
    import MessageBoxPanel from "./message-box/MessageBoxPanel.svelte";
    import {onMount, SvelteComponent} from "svelte";

    export let style: string = '';
    export let DialogButton: SvelteComponent = null;
    export let isSingle:boolean = false;
    export let title: string = '信息提示'

    onMount(()=>{

    });
</script>
<div class="tsui-app-container-wrapper">
    <div class="tsui-app-container" {style}>
        {#if !isSingle && $$slots['header']}
        <div class="tsui-header">
            <slot name="header"/>
        </div>
        {/if}
        <div class="tsui-content-panel">
            {#if !isSingle && $$slots['sidebar']}
            <div class="tsui-sidebar">
                <slot name="sidebar"/>
            </div>
            {/if}
            <div class="tsui-main-panel">
                <slot/>
            </div>
            {#if !isSingle && $$slots['sidebar-right']}
                <div class="tsui-sidebar-right">
                    <slot name="sidebar-right"/>
                </div>
            {/if}
        </div>
        {#if !isSingle && $$slots['footer']}
        <div class="tsui-footer">
            <slot name="footer"/>
        </div>
        {/if}
    </div>
</div>

<MessageBoxPanel {title} buttonClass={DialogButton}/>
<TicatecIndicator/>
<TicatecToast/>