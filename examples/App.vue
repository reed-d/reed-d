<template>
  <div class="rd-button">
    <rd-button type="primary">提交</rd-button>
    <rd-button>提交</rd-button>
    <rd-button type="dashed">提交</rd-button>
    <rd-button type="text">text</rd-button>
    <rd-button type="link">link</rd-button>
    <br/>
    <rd-button shape="round" type="primary">提交</rd-button>
    <rd-button shape="circle" type="primary">O</rd-button>
    <br/>
    <rd-button type="primary" size="large">确定</rd-button>
    <rd-button size="small">确定</rd-button>
    <br/>
    <rd-button type="primary" danger>提交</rd-button>
    <rd-button danger>提交</rd-button>
    <rd-button type="dashed" danger>提交</rd-button>
    <rd-button type="text" danger>text</rd-button>
    <rd-button type="link" danger>link</rd-button>
    <br/>
    <rd-button type="primary" size="middle" shape="circle">
      <span class="iconfont icon-sousuo-xianxing"></span>
    </rd-button>
    <rd-button shape="round">
      <template #icon-left>
        <span class="iconfont icon-sousuo-xianxing"></span>
      </template>
      搜索
    </rd-button>
    <rd-button type="primary" loading>
      加载中...
    </rd-button>
    <rd-button type="primary" loading size="middle" shape='circle'></rd-button>
    <br/>
    <div style="width:500px;margin:0 auto">
      <rd-button block>
        <template #icon-left><span class="iconfont icon-sousuo-xianxing"></span></template>
        搜索
      </rd-button>
      <br/>
      <rd-button block type="dashed" shape="round">提交</rd-button>
      <br/>
      <rd-button block type="primary">确定</rd-button>
    </div>
    <br/>
    <rd-button disabled>
      发送(disabled)
    </rd-button>
    <rd-button type="text" disabled>
      text(disabled)
    </rd-button>
    <rd-button type="link" disabled>
      link(disabled)
    </rd-button>
  </div>
  <hr/>
  <div class="avatar">
    <rd-avatar :padding='5' shade imgSrc="http://8.142.19.67:3000/images/cat1.jpg"/>
    <rd-avatar :padding='2' shade imgSrc="http://8.142.19.97:3000/images/cat.jpg"/>
    <rd-avatar :padding='2' shade shape="square" imgSrc="http://8.142.19.67:3000/images/cat2.jpg"/>
    <rd-avatar size="small" bg="green">Tom</rd-avatar>
    <rd-avatar bg="pink">Alen</rd-avatar>
    <rd-avatar bg="blue">Jack</rd-avatar>
  </div>
  <hr/>
  <div class="table">
    <rd-table :columns="columns" :dataSource="[]" loading strip>
      <template #headerCell="{column}">
        <template v-if="column.key=='name'">
          <span>😊{{column.title}}</span>
        </template>
      </template>
      <template #bodyCell="{column,text,index,record}">
        <template v-if="column.key=='name'">
          <a href="">{{text}}</a>
        </template>
        <template v-if="column.key=='action'">
          <button @click="edit(record,index)">编辑</button>
          <button @click="del(record,index)">删除</button>
        </template>
      </template>
      <template #footer><h4>表尾</h4></template>
      <template #title><h4>标题</h4></template>
    </rd-table>
    <hr>
    <rd-table :columns="columns" :dataSource="[]" strip>
      <template #headerCell="{column}">
        <template v-if="column.key=='name'">
          <span>😊{{column.title}}</span>
        </template>
      </template>
      <template #bodyCell="{column,text,index,record}">
        <template v-if="column.key=='name'">
          <a href="">{{text}}</a>
        </template>
        <template v-if="column.key=='action'">
          <button @click="edit(record,index)">编辑</button>
          <button @click="del(record,index)">删除</button>
        </template>
      </template>
      <template #footer><h4>表尾</h4></template>
      <template #title>标题</template>
    </rd-table>
    <hr>
    <rd-table @change="handleChange" @expand = "handleExpand" :columns="columns" :dataSource="data" border strip>
      <template #headerCell="{column}">
        <template v-if="column.key=='name'">
          <span>😊{{column.title}}</span>
        </template>
      </template>
      <template #bodyCell="{column,text,index,record}">
        <template v-if="column.key=='name'">
          <a href="">{{text}}</a>
        </template>
        <template v-if="column.key=='action'">
          <button @click="edit(record,index)">编辑</button>
          <button @click="del(record,index)">删除</button>
        </template>
      </template>
      <template #footer><h4>表尾</h4></template>
      <template #title><h4>标题</h4></template>
      <template #expandeRowRender="{record}">
        {{record.describe}}
      </template>
    </rd-table>
    <hr>
    <rd-table :columns="columns" :dataSource="data" :scroll="{width:600}" strip>
      <template #headerCell="{column}">
        <template v-if="column.key=='name'">
          <span>😊{{column.title}}</span>
        </template>
      </template>
      <template #bodyCell="{column,text,index,record}">
        <template v-if="column.key=='name'">
          <a href="">{{text}}</a>
        </template>
        <template v-if="column.key=='action'">
          <button @click="edit(record,index)">编辑</button>
          <button @click="del(record,index)">删除</button>
        </template>
      </template>

    </rd-table>
    <hr>
    <rd-table :columns="columns" :dataSource="data" :scroll="{height:200}" strip>
      <template #headerCell="{column}">
        <template v-if="column.key=='name'">
          <span>😊{{column.title}}</span>
        </template>
      </template>
      <template #bodyCell="{column,text,index,record}">
        <template v-if="column.key=='name'">
          <a href="">{{text}}</a>
        </template>
        <template v-if="column.key=='action'">
          <button @click="edit(record,index)">编辑</button>
          <button @click="del(record,index)">删除</button>
        </template>
      </template>

    </rd-table>
  </div  >
  <hr/>
  <rd-select style="width: 300px"></rd-select>
  <rd-breadcrumb></rd-breadcrumb>
  <rd-checkbox></rd-checkbox>
  <rd-input style="width: 300px"></rd-input>

