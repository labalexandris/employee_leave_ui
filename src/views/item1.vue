<template>
  <div>
    <iframe
      :src="sheetUrl"
      frameborder="0"
      width="100%"
      height="1000"
    ></iframe>
  </div>
</template>


<script>
export default {
  name: "item1",
  props: {
    sheetId: {
      type: String,
      required: true,
    },
  },
  computed: {
    sheetUrl() {
      return `https://docs.google.com/spreadsheets/d/1CswMe4HNorMjDhcl5itCPPltN4HcV2bu/edit#gid=423139468`;
    },
  },
};
</script>

