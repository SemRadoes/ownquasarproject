<template>
  <h1 class="title">Projects</h1>
  <div class="projects">
    <div
      class="project"
      v-for="(project, index) in projects"
      :key="index"
      @click="onClickProject(project)"
    >
    <h5 class="projecttitle">Portfolio website</h5>
    <img src="../assets/Project-Management-Post.jpg" alt="project" />
      <p>lorem ipsum</p>
    </div>
  </div>
</template>

<style>
.projects {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>

<script lang="ts">
import { defineComponent} from 'vue';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
import StyledButton from 'components/StyledButton.vue';
import { route_names } from 'src/router/routes';
import { Project } from 'src/components/models';
import { useProjects } from 'src/services/projects.services';
export default defineComponent({
  setup() {
    const { addProject } = useProjects();
    const {projects} = useProjects();
    const route = useRoute();
    const router = useRouter();
    const  onClickProject = (project: Project) => {
      void router.push({ name: route_names.ProjectDetails });
    }
    return {
      projects,
      addProject,
      onClickProject
    }
  },

});
</script>
