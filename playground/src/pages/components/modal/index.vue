<template>
  <div>
    <button class="btn" onclick="my_modal_1.showModal()">
      open modal
    </button>
    <dialog id="my_modal_1" class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg">
          Hello!
        </h3>
        <p class="py-4">
          Press ESC key or click the button below to close
        </p>
        <div class="modal-action">
          <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
            <button class="btn">
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  </div>
  <div>
    <!-- The button to open modal -->

    <label for="my_modal_6" class="btn">open modal</label>

    <!-- Put this part before </body> tag -->
    <input id="my_modal_6" type="checkbox" class="modal-toggle">
    <div class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg">
          Hello!
        </h3>
        <p class="py-4">
          This modal works with a hidden checkbox!
        </p>
        <div class="modal-action">
          <label for="my_modal_6" class="btn">Close!</label>
        </div>
      </div>
    </div>
  </div>
</template>
