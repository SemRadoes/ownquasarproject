<template>
  <div class="alert-popup">
    <div class="alert">
      <h4>Add Project</h4>
      <div class="inputfield">
        <p>Title</p>
        <input type="text">

      </div>
      <div class="inputfield">
        <p>Image</p>
        <q-uploader
          url="http://localhost:8080/upload"
          color="teal"
          flat
          bordered
          style="max-width: 300px"
        />

      </div>
      <div class="inputfield">
        <p>Description</p>
        <input type="text">

      </div>
      <div class="inputfield">

        <p>Link</p>
        <input type="text">
      </div>
      <div class="buttons">
        <StyledButton green>Confirm</StyledButton>
        <StyledButton primary>Cancel</StyledButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.alert-popup {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: rgba(0, 0, 0, 0.377);
}
.alert{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap:0.1rem;
  border: 1px solid black;
  box-shadow: 0 0 10px;
  width: 50%;
  padding: 1rem;
  position: absolute;
  top: 20%;
  left: 20%;
  background-color: white;
}
.inputfield{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap:0.2rem;
}
.buttons{
  display: flex;
  gap: 1rem;
}
</style>
<script lang="ts">
import { defineComponent } from 'vue';
import StyledButton from './StyledButton.vue'

export default defineComponent({
  components: {
    StyledButton,
  }
});
</script>