<template>
  <q-page class="bg-grey-3 column">
    <div class="row q-pa-sm bg-primary">
      <q-input v-model="newTask"
               @keyup.enter="addTask"
               class="col" square box filled bg-color="white" placeholder="Add Task">
        <template>
          <q-btn @click="addTask" round flat icon="add" />
        </template>
      </q-input>
    </div>
    <q-list class="bg-white" separator borded>
      <q-item v-for="(task, index) in tasks"
              :key="task.title"
              @click="task.done = !task.done"
              :class="{ 'done bg-blue-1' : task.done }"
              clickable
              v-ripple>
        <q-item-section avatar>
          <q-checkbox v-model="task.done" class="no-pointer-events" color="primary" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{task.title}}</q-item-label>
        </q-item-section>
        <q-item-section v-if="task.done" side>
          <q-btn @click.stop="deleteTask(index)"
                 flat
                 round
                 color="primary" icon="delete" />
        </q-item-section>
      </q-item>
    </q-list>
    <div v-if="!tasks.length"
         class="absolute-center">
      <q-icon name="check" size="100px" color="primary"></q-icon>
      <div class="text-h5 text-center text-primary">No Task</div>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      newTask: '',
      tasks: [
        // { title: 'Get Bananas', done: false },
        // { title: 'Eat Bananas', done: false },
        // { title: 'Poo Bananas', done: false }
      ]
    }
  },
  methods: {
    addTask () {
      this.tasks.push({
        title: this.newTask,
        done: false
      })
      this.newTask = ''
    },
    deleteTask (index) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Really Delete?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        // console.log('deleteTask: ', index)
        this.tasks.splice(index, 1)
        this.$q.notify({ message: 'Task deleted.' })
      })
    }
  }
}
</script>

<style lang="scss">
  .done {
    .q-item__label {
      text-decoration: line-through;
      color: #bbb;
    }
  }
</style>
