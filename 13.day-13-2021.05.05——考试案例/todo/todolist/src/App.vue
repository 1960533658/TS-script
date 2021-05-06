<template>
  <div class="main">
    <h2>小目标列表</h2>
    <div class="list">
      <h3>添加小目标</h3>
      <input
        type="text"
        class="text-keyword"
        placeholder="输入小目标后，按回车确认"
        v-model="taskname"
        @keyup.enter="handleAdd"
      />
      <p>
        共有个{{ taskList.length }}目标，已完成{{
          taskList.length - unFinish
        }}个，还有{{ unFinish }}条未完成
      </p>
    </div>
    <ul>
      <li
        class="li1"
        v-for="(item, index) in taskList"
        :key="item.id"
        :data-index="index"
      >
        <div>
          <span
            class="status-span"
            :class="{ 'status-end': item.status }"
            @click="handleChange(item.id)"
          ></span>
          <span>{{ item.name }}</span>
          <span class="close" @click="handleDel(item.id)">X</span>
        </div>
        <input type="text" class="text2" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    type taskType = {
      id: number;
      name: string;
      status: boolean;
    };

    const taskList: Array<taskType> = reactive([
      { id: 0, name: "我今天要去吃肘子", status: false },
      { id: 1, name: "我今天要去吃樱桃", status: true },
      { id: 2, name: "我今天要去吃西瓜", status: true },
      { id: 3, name: "我今天要去吃土", status: false },
    ]);

    const taskname = ref<string>("");

    const handleAdd = () => {
      console.log(taskname.value);

      if (taskname.value.trim().length == 0) return alert("任务名称不能为空");
      const task: taskType = {
        id: taskList.length,
        name: taskname.value,
        status: false,
      };

      taskname.value = "";
      taskList.push(task);
    };
    const unFinish = computed(
      () => taskList.filter((item) => !item.status).length
    );

    const handleDel = (id) => {
      const index = taskList.findIndex((item) => item.id == id);
      console.log(index);
      taskList.splice(index, 1);
    };

    const handleChange = (id) => {
      const index = taskList.findIndex((item) => item.id == id);
      taskList[index].status = !taskList[index].status;
    };
    return {
      taskname,
      taskList,
      handleAdd,
      unFinish,
      handleDel,
      handleChange,
    };
  },
});
</script>

<style>
.hidden {
  display: none;
}

.main {
  width: 800px;
  margin: 0 auto;
}

li {
  list-style-type: none;
  line-height: 40px;
  position: relative;
  border: 1px solid transparent;
  padding: 0 20px;
}

li .status-span {
  display: block;
  width: 10px;
  height: 10px;
  background: #ccc;
  margin: 14px 10px 0 0;
  float: left;
}

li .status-span.status-end {
  background: #09f;
}

li .close {
  position: absolute;
  color: #f00;
  font-size: 20px;
  line-height: 40px;
  height: 40px;
  right: 20px;
  cursor: pointer;
  display: none;
  top: 0;
}

li:hover {
  border: 1px solid #09f;
}

li:hover .close {
  display: block;
}

li div {
  display: block;
}

li.eidting div {
  display: none;
}

li .text2 {
  height: 40px;
  padding-left: 10px;
  box-sizing: border-box;
  margin-left: 10px;
  width: 80%;
  display: none;
}

li.eidting .text2 {
  display: block;
}

li .text-keyword {
  height: 40px;
  padding-left: 10px;
  box-sizing: border-box;
  margin-left: 10px;
  width: 80%;
  display: none;
}

.text-keyword {
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  padding-left: 10px;
  outline: none;
}
</style>
