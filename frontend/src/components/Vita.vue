<template>
  <div class="vita triggered">
    <div class="timeline">
      <ul>
        <li>heute</li>
        <li>2021</li>
        <li>2018</li>
        <li>2010</li>
      </ul>
      <div class="line"></div>
    </div>
    <div class="texts">
      <div class="row">
        <div class="col-md-6 align-center justify-center d-flex flex-column">
          <div class="vita-block">
            <p class="name">TU Darmstadt</p>
            <p class="time">seit Oktober 2021</p>
          </div>
          <div class="vita-block">
            <p class="name">DHBW Mannheim</p>
            <i>GPA 1,7</i>
            <p class="time">2018-2021</p>
          </div>
        </div>
        <div class="col-md-6 align-center justify-center d-flex flex-column">
          <div class="vita-block">
            <p class="name">DB Systel GmbH</p>
            <p class="time">seit Oktober 2018</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 align-center justify-center d-flex flex-column">
          <div class="vita-block">
            <p class="name">Gymnasium Carolinum Bernburg</p>
            <i>Abitur mit 1,0</i>
            <p class="time">2010-2018</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$block-height: 100px;

.vita {
  margin: 0 auto;
  text-align: center;
  display: flex;
  padding: 16px;
  width: 70%;
  @media (max-width: 960px) {
    width: 100%;
  }
}

.texts {
  flex-basis: 100%;
  .row {
    margin: 0;
    & > div {
      padding: 0;
    }
  }
}

.name {
  font-size: 1.25rem;
  margin-bottom: 5px;
}

.vita-block {
  min-height: $block-height;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.timeline {
  @media (max-width: 600px) {
    display: none;
  }
  display: flex;
  text-align: right;
  ul {
    height: 100%;
    list-style: none;
    padding-left: 15px;
    position: relative;
  }
  .line {
    width: 0;
    height: 100%;
    border-left: 1px solid grey;
  }
  li {
    margin-left: 0px;
    margin-right: 10px;
    height: $block-height;
    transform: translateX(-15px);
    opacity: 0;
    animation: opacity-in-left 300ms forwards;
    font-style: italic;
    @media (max-width: 960px) {
      &:nth-child(2) {
        height: 140px;
      }
    }
  }
  li:last-child {
    height: auto;
  }
  li::after {
    content: " ";
    display: block;
    position: absolute;
    right: 0;
    margin-top: -18px;
    margin-right: -16px;
    width: 11px;
    height: 11px;
    border-radius: 100%;
    border: 2px solid var(--v-secondary-base);
    outline: 2px solid white;
    background: white;
  }
  @for $i from 0 to 4 {
    li:nth-child(#{4- $i}) {
      animation-delay: 100ms + $i * 100ms;
    }
  }
}

@keyframes opacity-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes opacity-in-left {
  from {
    opacity: 0;
    transform: translateX(-10px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.theme--dark .timeline li::after {
  outline-color: #121212;
  background: #121212;
}
</style>

<script>
export default {};
</script>
