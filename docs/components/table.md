# Table表格
## 何时使用

- 当有大量结构化的数据要展示时
- 当需要对数据进行筛选、排序、自定义操作等复杂行为时
## 使用方式
```js
import rdTable from 'Reed-d';
Vue.use(rdTable);
```
## 使用
### 基础用法
简单的表格，最后一列是各种操作
::: demo
```vue
<template>
	<rd-table :columns="columns" :dataSource="data">
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
</template> 
<script setup lang='ts'>
import {reactive} from 'vue'
    type TableData = {
      key:string;
      name:string;
      sex:string;
      age:number;
      address:string;
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
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
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
      },
      {
        key: '2',
        name: 'Jim Green',
        sex: 'femal',
        age: 42,
        address: 'London No. 1 Lake Park',
      },
      {
        key: '3',
        name: 'Joe Black',
        sex: 'man',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
      },
      {
        key: '4',
        name: 'Joe Green',
        sex: 'femal',
        age: 35,
        address: 'Sidney No. 1 Lake Park',
      },
      {
        key: '5',
        name: 'Joe Json',
        sex: 'man',
        age: 37,
        address: 'Sidney No. 1 Lake Park',
      },
      {
        key: '6',
        name: 'Joe Jackson',
        sex: 'man',
        age: 39,
        address: 'Sidney No. 1 Lake Park',
      },
    ];
    const data = reactive(datas)
    const edit = (record:Data,index:number) => {
  		 console.log(record,index)
 		 record.age=18
	}
	const del = (record:Data,index:number) => {
  		console.log(record,index)
	}
</script>
```
:::
### 带边框
添加边框，表头和页脚以及隔行变色
::: demo
```vue
<template>
 <rd-table :columns="columns" :dataSource="data" border strip>
      <template #headerCell="{column}">
        <template v-if="column.key=='name'">
          <span>😊{{column.title}}</span>
        </template>
      </template>
      <template #bodyCell="{column,text,index,record}">
        <template v-if="column.key=='name'">
          <a href="">{{text}}</a>
        </template>
      </template>
      <template #footer><h4>表尾</h4></template>
      <template #title><h4>标题</h4></template>
      <template #expandeRowRender="{record}">
        {{record.describe}}
      </template>
    </rd-table>
</template>
<script setup lang='ts'>
import {reactive} from 'vue'
    type TableData = {
      key:string;
      name:string;
      sex:string;
      age:number;
      address:string;
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
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
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
      },
      {
        key: '2',
        name: 'Jim Green',
        sex: 'femal',
        age: 42,
        address: 'London No. 1 Lake Park',
      },
      {
        key: '3',
        name: 'Joe Black',
        sex: 'man',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
      },
      {
        key: '4',
        name: 'Joe Green',
        sex: 'femal',
        age: 35,
        address: 'Sidney No. 1 Lake Park',
      },
      {
        key: '5',
        name: 'Joe Json',
        sex: 'man',
        age: 37,
        address: 'Sidney No. 1 Lake Park',
      },
      {
        key: '6',
        name: 'Joe Jackson',
        sex: 'man',
        age: 39,
        address: 'Sidney No. 1 Lake Park',
      },
    ];
    const data = reactive(datas)
</script>
```
:::
### 可展开
当表格内容较多不能一次性完全展示时。
::: demo
```vue
<template>
    <rd-table @expand = "handleExpand" 
    :columns="columns" :dataSource="data"  strip>
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
          <template #expandeRowRender="{record}">
            {{record.describe}}
          </template>
    </rd-table>
</template>
<script setup lang='ts'>
import {reactive} from 'vue'
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
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
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
</script>
```
:::
### 筛选和排序
对某一列数据进行筛选，使用列的 filters 属性来指定需要筛选菜单的列，onFilter 用于筛选当前数据。 对某一列数据进行排序，通过指定列的 sorter 函数即可启动排序按钮。sorter: function(rowA, rowB) { ... }， rowA、rowB 为比较的两个行数据。


