<template>
  <div></div>
</template>

<script>
export default {
  setup(props) {
    function compareTriplets(a, b) {
      // Write your code here
      const answer = [0, 0]
      for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
          answer[0]++
        } else if (a[i] < b[i]) {
          answer[1]++
        }
      }
      return answer
    }

    compareTriplets([17, 28, 30], [99, 16, 8])
  },
}
</script>
