<template>
  <div class="flex flex-col gap-2">
    <div class="collapse bg-base-200">
      <input type="radio" name="my-accordion-1" checked="checked">
      <div class="collapse-title text-xl font-medium">
        Click to open this one and close others
      </div>
      <div class="collapse-content">
        <p>hello</p>
      </div>
    </div>
    <div class="collapse bg-base-200">
      <input type="radio" name="my-accordion-1">
      <div class="collapse-title text-xl font-medium">
        Click to open this one and close others
      </div>
      <div class="collapse-content">
        <p>hello</p>
      </div>
    </div>
    <div class="collapse bg-base-200">
      <input type="radio" name="my-accordion-1">
      <div class="collapse-title text-xl font-medium">
        Click to open this one and close others
      </div>
      <div class="collapse-content">
        <p>hello</p>
      </div>
    </div>
  </div>
  <div class="flex flex-col gap-2 bg-yellow-200">
    <div class="join join-vertical w-full">
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="my-accordion-4" checked="checked">
        <div class="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div class="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="my-accordion-4">
        <div class="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div class="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="my-accordion-4">
        <div class="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div class="collapse-content">
          <p>hello</p>
        </div>
      </div>
    </div>
  </div>
</template>
