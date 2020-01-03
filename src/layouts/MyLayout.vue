<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />
      </q-toolbar>
      <div class="q-px-lg q-pt-xl q-mb-md">
        <div class="text-h3">ToDO</div>
        <div class="text-subtitle1">{{todaysDate}}</div>
<!--        <q-toolbar inset>
          <q-breadcrumbs active-color="white" style="font-size: 16px">
            <q-breadcrumbs-el label="Home" />
            <q-breadcrumbs-el label="Components" />
            <q-breadcrumbs-el label="Toolbar" />
          </q-breadcrumbs>
        </q-toolbar>-->
      </div>
      <q-img src="statics/moutain.jpg" class="header-image absolute-top"></q-img>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="250"
      :breakpoint="600"
    >
      <q-scroll-area style="height: calc(100% - 192px); margin-top: 192px; border-right: 1px solid #ddd">
        <q-list padding>
          <q-item to="/" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="list" />
            </q-item-section>

            <q-item-section>
              ToDo
            </q-item-section>
          </q-item>

          <q-item to="/card" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="payment" />
            </q-item-section>

            <q-item-section>
              Card
            </q-item-section>
          </q-item>

          <q-item to="/timeline" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="timeline" />
            </q-item-section>

            <q-item-section>
              TimeLine
            </q-item-section>
          </q-item>

          <q-item to="/tab" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="view_list" />
            </q-item-section>

            <q-item-section>
              Tab
            </q-item-section>
          </q-item>

          <q-item to="/help" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="help" />
            </q-item-section>

            <q-item-section>
              Help
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img class="absolute-top" src="statics/moutain.jpg" style="height: 192px">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
          <div class="text-weight-bold">Baguju</div>
          <div>parkhg@gmail.com</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { date } from 'quasar'

export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false
    }
  },
  computed: {
    todaysDate () {
      let timeStamp = Date.now()
      return date.formatDate(timeStamp, 'YYYY-MM-DD')
    }
  }
}
</script>
<style lang="scss">
  .header-image {
    height: 100%;
    z-index: -1;
    opacity: 0.2;
    filter: grayscale(100%);
  }
</style>
