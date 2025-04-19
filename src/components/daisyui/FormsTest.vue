<script setup lang="ts">
// 表单选中值
const selectedRadio = ref('option1')
const selectedCheckboxes = ref(['option1'])
const selectValue = ref('')
const rangeValue = ref(50)
const toggleValue = ref(true)
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold mb-6">
      <Icon name="hugeicons:form" class="inline-block mr-2" />
      表单组件
    </h2>

    <!-- 基础表单控件 -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4">
        基础表单控件
      </h3>
      <div class="form-control w-full max-w-md mb-4">
        <label class="label">
          <span class="label-text">文本输入框</span>
        </label>
        <input type="text" placeholder="请输入文本" class="input input-bordered w-full">
        <label class="label">
          <span class="label-text-alt">最多输入200字符</span>
        </label>
      </div>

      <div class="form-control w-full max-w-md mb-4">
        <label class="label">
          <span class="label-text">密码输入框</span>
        </label>
        <input type="password" placeholder="请输入密码" class="input input-bordered w-full">
      </div>

      <div class="form-control w-full max-w-md">
        <label class="label">
          <span class="label-text">多行文本输入</span>
        </label>
        <textarea class="textarea textarea-bordered h-24" placeholder="请输入多行内容" />
      </div>
    </div>

    <!-- 单选按钮 -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4">
        单选按钮
      </h3>
      <div class="form-control">
        <label class="label cursor-pointer justify-start gap-2">
          <input
            v-model="selectedRadio"
            type="radio"
            name="radio-group"
            class="radio radio-primary"
            value="option1"
          >
          <span class="label-text">选项一</span>
        </label>
      </div>
      <div class="form-control">
        <label class="label cursor-pointer justify-start gap-2">
          <input
            v-model="selectedRadio"
            type="radio"
            name="radio-group"
            class="radio radio-primary"
            value="option2"
          >
          <span class="label-text">选项二</span>
        </label>
      </div>
      <div class="form-control">
        <label class="label cursor-pointer justify-start gap-2">
          <input
            v-model="selectedRadio"
            type="radio"
            name="radio-group"
            class="radio radio-primary"
            value="option3"
          >
          <span class="label-text">选项三</span>
        </label>
      </div>
      <div class="mt-2">
        <span class="text-sm">当前选中: {{ selectedRadio }}</span>
      </div>
    </div>

    <!-- 复选框 -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4">
        复选框
      </h3>
      <div class="form-control">
        <label class="label cursor-pointer justify-start gap-2">
          <input
            v-model="selectedCheckboxes"
            type="checkbox"
            class="checkbox checkbox-primary"
            value="option1"
          >
          <span class="label-text">选项一</span>
        </label>
      </div>
      <div class="form-control">
        <label class="label cursor-pointer justify-start gap-2">
          <input
            v-model="selectedCheckboxes"
            type="checkbox"
            class="checkbox checkbox-primary"
            value="option2"
          >
          <span class="label-text">选项二</span>
        </label>
      </div>
      <div class="form-control">
        <label class="label cursor-pointer justify-start gap-2">
          <input
            v-model="selectedCheckboxes"
            type="checkbox"
            class="checkbox checkbox-primary"
            value="option3"
          >
          <span class="label-text">选项三</span>
        </label>
      </div>
      <div class="mt-2">
        <span class="text-sm">当前选中: {{ selectedCheckboxes.join(', ') }}</span>
      </div>
    </div>

    <!-- 下拉选择框 -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4">
        下拉选择框
      </h3>
      <div class="form-control w-full max-w-md">
        <label class="label">
          <span class="label-text">选择一个选项</span>
        </label>
        <select v-model="selectValue" class="select select-bordered">
          <option disabled selected value="">
            请选择...
          </option>
          <option value="option1">
            选项 1
          </option>
          <option value="option2">
            选项 2
          </option>
          <option value="option3">
            选项 3
          </option>
        </select>
      </div>
      <div v-if="selectValue" class="mt-2">
        <span class="text-sm">当前选中: {{ selectValue }}</span>
      </div>
    </div>

    <!-- 范围滑块 -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4">
        范围滑块
      </h3>
      <div class="form-control w-full max-w-md">
        <label class="label">
          <span class="label-text">选择数值 (0-100)</span>
          <span class="label-text-alt">当前值: {{ rangeValue }}</span>
        </label>
        <input
          v-model="rangeValue"
          type="range"
          min="0"
          max="100"
          class="range range-primary"
        >
        <div class="w-full flex justify-between text-xs px-2 mt-2">
          <span>0</span>
          <span>25</span>
          <span>50</span>
          <span>75</span>
          <span>100</span>
        </div>
      </div>
    </div>

    <!-- 开关切换 -->
    <div>
      <h3 class="text-xl font-semibold mb-4">
        开关切换
      </h3>
      <div class="form-control">
        <label class="label cursor-pointer justify-start gap-2">
          <input v-model="toggleValue" type="checkbox" class="toggle toggle-primary">
          <span class="label-text">{{ toggleValue ? '已启用' : '已禁用' }}</span>
        </label>
      </div>
    </div>
  </div>
</template>
