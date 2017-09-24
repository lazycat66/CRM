<template>
<div>
    <div class="ui secondary pointing menu">
      <a class="item" :class="{'active': channel=='profiles'}" @click="switchChannel('profiles')">
        Profiles Setting
      </a>
      <a class="item" :class="{'active': channel=='msg'}" @click="switchChannel('msg')">
        Messages Setting
      </a>
    </div>
    <div class="content">
        <my-info v-if="channel=='profiles'"></my-info>
        <msg-setting v-if="channel=='msg'"></msg-setting>
    </div>
</div>
</template>
<script>
import MyInfo from '@/components/profiles/MyInfo'
import MsgSetting from '@/components/profiles/MessageSetting'
export default {
    name: 'Account',
    data(){
        return {
            channel: 'profiles'
        }
    },
    methods:{
        switchChannel(type){
            this.channel = type;
        }
    },
    components: {
        MyInfo,
        MsgSetting
    }
}
</script>
