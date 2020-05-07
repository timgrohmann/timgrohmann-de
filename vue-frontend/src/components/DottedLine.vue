<template>
  <div class="line">
    <svg width="100%" height="10px">
      <line x1="0%" y1="5px" x2="100%" y2="5px" />
    </svg>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$offset: 40px;
.line {
  stroke: #814997;
  stroke-width: 10px;
  stroke-dasharray: 0 $offset;
  stroke-linecap: round;
  animation: dash 0.5s linear infinite;
  mask-image: linear-gradient(
    90deg,
    transparent,
    black 10%,
    black 90%,
    transparent
  );
}
@keyframes dash {
  100% {
    stroke-dashoffset: -$offset;
  }
}
</style>