### 固定表头
方便一页内展示大量数据，需要和 scroll.height配合使用
::: demo
```vue
<template>
    <rd-table :columns="columns" :dataSource="data" 
    :scroll="{height:200}" strip>
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
</template>
<script setup lang='ts'>
import {reactive} from 'vue'
type TableData = {
  key:string;
  name:string;
  sex:string;
  age:number;
  address:string;
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
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    name: 'Jim Green',
    sex: 'femal',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    sex: 'man',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Joe Green',
    sex: 'femal',
    age: 35,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '5',
    name: 'Joe Json',
    sex: 'man',
    age: 37,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '6',
    name: 'Joe Jackson',
    sex: 'man',
    age: 39,
    address: 'Sidney No. 1 Lake Park',
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
```
:::
### 固定列
对于列数很多的数据，可以固定前后的列，横向滚动查看其它数据，需要和 scroll.width配合使用。
::: demo
```vue
<template>
    <rd-table :columns="columns" :dataSource="data" 
     :scroll="{width:600}" strip>
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
</template>
<script setup lang='ts'>
import {reactive} from 'vue'
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
```
:::
### 空状态
数据为空时的状态，可配合emptyText插槽实现自定义
::: demo
```vue
<template>
 	<rd-table :columns="columns" :dataSource="data" strip>
      <template #headerCell="{column}">
        <template v-if="column.key=='name'">
          <span>😊{{column.title}}</span>
        </template>
      </template>
      <template #bodyCell="{column,text,index,record}">
        <template v-if="column.key=='name'">
          <a href="">{{text}}</a>
        </template>
      </template>
    </rd-table>
</template>
<script setup lang='ts'>
import {reactive} from 'vue'
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
const datas = [];
const data = reactive(datas)
</script>
```
:::
### 加载状态
数据加载时的状态，可配合loadingText插槽实现自定义
::: demo
```vue
<template>
 	<rd-table :columns="columns" :dataSource="data" loading strip>
      <template #headerCell="{column}">
        <template v-if="column.key=='name'">
          <span>😊{{column.title}}</span>
        </template>
      </template>
      <template #bodyCell="{column,text,index,record}">
        <template v-if="column.key=='name'">
          <a href="">{{text}}</a>
        </template>
      </template>
    </rd-table>
</template>
<script setup lang='ts'>
import {reactive} from 'vue'
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
const datas = [];
const data = reactive(datas)
</script>
```
:::

## API
### Table
| 参数             | 说明                               | 类型                                          | 默认值 |
| :--------------- | ---------------------------------- | --------------------------------------------- | ------ |
| dataSource       | 数据数组                           | object[]                                      | -      |
| border           | 是否显示表格边框                   | boolean                                       | false  |
| columns          | 表格列的配置描述，具体项见[下表]() | array                                         | -      |
| loading          | 页面是否显示数据加载中             | boolean                                       | false  |
| scroll           | 指定滚动区域的宽、高，[配置项]()   | object                                        | -      |
| strip            | 表格是否为斑马纹                   | boolean                                       | false  |
| title            | 自定义表格标题                     | v-slot: title                                 | -      |
| footer           | 自定义表格表尾                     | v-slot: footer                                | -      |
| headerCell       | 个性化头部单元格                   | v-slot: headerCell="{column}"                 | -      |
| bodyCell         | 个性化单元格                       | v-solt: bodyCell="{column,text,index,record}" | -      |
| expandeRowRender | 自定义展开行                       | v-slot: expandeRowRender="{record}"           | -      |
| emptyText        | 自定义数据为空时表格显示内容       | v-slot: emptyText                             | -      |
| loadingText      | 自定义数据加载时表格显示内容       | v-slot: loadingText                           | -      |
###  事件
| 事件名称 | 说明                           | 回调参数             |
| -------- | ------------------------------ | -------------------- |
| expand   | 点击展开扩展行图标时的回调函数 | Function(record)     |
| change   | 排序、筛选变化时触发           | Function(dataSource) |
### column

| 参数      | 说明                                                         | 类型               | 默认值 |
| --------- | ------------------------------------------------------------ | ------------------ | ------ |
| title     | 列头显示文字                                                 | string             | -      |
| dataIndex | 列数据在数据项中对应的路径，支持通过数组查询嵌套路径         | string \| string[] | -      |
| key       | Vue 需要的 key，如果已经设置了唯一的 `dataIndex`，可以忽略这个属性 | string             | -      |
| width     | 设置该列的宽度                                               | number             | 200    |
| filters   | 表头的筛选菜单项                                             | object[]           | -      |
| onFilt    | 本地模式下，确定筛选的运行函数, 使用 template 或 jsx 时作为`filter`事件使用 | Function           | -      |
| sort      | 排序函数，本地排序使用一个函数(参考 [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) 的 compareFunction) | Function           | -      |

###  scroll

| 参数   | 说明             | 类型   | 默认值 |
| ------ | ---------------- | ------ | ------ |
| width  | 指定滚动区域的宽 | number | -      |
| height | 指定滚动区域的高 | number | -      |