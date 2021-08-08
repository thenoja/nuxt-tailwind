<template>
  <div class="text-gray-600 grid grid-cols-1 md:grid-cols-2 gap-2 ">
    <div class='text-right '>
      <nav>
        <a href="#">
          <h1 class="text-gray-700 uppercase font-semibold p-4 border-b border-blue-500 inline-block mb-4">food ninja</h1>
        </a>
        <ul class='p-2'>
          <li>
            <a href="#">
              <span class="font-bold">Home</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div class='bg-gray-100'>
      <div class="flex">
        <div class='p-4'>Login</div>
        <div class='py-1 leading-3 px-3 border-4 border-red-300 rounded-2xl grid place-items-center'>Logout</div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  setup(props) {
  },
}
</script>
