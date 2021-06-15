<template>
  <div class="vita">
    <div class="timeline">
      <div class="line"></div>
      <ul>
        <li>HEUTE</li>
        <li>2021</li>
        <li>2018</li>
        <li>2010</li>
      </ul>
    </div>
    <div class="texts">
      <div class="row">
        <div class="col-md-6 align-center justify-center d-flex flex-column">
          <div>
            <p class="name">TU Darmstadt</p>
            <p class="time">ab Oktober 2021</p>
          </div>
          <div>
            <p class="name">DHBW Mannheim</p>
            <p class="time">2018-2021</p>
          </div>
        </div>
        <div class="col-md-6 align-center justify-center d-flex flex-column">
          <div>
            <p class="name">DB Systel AG</p>
            <p class="time">seit Oktober 2018</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 align-center justify-center d-flex flex-column">
          <p class="name">Gymnasium Carolinum Bernburg</p>
          <p class="time">2010-2018</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.vita {
  margin: 0 auto;
  text-align: center;
  display: flex;
  padding: 16px;
}

.texts {
  flex-basis: 100%;
}

.name {
  font-size: 1.25rem;
}
.timeline {
  display: flex;
  text-align: left;
  ul {
    height: 100%;
  }
  .line {
    width: 0;
    height: 100%;
    border-left: 1px solid black;
  }
  li {
    margin-left: 0px;
  }
}
</style>

<script>
export default {};
</script>
