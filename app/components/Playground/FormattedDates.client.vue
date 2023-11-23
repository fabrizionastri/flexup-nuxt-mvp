<template>
  <div>
    <h2 class="my-5">Format Dates</h2>
    <p>
      This components tests/ - the way functions can be imported (from composables or utils) - the
      wayt to format Dates
    </p>
    <hr class="mb-10 mt-5" />
    formattedDate: {{ formattedDate }} <br />
    formattedDate2: {{ formattedDate2 }} <br />
    formattedDate3: {{ formattedDate3 }} <br />
  </div>
</template>

<script setup>
  const date = new Date('2012-05-24')
  console.log('►  → - navigator.language:', navigator.language)
  const formattedDate = new Intl.DateTimeFormat(navigator.language).format(date)
  const formattedDate2 = formatDate2(date)
  const formattedDate3 = formatDate3(date)
  console.log('►  → - formattedDate:', formattedDate)
  console.log('►  → - formattedDate2:', formattedDate2)
  console.log('►  → - formattedDate3:', formattedDate3)
</script>