</template>
<script setup lang='ts'>
import {reactive} from 'vue'
import RdSelect from "~/lib/select/src/main.vue";
import RdBreadcrumb from "~/lib/breadcrumb/src/breadcrumb.vue";
import RdCheckbox from "~/lib/Ckeckbox/src/Checkbox.vue";
import RdInput from "~/lib/input/main.vue";
type TableData = {
  key:string;
  name:string;
  sex:string;
  age:number;
  address:string;
  describe:string;
}
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 300
  },
  {
    title: 'Sex',
    dataIndex: 'sex',
    key: 'sex',
    width:200,
    filters: [
      {text: 'man', value: 'man'},
      {text: 'femal', value: 'femal'}
    ],
    onFilter: (value: string, record: TableData) => {
      return record.sex===value
    }
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    sort: (arg1:TableData, arg2:TableData) => {
      return arg1.age-arg2.age
    }
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    width: 300
  },
  {
    title: 'action',
    key: 'action',
    width: 300
  }
];
const datas = [
  {
    key: '1',
    name: 'John Brown',
    sex:'man',
    age: 32,
    address: 'New York No. 1 Lake Park',
    describe:"I am John Brown, a hansome man.Working in ByteDance as a front"
  },
  {
    key: '2',
    name: 'Jim Green',
    sex: 'femal',
    age: 42,
    address: 'London No. 1 Lake Park',
    describe:"I am Jim Green, a miss, fall in love with John Brown"
  },
  {
    key: '3',
    name: 'Joe Black',
    sex: 'man',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    describe: "I am Joe Black,I am 32 years old"
  },
  {
    key: '4',
    name: 'Joe Green',
    sex: 'femal',
    age: 35,
    address: 'Sidney No. 1 Lake Park',
    describe: "I am Joe Green ,I am dreaming to work for ByteDance"
  },
  {
    key: '5',
    name: 'Joe Json',
    sex: 'man',
    age: 37,
    address: 'Sidney No. 1 Lake Park',
    describe: "I am Joe Json, 37 years old"
  },
  {
    key: '6',
    name: 'Joe Jackson',
    sex: 'man',
    age: 39,
    address: 'Sidney No. 1 Lake Park',
    describe: "I am Joe Jackson, 39 years old"
  },
];
const data = reactive(datas)
type Data = {
  key: string,
  name: string,
  age: number,
  address: string
}
const edit = (record:Data,index:number) => {
  console.log(record,index)
  record.age=18
}
const del = (record:Data,index:number) => {
  console.log(record,index)
}
const handleExpand = (record:Data) => {
  console.log(record)
}
const handleChange = (dataSource:TableData) => {
  console.log(dataSource)
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{
  margin:10px;
}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

