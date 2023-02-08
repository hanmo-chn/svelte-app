
<script lang="ts">

    import {fade} from "svelte/transition";
    import {ModalResult, initialize} from "./MessageBox";
    import {onMount, SvelteComponent} from "svelte";
    import Buttons from "./Buttons";

    export let buttonClass: SvelteComponent;
    export let cancellable:boolean = false;

    let visible = false;
    let title = '';
    let type: 'warning' | 'question' | 'info' = 'info';
    let message: string = '';
    let buttons: number = Buttons.BTN_OK | Buttons.BTN_CLOSE;
    let callback: ActionCallback;
    type ActionCallback = (result: any) => void;

    const showMessage = (_message: string, _callback: ActionCallback = null): void => {
        type = 'info';
        buttons = Buttons.BTN_CLOSE;
        showBox(_message, _callback);
    }

    const showConfirmMessage = (_message: string, _callback: ActionCallback, _type: 'warning' | 'question' = 'warning' ): void => {
        buttons = Buttons.BTN_YES | Buttons.BTN_CANCEL;
        type = _type;
        showBox(_message, _callback);
    }

    const showBox = (_message: string, _callback: ActionCallback): void => {
        visible = true;
        // @ts-ignore
        title = window.MessageBox.title || '信息提示';
        callback = _callback;
        message = _message;
    }

    let enableClick = true;

    const handleButtonClick = async (e:Event, result: number):Promise<void> => {
        if (enableClick) {
            enableClick = false;
            visible = false;
            callback && callback(result);
            setTimeout(()=>{
                enableClick = true;
            }, 100);
        }
        e.stopPropagation();
        e.preventDefault();
    }

    onMount(()=>{
        initialize(showMessage, showConfirmMessage);
    })


</script>

{#if visible}
    <div tabindex="-1" class="tsui-message-box-wrapper" transition:fade on:click={()=>{if (cancellable) visible=false}}>
        <div class="tsui-message-box">
            <div class="tsui-title-bar">
                <span>{title}</span>
            </div>
            <div class="tsui-message-content" class:question={type==='question'}>
                <span>{message}</span>
            </div>
            {#if buttonClass}
                <div class="tsui-message-box-control-bar">
                    {#if (buttons & Buttons.BTN_YES) === Buttons.BTN_YES}
                        <svelte:component this={buttonClass} button={Buttons.BTN_YES}
                                          on:click={e=>{handleButtonClick(e, ModalResult.YES)}}/>
                    {/if}
                    {#if (buttons & Buttons.BTN_CANCEL) === Buttons.BTN_CANCEL}
                        <svelte:component this={buttonClass} button={Buttons.BTN_CANCEL}
                                          on:click={e=>{handleButtonClick(e, ModalResult.CANCEL)}}/>
                    {/if}
                    {#if (buttons & Buttons.BTN_CLOSE) === Buttons.BTN_CLOSE}
                        <svelte:component this={buttonClass} button={Buttons.BTN_CLOSE}
                                          on:click={e=>{handleButtonClick(e, Buttons.BTN_CLOSE)}}/>
                    {/if}
                </div>
            {/if}
        </div>
    </div>
{/if}