<script lang="ts">
    import {DialogBase} from "@hanmotec/tsui-app-module";
    import {createEventDispatcher} from "svelte";
    import DialogControlBar from "./DialogControlBar.svelte";
    import FormContainer, {Row, Col} from '@hanmotec/tsui-form-layout';
    import FormField from '@hanmotec/tsui-form-field';
    import TextField from "./components/TextField.svelte";
    import {utils} from "@ticatec/enhanced-utils";

    export let item;

    let dispatch = createEventDispatcher();


    const handleSaveData = async () => {
        console.log('处理保存数据');
        Indicator.show('保存数据...');
        await utils.sleep(4);//(()=>{Indicator.hide()}, 4000);
        Indicator.hide();
        return true;
    }

</script>
<DialogBase height="60%" width="80%" title="新增用户管理">
    <FormContainer class="app-form">
        <Row>
            <Col span="3">
                <FormField label="姓名" required={true} error="用户不存在">
                    <input style="width: 100%; box-sizing: border-box" value={item.name}>
                </FormField>
            </Col>
            <Col span="3">
                <FormField label="生日">
                    <input style="width: 100%; box-sizing: border-box" value={item.name}>
                </FormField>
            </Col>
            <Col span="3">
                <FormField label="电话">
                    <textarea rows="6"/>
                </FormField>
            </Col>
            <Col span="3">
                <FormField label="电话">
                    <TextField/>
                </FormField>
            </Col>
        </Row>
        <Row>
            <Col span="4">
                <span>col 1</span>
            </Col>
            <Col span="4">
                <span>col 2</span>
            </Col>
            <Col span="4">
                <span>col 3</span>
            </Col>
        </Row>
        <Row>
            <Col span="4">
                <span>col 1</span>
            </Col>
            <Col span="4">
                <span>col 2</span>
            </Col>
            <Col span="4">
                <span>col 3</span>
            </Col>
        </Row>
    </FormContainer>
    <svelte:fragment slot="control-bar">
        <DialogControlBar on:close saveHandler={handleSaveData}/>
    </svelte:fragment>
</DialogBase>