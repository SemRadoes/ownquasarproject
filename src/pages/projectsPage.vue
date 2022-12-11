<template>
  <div class="headbar">
    <h1 class="title">Projects</h1>
    <StyledButton green style="height:fit-content; align-self:center">Add Project +</StyledButton>
  </div>
  <CustomNotification class="notification"></CustomNotification>
  <div class="projects">
    <div
      class="project"
      v-for="(project, index) in projects"
      :key="index"
      @click="onClickProject()"
    >
    <h5 class="projecttitle">Portfolio website</h5>
    <img src="../assets/Project-Management-Post.jpg" alt="project" />
      <p>lorem ipsum</p>
    </div>
  </div>
  <StyledButton>BACK</StyledButton>
</template>

<style>
.projects {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.headbar{
  display: flex;
  gap: 1rem;
}
.notification{
  z-index: 9999;
}
</style>

<script lang="ts">
import { defineComponent} from 'vue';
import { useRouter } from 'vue-router';
import StyledButton from 'components/StyledButton.vue';
import { route_names } from 'src/router/routes';
import { useProjects } from 'src/services/projects.services';
import CustomNotification from 'src/components/CustomNotification.vue';
export default defineComponent({
  components:{
    StyledButton,
    CustomNotification
  },
  setup() {
    const { addProject } = useProjects();
    const {projects} = useProjects();
    const router = useRouter();
    const  onClickProject = () => {
      void router.push({ name: route_names.projectDetails });
    }
    
    return {
      projects,
      addProject,
      onClickProject,
    }
  },

});
</script>
