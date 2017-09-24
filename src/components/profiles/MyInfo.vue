<template>
<div>
    <form class="ui form">
      <h4 class="ui dividing header">Profiles Information</h4>
      <div class="field">
        <label>姓名</label>
        <div class="field">
          <div class="twelve wide field">
            <input type="text" name="username" placeholder="Name">
          </div>
        </div>
      </div>
      <div class="field">
        <label>电话</label>
        <div class="field">
          <div class="twelve wide field">
            <input type="text" name="mobile" placeholder="mobile">
          </div>
        </div>
      </div>
      <div class="field">
        <label>邮箱/Email</label>
        <div class="field">
          <div class="twelve wide field">
            <input type="text" name="mail" placeholder="Email">
          </div>
        </div>
      </div>
      <div class="two fields">
        <div class="field">
          <label>所属部门</label>
          <select class="ui fluid dropdown">
            <option value="">State</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="NE">Nebraska</option>
          </select>
        </div>
        <div class="field">
          <label>职位</label>
          <div class="ui fluid search selection dropdown">
            <input type="hidden" name="country">
            <i class="dropdown icon"></i>
            <div class="default text">Select Country</div>
            <div class="menu">
            <div class="item" data-value="af"><i class="af flag"></i>Afghanistan</div>
            <div class="item" data-value="ax"><i class="ax flag"></i>Aland Islands</div>
            <div class="item" data-value="al"><i class="al flag"></i>Albania</div>
            <div class="item" data-value="dz"><i class="dz flag"></i>Algeria</div>
            <div class="item" data-value="as"><i class="as flag"></i>American Samoa</div>
            <div class="item" data-value="ad"><i class="ad flag"></i>Andorra</div>
            <div class="item" data-value="ao"><i class="ao flag"></i>Angola</div>
            <div class="item" data-value="ai"><i class="ai flag"></i>Anguilla</div>
            <div class="item" data-value="ag"><i class="ag flag"></i>Antigua</div>
            <div class="item" data-value="ar"><i class="ar flag"></i>Argentina</div>
            <div class="item" data-value="am"><i class="am flag"></i>Armenia</div>
            <div class="item" data-value="aw"><i class="aw flag"></i>Aruba</div>
          </div>
           </div>
        </div>
      </div>
       <div class="field">
        <label>个人简介</label>
          <div class="field">
            <textarea></textarea>
          </div>
      </div>
      <div class="ui button" tabindex="0">Submit Order</div>
  </form>
</div>
</template>
<script>
 export default {
     name: 'My'
 }
</script>
