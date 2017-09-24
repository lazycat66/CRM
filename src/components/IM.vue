<template>
<div class="im-wrap" flex="dir:left">
    <div class="im-menu" flex-box="0">
      <ul>
          <li>
              <div flex="dir:left">
                  <div class="photo" flex-box="0">
                      <img src="" width="50" height="50" />
                  </div>
                  <div class="cont-box" flex-box="1">
                      <div class="panel-a" flex="dir:left">
                          <span class="name" flex-box="1">李小姐</span>
                          <span class="time" flex-box="0">10:00</span>
                      </div>
                      <span class="msg-c">last msg</span>
                  </div>
              </div>
          </li>
          <li>
              <div flex="dir:left">
                  <div class="photo" flex-box="0">
                      <img src="" width="50" height="50" />
                  </div>
                  <div class="con-box" flex-box="1">
                      <div>
                          <span>name</span>
                          <span>10:00</span>
                      </div>
                      <span>last msg</span>
                  </div>
              </div>
          </li>
      </ul>
    </div>
    <div class="im-content" flex-box="1">
        <div class="msg-poor">
            <div class="msg-wrap other">
                <span class="msg-box">刚拿到树莓派的时候就迫不及待发了开箱首秀，今天工作之余，借同事的HDMI显示器体验
下Raspbian和UbuntuMate系统的。
首先需要你到raspberrypi官网下载这两个系统文件
下载完成以后，使用win32 disk imager软件将系统镜像写入到8GB内存卡中，至少8GB的
内存卡，4GB不够用。另外，在写入之前组好用电脑低格一下，格式化为fat文件系统。
镜像文件写入成功后，Windows电脑资源管理器显示8GB已经占用完了，这个是因为
Windows不能识别显示该类型分区，其实系统只占用了一部分空间，后续再Linux系统中可
以拓展使用整个磁盘。</span>
            </div>
            <div class="msg-wrap me">
                <span class="msg-box">然后，打开SD卡，打开/boot/config.txt文件，修改hdmi_safe=1，将前面的#号去掉（raspberryPi
以#开头为注释）。</span>
            </div>
            <div class="msg-wrap other">
                <span class="msg-box">知道了 谢谢</span>
            </div>
            <div class="msg-wrap me">
                <span class="msg-box">不客气</span>
            </div>
        </div>
        <div class="msg-input">
            <div>
                <textarea></textarea>
            </div>
            <div flex="main:right">
                <button class="ui primary button">发送</button>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import 'assets/less/im.less'
</script>
