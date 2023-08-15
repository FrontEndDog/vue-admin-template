<template>
  <span>
    <template v-if="icon">
      <i v-if="icon.includes('el-icon')" :class="[icon, 'sub-el-icon']" />
      <svg-icon v-else :icon-class="icon" />
    </template>
    <span v-if="title" slot="title">{{ title }}</span>
  </span>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    icon: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.sub-el-icon {
  width: 1em;
  height: 1em;
  color: currentcolor;
}
</style>
