<template>
  <table class="table">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Rincian Rumah</th>
      <th scope="col">Gambar</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tipe Rumah</td>
      <td rowspan="5"> <img src="src/assets/crumah3.jpeg" STYLE="height: 320px"></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Harga Rumah</td>
    </tr>

    <tr>
      <th scope="row">3</th>
      <td>Jenis Rumah</td>
    </tr>

    <tr>
      <th scope="row">4</th>
      <td>Alamat Rumah </td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>deskripsi</td>
    </tr>
    <center>
      <RouterLink to="/transaksi"><button type="button" class="btn btn-success" >lakukan transaksi </button></RouterLink>
    </center>

    </tbody>
  </table>
</template>