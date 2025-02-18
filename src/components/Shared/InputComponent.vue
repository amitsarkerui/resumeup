<template>
  <div class="w-full my-5">
    <label class="block mb-2 text-sm text-slate-600"> {{ label }} </label>
    <input
      class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
      autocomplete=""
      :placeholder="placeholder"
      :type="type"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "InputComponent",
  props: {
    label: {
      type: String,
      default: "Details",
    },
    placeholder: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    modelValue: String,
  },
};
</script>

<style scoped></style>
