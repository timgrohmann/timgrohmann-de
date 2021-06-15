<template>
  <div>
    <h2>Das Mannheimer Sperrmüll-Bingo!</h2>
    <p>
      Das ist das <i>Mannheimer Sperrmüll-Bingo</i>. Da unsere Stadt so viel
      davon zu bieten hat, möchte ich hier den Müll aus so vielen Ecken wie
      möglich sammleln.
      <br />
      So funktionierts: Du siehst Spermüll an einem Quadrat, das hier noch leer
      ist? Schicke ein Bild davon auf Instagram an
      <a href="https://www.instagram.com/sperrmuell.ma/">@sperrmuell.ma</a>.
      <br>
      <b>Hilf mit, das Bild zu vervollständigen.</b>
    </p>
    <div class="scroll">
      <div class="ma-grid">
        <div
          v-for="q in qs"
          :class="{
            bg: !!q.name && !q.post,
            span2: q.span == 2,
            span3: q.span == 3,
            span4: q.span == 4,
            hide: q.hide,
          }"
          :key="q.name"
        >
          <a
            :href="`https://www.instagram.com/p/${q.post}/`"
            class="img"
            v-if="q.post"
            :style="{
              'background-image': 'url(/img/sperrmuell/' + q.post + '.jpg)',
            }"
            target="_blank"
          >
          </a>
          <div class="txt" v-if="q.name">
            {{ q.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      qs: [
        {},
        { name: "K7" },
        { name: "K6" },
        { name: "K5" },
        { name: "K4" },
        { name: "K3" },
        { name: "K2" },
        { name: "K1" },
        { name: "U1" },
        { name: "U2" },
        { name: "U3" },
        { name: "U4" },
        { name: "U5", post: "CHiOdElnZL1" },
        { name: "U6" },
        {},
        {},
        {},

        {},
        { name: "I7" },
        { name: "I6" },
        { name: "I5" },
        { name: "I4" },
        { name: "I3" },
        { name: "I2" },
        { name: "I1" },
        { name: "T1" },
        { name: "T2" },
        { name: "T3" },
        { name: "T4" },
        { name: "T5" },
        { name: "T6" },
        {},
        {},
        {},

        {},
        { name: "H7" },
        { name: "H6" },
        { name: "H5" },
        { name: "H4" },
        { name: "H3" },
        { name: "H2" },
        { name: "H1" },
        { name: "S1" },
        { name: "S2" },
        { name: "S3" },
        { name: "S4" },
        { name: "S5" },
        { name: "S6" },
        {},
        {},
        {},

        { hide: true },
        { name: "G7", span: 2 },
        { name: "G6" },
        { name: "G5" },
        { name: "G4" },
        { name: "G3", post: "CHz2VU9M36E" },
        { name: "G2" },
        { name: "G1" },
        { name: "R1" },
        { name: "R2" },
        { name: "R3" },
        { name: "R4" },
        { name: "R5" },
        { name: "R6" },
        { hide: true },
        { name: "R7", span: 2 },
        {},

        { hide: true },
        { name: "F7", span: 2 },
        { name: "F6" },
        { name: "F5" },
        { name: "F4" },
        { name: "F3" },
        { name: "F2" },
        { name: "F1" },
        { name: "Q1" },
        { name: "Q2" },
        { name: "Q3" },
        { name: "Q4" },
        { name: "Q5" },
        { name: "Q6" },
        { hide: true },
        { name: "Q7", span: 2 },
        {},

        { hide: true },
        { name: "E7", span: 2 },
        { name: "E6" },
        { name: "E5" },
        { name: "E4" },
        { name: "E3" },
        { name: "E2" },
        { name: "E1" },
        { name: "P1" },
        { name: "P2" },
        { name: "P3" },
        { name: "P4" },
        { name: "P5" },
        { name: "P6" },
        { hide: true },
        { hide: true },
        { name: "P7", span: 3 },

        { hide: true },
        { name: "D7", span: 2 },
        { name: "D6" },
        { name: "D5" },
        { name: "D4" },
        { name: "D3" },
        { name: "D2" },
        { name: "D1" },
        { name: "O1" },
        { name: "O2" },
        { name: "O3" },
        { name: "O4" },
        { name: "O5" },
        { name: "O6" },
        { hide: true },
        { hide: true },
        { name: "O7", span: 3 },

        { name: "C8" },
        { name: "C7" },
        { name: "C6" },
        { name: "C5" },
        { name: "C4" },
        { name: "C3" },
        { name: "C2" },
        { name: "C1" },
        { name: "N1" },
        { name: "N2" },
        { name: "N3" },
        { name: "N4" },
        { name: "N5" },
        { name: "N6" },
        { hide: true },
        { hide: true },
        { name: "N7", span: 3 },

        { hide: true },
        { name: "B7", span: 2 },
        { name: "B6" },
        { name: "B5" },
        { name: "B4" },
        { name: "B3" },
        { name: "B2" },
        { name: "B1" },
        { name: "M1" },
        { name: "M2" },
        { name: "M3" },
        { name: "M4" },
        { name: "M5" },
        { hide: true },
        { name: "M6", span: 2 },
        { hide: true },
        { name: "M7", span: 2 },

        { hide: true },
        { hide: true },
        { name: "A5", span: 3 },
        { hide: true },
        { name: "A4", span: 2 },
        { name: "A3" },
        { name: "A2" },
        { name: "A1" },
        { name: "L1" },
        { name: "L2" },
        { name: "L3" },
        { name: "L4" },
        { name: "L6" },
        { name: "L8" },
        { name: "L10" },
        { name: "L12" },
        { name: "L14" },

        {},
        {},
        {},
        {},
        {},
        {},
        { hide: true },
        { hide: true },
        { hide: true },
        { name: "Schloss", span: 4 },
        {},
        { name: "L5" },
        { name: "L7" },
        { name: "L9" },
        { name: "L11" },
        { name: "L13" },
        { name: "L15" },
      ],
    };
  },
};
</script>

<style lang="scss">
$gr-gap: 5px;
$gr-size: calc((100 / 17) * 1% - #{$gr-gap});

.scroll {
  overflow-x: auto;
}

.ma-grid {
  display: grid;
  min-width: 1100px;
  grid-template-rows: repeat(11, 60px);

  @media screen and (min-width: 1900px) {
    grid-template-rows: repeat(11, 90px);
  }
  grid-template-columns: repeat(17, $gr-size);
  gap: $gr-gap;
  div {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    overflow: hidden;

    &.bg {
      // background-color: #eeeeee;
      border: 2px solid #f89406;
    }
    &.span2 {
      grid-column: span 2;
    }
    &.span3 {
      grid-column: span 3;
    }
    &.span4 {
      grid-column: span 4;
    }
    &.hide {
      display: none;
    }

    &:nth-child(17n + 8) {
      margin-right: 5px;
    }
    &:nth-child(17n + 9) {
      margin-left: 5px;
    }
    &:nth-child(n + #{5*17 + 1}):nth-child(-n + #{6*17}),
    &:nth-child(n + #{9*17 + 1}):nth-child(-n + #{10*17}) {
      margin-bottom: 5px;
    }
    &:nth-child(n + #{6*17 + 1}):nth-child(-n + #{7*17}),
    &:nth-child(n + #{10*17 + 1}):nth-child(-n + #{11*17}) {
      margin-top: 5px;
    }
  }

  .img {
    width: 100%;
    height: 100%;
    position: absolute;
    background-position: center center;
    background-size: cover;
  }
  .txt:nth-child(2) {
    font-weight: bold;
    text-shadow: 0 0 3px #fff;
  }
}
</style>