<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <RouterLink to="/" class="navbar-brand" style="font-family: 'Bodoni MT Condensed';color: hotpink;font-size: xxx-large" >Beli Rumah.com</RouterLink>
      <img src="src/assets/logorumah.png" style="width: 60px" alt="logo rumah">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0 ms-auto">
          <li>
            <RouterLink to="/beranda" class="nav-link">Beranda</RouterLink>
          </li>
          <li>
            <RouterLink to="/about" class="nav-link"> Data diri</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
