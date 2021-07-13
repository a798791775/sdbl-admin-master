<template>
  <div class="page">
    <div class="title-box">
      <div class="title">Asia Social Science Academy</div>
      <div class="title-text">contribution information</div>
    </div>
    <div class="page-box">
      <div class="item">Title:
        <div class="item-text"></div>
      </div>
      <div class="item">Summary:
        <div class="item-text"></div>
      </div>
      <div class="item">User:
        <div class="item-text"></div>
      </div>
      <div class="item">Unit:
        <div class="item-text"></div>
      </div>
      <div class="item">Field:
        <div class="item-text"></div>
      </div>
      <div class="item">File:
        <div class="item-text"></div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "contribution"
}
</script>

<style scoped>
.title-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 2px solid gainsboro;
}

.title {
  width: 50%;
  font-size: 20px;
  font-weight: bold;
  padding: 14px 2%;
}

.title-text {
  text-align: right;
  width: 50%;
  margin-right: 20px;
  font-weight: bold;
}
</style>