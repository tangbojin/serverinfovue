<template>
  <div id="">
    <div style="display: flex;flex-direction: row">
      <div style="width: 700px;margin-left: 100px">
        <table class="layui-table">
          <colgroup>
            <col width="200">
            <col width="200">
          </colgroup>
          <thead>
          <tr>
            <td style="column-span: 2">CPU信息</td>
          </tr>
          </thead>
          <tr>
            <th style="text-align: center">属性</th>
            <th style="text-align: center">值</th>
          </tr>
          <tbody>
          <tr>
            <td>CPU核心线程数</td>
            <td>{{cpu.cpuNum}}核</td>
          </tr>
          <tr>
            <td>CPU系统使用量</td>
            <td>{{cpu.sys}}%</td>
          <tr>
            <td>CPU用户使用量</td>
            <td>{{cpu.used}}%</td>
          <tr>
            <td>CPU当前等待</td>
            <td>{{cpu.wait}}</td>
          <tr>
            <td>CPU当前空闲</td>
            <td>{{cpu.free}}%</td>
          </tr>
          <tr>
            <td>当前进程数</td>
            <td>{{cpu.processCount}}</td>
          </tr>
          <tr>
            <td>当前线程数</td>
            <td>{{cpu.threadCount}}</td>
          </tr>
          <tr>
            <td>当前温度</td>
            <td>{{cpu.temperature}}</td>
          </tr>
          <tr>
            <td>当前电压</td>
            <td>{{cpu.voltage}}</td>
          </tr>
          </tbody>
        </table>
      </div>

      <div style="width: 800px;margin-left: 100px;display: flex;flex-direction: column">
        <table class="layui-table">
          <colgroup>
            <col width="200">
            <col width="200">
            <col width="200">
            <col width="200">
            <col width="200">
          </colgroup>
          <thead>
          <tr>
            <td style="column-span: 2">系统存储信息</td>
          </tr>
          </thead>
          <tr>
            <th style="text-align: center">盘符路径</th>
            <th style="text-align: center">盘符类型</th>
            <th style="text-align: center">总大小</th>
            <th style="text-align: center">剩余大小</th>
            <th style="text-align: center">已经使用量</th>
            <th style="text-align: center">资源的使用率</th>
          </tr>
          <tbody>
            <tr v-for="(sysFiles,index) in sysFiles" :key="index">
              <td>{{sysFiles.dirName}}</td>
              <td>{{sysFiles.sysTypeName}}</td>
              <td>{{sysFiles.total}}</td>
              <td>{{sysFiles.free}}</td>
              <td>{{sysFiles.used}}</td>
              <td>{{sysFiles.usage}}</td>
            </tr>
          </tbody>
        </table>

        <table class="layui-table">
          <colgroup>
            <col width="200">
            <col width="200">
          </colgroup>
          <thead>
          <tr>
            <td style="column-span: 2">内存信息</td>
          </tr>
          </thead>
          <tr>
            <th  style="text-align: center">属性</th>
            <th  style="text-align: center">值</th>
          </tr>
          <tbody>
          <tr>
            <td>内存总量</td>
            <td>{{mem.total}}G</td>
          </tr>
          <tr>
            <td>已用内存</td>
            <td>{{mem.used}}G</td>
          </tr>
          <tr>
            <td>剩余内存</td>
            <td>{{mem.free}}G</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div style="display: flex;flex-direction: row">
      <div style="width: 700px;margin-left: 100px">
        <table class="layui-table">
          <colgroup>
            <col width="200">
            <col width="200">
          </colgroup>
          <thead>
          <tr>
            <td style="column-span: 2">系统信息</td>
          </tr>
          </thead>
          <tr>
            <th style="text-align: center">属性</th>
            <th style="text-align: center">值</th>
          </tr>
          <tbody>
          <tr>
            <td>服务器名称</td>
            <td>{{sys.computerName}}</td>
          </tr>
          <tr>
            <td>服务器Ip</td>
            <td>{{sys.computerIp}}</td>
          </tr>
          <tr>
            <td>项目路径</td>
            <td>{{sys.userDir}}</td>
          </tr>
          <tr>
            <td>操作系统</td>
            <td>{{sys.osName}}</td>
          </tr>
          <tr>
            <td>系统架构</td>
            <td>{{sys.osArch}}</td>
          </tr>
          </tbody>
        </table>
      </div>

      <div style="width: 800px;margin-left: 100px">
        <table class="layui-table">
          <colgroup>
            <col width="200">
            <col width="200">
          </colgroup>
          <thead>
          <tr>
            <td style="column-span: 2">JVM信息</td>
          </tr>
          </thead>
          <tr>
            <th style="text-align: center">属性</th>
            <th style="text-align: center">值</th>
          </tr>
          <tbody>
          <tr>
            <td>JVM占用的内存总数</td>
            <td>{{jvm.total}}M</td>
          </tr>
          <tr>
            <td>JVM最大可用内存数</td>
            <td>{{jvm.max}}M</td>
          </tr>
          <tr>
            <td>JVM空闲内存</td>
            <td>{{jvm.free}}M</td>
          </tr>
          <tr>
            <td>JDK版本</td>
            <td>{{jvm.version}}</td>
          </tr>
          <tr>
            <td>JDK路径</td>
            <td>{{jvm.home}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!--<div style="width: 800px;margin-left: 100px">
      <table class="layui-table">
        <colgroup>
          <col width="200">
          <col width="200">
        </colgroup>
        <thead>
        <tr>
          <td style="column-span: 2">Nvidia GPU信息</td>
        </tr>
        </thead>
        <tr>
          <th style="text-align: center">属性</th>
          <th style="text-align: center">值</th>
        </tr>
        <tbody>
        <tr>
          <td>GPU驱动版本</td>
          <td>{{gpu.driverVersion}}</td>
        </tr>
        <tr>
          <td>GPU产品名称</td>
          <td>{{gpu.productName}}</td>
        </tr>
        <tr>
          <td>GPU性能状态</td>
          <td>{{gpu.performanceState}}</td>
        </tr>
        <tr>
          <td>GPU总显存</td>
          <td>{{gpu.totalMem}}</td>
        </tr>
        </tbody>
      </table>
    </div>-->

  </div>
</template>

<script>
  export default {
    name: "SystemInfo",
    data() {
      return {
        cpu: [],
        mem: [],
        jvm: [],
        sys: [],
        sysFiles: [],
        gpu:[],
        fileLength:1
      }
    },
    mounted: function () {
      this.loadAllData();
    },
    methods: {
      loadAllData() {
        var _this = this;
        this.postRequest('/osinfo', {}).then(resp => {
          _this.loading = false;
          if (resp) {
            console.log(resp);
            _this.cpu = resp.data.cpu;
            _this.mem = resp.data.mem;
            _this.jvm = resp.data.jvm;
            _this.sys = resp.data.sys;
            _this.sysFiles = resp.data.sysFiles;
            _this.gpu = resp.data.gpu;
          }
        });
      }
    }
  }
</script>

<style scoped>

</style>
