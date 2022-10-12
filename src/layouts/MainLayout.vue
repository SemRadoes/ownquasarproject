<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Sem Radoes
        </q-toolbar-title>
        <div class="subpages">
          <div class="nav" @click="navigate(route_names.projects)">Projects</div>
          <div class="nav" @click="navigate(route_names.more_info)">More info</div>
        </div>
        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
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
<style lang="scss">
  .subpages{
    display: flex;
    gap: 2rem;
    margin-right: auto;
  }
  .nav{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', serif;
    font-size: large;
    &:hover{
      cursor: pointer;
    }

  }
  
</style>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import EssentialLink from 'components/EssentialLink.vue';
import {route_names} from 'src/router/routes';
const linksList = [
  
  {
    title: 'Github',
    caption: 'github.com/SemRadoes',
    icon: 'github',
    link: 'https://github.com/SemRadoes'
  },
  {
    title: 'LinkedIn',
    caption: 'Sem Radoes',
    icon: 'linkedin-box',
    link: 'https://www.linkedin.com/in/sem-radoes-873435196/'
  },
  {
    title: 'Facebook',
    caption: '@Sem Radoes',
    icon: 'facebook',
    link: 'https://www.facebook.com/sem.radoes'
  }
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)
    const router = useRouter();

    const navigate = (name: string) => {
      // void router.push('/); Navigate to Dashboard
      // void router.push('/heroes'); Navigate to HeroList
      void router.push({name});
    };
    return {
      navigate,
      route_names,
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
});
</script>
