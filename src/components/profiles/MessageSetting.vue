<template>
<div>
    <form class="ui form">
      <div class="grouped fields">
        <label for="fruit"选择信息提示方式</label>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="msgStatus" checked="" tabindex="0" class="hidden">
            <label>始终提示新信息</label>
          </div>
        </div>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="msgStatus" tabindex="0" class="hidden">
            <label>只在平台上提示</label>
          </div>
        </div>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="msgStatus" tabindex="0" class="hidden">
            <label>在平台上提示，并发送邮件</label>
          </div>
        </div>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="msgStatus" tabindex="0" class="hidden">
            <label>不显示新信息</label>
          </div>
        </div>
      </div>
        <div class="ui button" tabindex="0">Submit Order</div>
    </form>
</div>
</template>
<script>
export default {
    name: 'MessageSetting'
}
</script>
