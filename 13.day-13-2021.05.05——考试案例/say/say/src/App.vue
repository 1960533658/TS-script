<template>
  <div id="app" class="container">
    <h3>留言板:</h3>
    <div class="form-group" style="max-height: 300px; overflow: auto">
      <div class="row list-group-item" v-for="item in searchList" :key="item.id">
        <div class="col-md-1">{{item.name}}</div>
        <div class="col-md-5">{{item.content}}</div>
        <div class="col-md-2">{{item.time}}</div>
        <div class="col-md-4">
          <button class="btn btn-danger" type="button" @click="delMsg(item.id)">删除</button>
          <button class="btn btn-info" type="button" @click="editMsg(item.id)">修改</button>
        </div>
      </div>
    </div>
    <br /><br /><br />
    <form class="form-horizontal" v-show="!isEdit">
      <div class="form-group">
        <label for="search" class="col-sm-1 control-label">搜索</label>
        <div class="col-sm-11">
          <input
            type="text"
            class="form-control"
            id="search"
            placeholder="搜索留言"
            v-model="keywords"
          />
        </div>
      </div>
      <div class="form-group">
        <label for="nikename" class="col-sm-1 control-label">昵称</label>
        <div class="col-sm-11">
          <input
            type="text"
            class="form-control"
            id="nikename"
            placeholder="请输入昵称"
            v-model="name"
          />
        </div>
      </div>
      <div class="form-group">
        <label for="content" class="col-sm-1 control-label">内容</label>
        <div class="col-sm-11">
          <textarea id="content" class="form-control" rows="3" v-model="content"></textarea>
        </div>
      </div>
      <button
        type="button"
        class="btn btn-success col-sm-1 col-sm-push-9"
        @click="addMsg"
      >
        发表
      </button>
      <button type="button" class="btn btn-danger col-sm-1 col-sm-push-10" @click="clear">
        清屏
      </button>
    </form>
    <!-- 修改 -->
    <form class="form-horizontal" v-show="isEdit">
      <input type="hidden" ref="hide" />
      <div class="form-group">
        <label class="col-sm-1 control-label">修改：</label>
        <div class="col-sm-11">
          <textarea
            class="form-control"
            rows="3"
            v-model="editValue"
          ></textarea>
        </div>
      </div>
      <button type="button" class="btn btn-success col-sm-1 col-sm-push-11" @click="confirmMSg">
        确认修改
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    const getime = () => {
      let time: string = "";
      let date = new Date()
      time+= date.getFullYear()+'-';
      time+= date.getMonth()+1+'-';
      time+= date.getDate()+'-';
      time+= date.getHours()+':';
      time+= date.getMinutes()
      return time
    }

    type msgType = {
      id: number,
      name: string,
      content: string,
      time: string
    }

    const msgList: Array<msgType> = reactive([
      {id: 0,name: "笑话",content: "今天天气真好",time: getime(),},
      {id: 1,name: "小草",content: "是呀，那咱们出去晒太阳吧",time: getime(),},
    ])
    const keywords = ref<string>("")
    const searchList = computed(() => {
      return msgList.filter((item) => {
        return (item.name.includes(keywords.value)|| item.content.includes(keywords.value))
      })
    })


    const name = ref<string>("");
    const content = ref<string>("")
    const addMsg = () => {
      if(name.value.trim().length == 0 || content.value.length == 0) alert("请添加你的昵称或者内容")
      msgList.push({
        id: msgList.length,
        name: name.value,
        content: content.value,
        time: getime()
      })

      name.value = "";
      content.value = "";
    }

    const delMsg = (id) => {
      console.log(id);
      const index = msgList.findIndex(item => item.id == id)
      msgList.splice(index,1)
    }

    const isEdit = ref<boolean>(false)
    const editValue = ref<string>("");
    const currentId = ref<number>()

    const editMsg = (id) => {
      console.log(id);
      msgList.some(item => {
        if(item.id == id) {
          isEdit.value = true;
          currentId.value = id;
          editValue.value = item.content
          return true
        }
      })
    }

    const confirmMSg = () => {
      if (editValue.value.trim().length == 0) alert("ssss")
      msgList.some(item => {
        item.content = editValue.value;
        isEdit.value = !isEdit.value;
        return true
      })
    }

    const clear = ()=> {
      msgList.splice(0,msgList.length)
    }
    return {
      searchList,
      keywords,
      name,
      content,
      addMsg,
      delMsg,
      isEdit,
      editValue,
      currentId,
      editMsg,
      confirmMSg,
      clear
    }
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
