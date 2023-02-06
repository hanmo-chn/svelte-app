<script lang="ts">

    import {onMount} from "svelte";
    import {AppTabContainer} from "../lib";
    import DemoHome from "./DemoHome.svelte";

    let module;

    let tabItems = [
        {id: 'tab1', label: '客户管理', component: DemoHome},
        {id: 'tab2', label: '订单管理', component: DemoHome},
        {id: 'tab3', label: '任务管理', component: DemoHome},
        {id: 'tab4', label: '设备管理', component: DemoHome},
        {id: 'tab5', label: '能源管理', component: DemoHome},
        {id: 'tab6', label: '物料管理', component: DemoHome},
        {id: 'tab7', label: '工艺管理', component: DemoHome},
        {id: 'tab8', label: '物流管理', component: DemoHome},
        {id: 'tab9', label: '集运管理', component: DemoHome}
    ]


    onMount(()=>{
        console.log('组件参数:', $$props);
        tabItems.forEach(item=>{
            tabContainer.open(item.id, item.label, item.component);
        })
    });

    let tabContainer;
</script>

<AppTabContainer maxTabs={6} bind:this={tabContainer}/>


