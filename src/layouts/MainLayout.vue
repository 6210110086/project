<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-secondary">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-avatar>
            <img src="~assets/images/sun.jpg">
          </q-avatar>
        <q-toolbar-title>
          Thai VARK
        </q-toolbar-title>

        <q-btn flat round dense icon="home" color="grey-1" @click="$router.replace('/')"/>
        <!-- <q-btn flat round dense icon="login" color="grey-1" @click="$router.replace('/login')"/> -->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
    >
      <q-list bordered class="rounded-borders">
        <q-item-label
          header
        >
          เมนู
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'หน้าหลัก',
    caption: 'Home',
    icon: 'home',
    link: 'https://project-vark.netlify.app/#/'
  },
  {
    title: 'โหมดการเรียนรู้',
    caption: 'Learning mode',
    icon: 'book',
    link: 'https://project-vark.netlify.app/#/Home'
  }
]

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
