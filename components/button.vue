<script setup>
// props
const props = defineProps({
  to: {
    type: String,
    default: null
  },
  block: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'default' //small
  },
  disabled: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: 'primary' //secondary、warning
  }
})
// emits
const emits = defineEmits(['click'])
// 自訂變數
const disabledStatus = computed(() => props.disabled)
// 自訂函式
const shadowBgClass = computed(() => {
  return {
    'bg-[#909090]': props.disabled,
    'bg-[#6a5dbc]': !props.disabled && props.color === 'primary',
    'bg-[#5AA042]': !props.disabled && props.color === 'secondary',
    'bg-[#B94B2D]': !props.disabled && props.color === 'warning'
  }
})
const btnBgClass = computed(() => {
  return {
    'bg-[#CECECE]': props.disabled,
    'bg-primary': !props.disabled && props.color === 'primary',
    'bg-secondary': !props.disabled && props.color === 'secondary',
    'bg-warning': !props.disabled && props.color === 'warning'
  }
})
const handleClick = () => {
  try {
    if (disabledStatus.value) return
    if (!!props.to) {
      navigateTo(props.to)
    } else {
      emits('click')
    }
  } catch (error) {
    console.error('An error occurred:', error)
    // 顯示錯誤提示或其他處理
  }
}
// lifeCycle
</script>
<template>
  <button
    @click="handleClick"
    class="group translate-y-[6px] cursor-pointer rounded-lg border-none outline-none"
    :class="[shadowBgClass, { 'w-full': props.block }]"
  >
    <span
      class="flex -translate-y-[6px] transform items-center justify-center rounded-lg font-bold text-white outline-none transition-[transform] will-change-transform group-active:duration-[34ms]"
      :class="[
        btnBgClass,
        props.size == 'default' ? 'py-3 text-lg' : 'py-2',
        {
          'w-full': props.block,
          'group-active:-translate-y-[4px]': !props.disabled,
          'cursor-not-allowed': props.disabled,
          'px-8': !props.block
        }
      ]"
    >
      <slot name="default">Button</slot>
      <slot name="icon"></slot>
    </span>
  </button>
</template>
<style scoped>
.bg-primary {
  background: linear-gradient(90deg, #b9a9ff 0%, #9482ff 100%);
}
.bg-secondary {
  background: linear-gradient(90deg, #a5de5c 0%, #70c852 100%);
}
.bg-warning {
  background: linear-gradient(90deg, #ff6946 0%, #e65a3c 100%);
}
</style>
