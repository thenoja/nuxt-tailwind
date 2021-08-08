<template>
  <div>
  </div>
</template>

<script>
export default {
  setup(props) {
    var isAnagram = function (s, t) {
      for(let i = 0; i < s.length; i++) {
        
        console.log(s[i]);
      }
    }
    isAnagram('anagram', 'nagaram')
  },
}
</script>
