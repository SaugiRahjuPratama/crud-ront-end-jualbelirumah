<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    </div>
    <div class="carousel-inner w-50 container">
      <div class="carousel-item active ">
        <img src="../assets/crumah1.jpg" class="d-block w-100 h-50" alt="...">
      </div>
      <div class="carousel-item">
        <img src="../assets/crumah2.jpg" class="d-block w-100 h-50" alt="...">
      </div>
      <div class="carousel-item">
        <img src="../assets/crumah3.jpeg" class="d-block w-100 h-50" alt="...">
      </div>
      <div class="carousel-item">
        <img src="../assets/crumah4.jpg" class="d-block w-100 h-50" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

    <div class="card-group mt-5">
      <div class="card me-3 shadow p-3 mb-5 bg-body rounded">
        <img src="../assets/rumah36.jpg" class="card-img-top w-100 h-50" alt="...">
        <div class="card-body">
          <h5 class="card-title">Tipe Rumah 36</h5>
          <p class="card-text">di jual rumah tipe 36.</p>
          <center>
            <RouterLink to="/tipe36" type="button" class="btn btn-success" >click disini selengkapnya</RouterLink>
          </center>
        </div>
      </div>
      <div class="card me-3 shadow p-3 mb-5 bg-body rounded">
        <img src="../assets/rumah45.jpg" class="card-img-top w-100 h-50" alt="...">
        <div class="card-body">
          <h5 class="card-title">Tipe Rumah 45</h5>
          <p class="card-text">dijual rumah tipe 45.</p>
          <center>
            <RouterLink to="/tipe45"><button type="button" class="btn btn-success" >click disini selengkapnya</button></RouterLink>
          </center>
        </div>

      </div>
      <div class="card shadow p-3 mb-5 bg-body rounded">
        <img src="../assets/rumah50.jpg" class="card-img-top w-100 h-50" alt="...">
        <div class="card-body">
          <h5 class="card-title">Tipe Rumah 50</h5>
          <p class="card-text">di jual rumah tipe 50.</p>
          <center>
            <RouterLink to="/tipe50"><button type="button" class="btn btn-success" >click disini selengkapnya</button></RouterLink>
          </center>
        </div>
    </div>
      </div>
</template>

<style scoped>

</style>