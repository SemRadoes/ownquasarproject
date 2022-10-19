<template>
  <div class="title">Add project</div>

  <div>Title: <input v-model="title" /></div>
  <div>Image: <input v-model="image"/></div>
  <div>Description: <input v-model="description"/></div>
  <div>Link: <input v-model="link"/></div>

  <ButtonGroup class="button-group">
    <StyledButton @click="moveBack()">Back</StyledButton>
    <StyledButton primary @click="saveProject()">Save</StyledButton>
  </ButtonGroup>
</template>

<script lang="ts">
import { useProjects } from 'src/services/projects.services';
import { defineComponent, ref } from 'vue';
import StyledButton from 'src/components/StyledButton.vue'
import ButtonGroup from 'src/components/StyledButton.vue'
import { useRouter } from 'vue-router';

export default defineComponent({
  components: {
    StyledButton,
    ButtonGroup,
  },
  setup() {
    const router = useRouter();
    const title = ref('');
    const image = ref('');
    const description = ref('');
    const link = ref('');
    const { addProject } = useProjects();
    const moveBack = () => void router.go(-1);
    const saveProject = () => {
        addProject(title.value, image.value, description.value, link.value);
    }
    return {
      moveBack,
      saveProject
  
    }
  }

});
</script>
