<template>
  <div>
    <h1>{{ msn }} Page</h1>

    <Footer />
  </div>
</template>
<script>
import Footer from '@/components/Footer'

export default {
  name: 'HomePage',
  components: {
    Footer,
  },
  data() {
    return {
      msn: 'Home',
    }
  },
}
</script>
