<template>
  <div id="ReadMoreApp">
    <p>
      {{ resolvedText }}
      <button @click="onClick = !onClick" class="btn-dark">
        LÄS {{ onClick ? "MINDRE" : "MER" }}
      </button>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      onClick: false,
      metaText: "Cinemateket är en del av Svenska Filminstitutet och har till uppgift att tillgängliggöra Filminstitutets samlingar, levandegöra filmhistorien och öka intresset för filmen som konstform. Svenska Filminstitutet bildades 1963 och Cinemateket, eller Filmklubben som den då kallades, bildades året efter. Den allra första filmen som visades var Cirkus av Charles Chaplin, önskad av Ingmar Bergman. Allt började 1933, då Svenska Filmsamfundet bildades. Arvet från stumfilmstiden skulle räddas, och den svenska filmen måste bli bättre. Man ordnade debatter och seminarier, delade ut stipendier och priser, och la grunden till det som i dag är Filmarkivet: ett bibliotek och ett arkiv för manus, stillbilder, pressklipp och filmkopior. 1940 bytte samfundet namn till Filmhistoriska samlingarna och 1963 bildades Svenska Filminstitutet, resultatet av Harry Scheins idé att biografägarna skulle slippa nöjesskatten mot att 10 procent av biljettintäkterna gick till produktionen av svensk film (filmavtalet). Filmhistoriska samlingarna donerades till Filminstitutet. I september 1964 började Filminstitutet Filmklubb, som i dag är Cinemateket, visa film i Z-salen i ABF-huset på Sveavägen, ovanpå jazzklubben Gyllene Cirkeln. Man hade också visningar på Moderna Museet. Filmhuset invigdes 1970."

    };
  },
  computed: {
    resolvedText() {
      if (this.onClick) {
        return this.metaText;
      }
      return `${this.metaText.slice(0, 200).trim()}`;
    },
  },
};
</script>
