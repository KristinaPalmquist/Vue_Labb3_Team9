<template>
  <div>
    <!-- Footer -->
    <footer
      class="text-center text-white footer-div"
      style="background-color: #000000"
    >
      <!-- Grid container -->
      <div class="container p-4">
        <!-- Section: Social media -->
        <section class="mb-4">
          <!-- Facebook -->
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="https://www.facebook.com/"
            role="button"
            ><i class="bi bi-facebook"></i
          ></a>

          <!-- Twitter -->
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="https://twitter.com/?lang=sv"
            role="button"
            ><i class="bi bi-twitter"></i
          ></a>

          <!-- Google -->
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="https://www.google.com/"
            role="button"
            ><i class="bi bi-google"></i
          ></a>

          <!-- Instagram -->
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="https://www.instagram.com/"
            role="button"
            ><i class="bi bi-instagram"></i
          ></a>

          <!-- Linkedin -->
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="https://www.linkedin.com/"
            role="button"
            ><i class="bi bi-linkedin"></i
          ></a>

          <!-- Github -->
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="https://github.com/DimPirogov/Team9"
            role="button"
            ><i class="bi bi-github"></i
          ></a>
        </section>
        <!-- Section: Social media -->

        <!-- Section: Form -->
        <section class="">
          <form action="">
            <!--Grid row-->
            <div class="row d-flex justify-content-center">
              <!--Grid column-->
              <div class="col-auto">
                <p class="pt-2">
                  <strong>Nyhetsbrev:</strong>
                </p>
              </div>
              <!--Grid column-->

              <!--Grid column-->
              <div class="col-md-5 col-12">
                <!-- Email input -->
                <div class="form-outline form-white mb-4">
                  <input
                    type="email"
                    id="form5Example21"
                    class="form-control"
                    placeholder="Email"
                  />
                </div>
              </div>
              <!--Grid column-->

              <!--Grid column-->
              <div class="col-auto">
                <!-- Submit button -->
                <button type="submit" class="btn btn-outline-light mb-4">
                  Subscribe
                </button>
              </div>
              <!--Grid column-->
            </div>
            <!--Grid row-->
          </form>
        </section>
        <!-- Section: Form -->

        <!-- Section: Text -->
        <section class="mb-4">
          <p>
            Cinemap startade 2023 genom ett projekt på IT-högskolan. Vårt mål är
            att göra det enklare att hitta i biodjungeln genom att samla alla
            biografer och filmer på en hemsida.
          </p>
        </section>
        <!-- Section: Text -->

        <!-- Section: Links -->
        <section class="">
          <!--Grid row-->
          <div class="row">
            <!--Grid column-->
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">KONTAKT</h5>

              <ul class="list-unstyled mb-0">
                <li>
                  <a href="/Team9/feedback" class="text-white">Feedback</a>
                </li>
              </ul>
            </div>
            <!--Grid column-->

            <!--Grid column-->
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">JUST NU</h5>

              <ul class="list-unstyled mb-0">
                <li>
                  <a href="/Team9/biograf" class="text-white">Alla biografer</a>
                </li>
                <li>
                  <a href="/" class="text-white">Nu på bio</a>
                </li>
              </ul>
            </div>
            <!--Grid column-->

            <!--Grid column-->
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">Läs mer</h5>

              <ul class="list-unstyled mb-0">
                <li>
                  <a href="https://bio.se/" class="text-white">BIO.SE</a>
                </li>
                <li>
                  <a href="https://www.filmstaden.se/" class="text-white"
                    >Filmstaden</a
                  >
                </li>
              </ul>
            </div>
            <!--Grid column-->

            <!--Grid column-->
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">Övrigt</h5>

              <ul class="list-unstyled mb-0">
                <li>
                  <a href="#!" class="text-white">Personuppgiftspolicy</a>
                </li>
                <li>
                  <a href="#!" class="text-white">Cookiepolicy</a>
                </li>
                <li>
                  <a href="#!" class="text-white">Länkningspolicy</a>
                </li>
              </ul>
            </div>
            <!--Grid column-->
          </div>
          <!--Grid row-->
        </section>
        <!-- Section: Links -->
      </div>
      <!-- Grid container -->

      <!-- Copyright -->
      <div
        class="text-center p-3 copy-div"
        style="background-color: rgba(0, 0, 0, 0.2)"
      >
        © 2023 Copyright CINEMAP
      </div>
      <!-- Copyright -->
    </footer>
    <!-- Footer -->
  </div>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
  />
</template>

<style scoped>
.copy-div {
  border-top: solid 2px var(--black-soft);
}

.footer-div {
  border-top: solid 1px var(--black-soft);
}
</style>
