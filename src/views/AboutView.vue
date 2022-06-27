<template>

  <button type="button" class="btn btn-success me-2">ADD</button>
  <table class="table">
    <thead class="thead-dark">
    <tr>
      <th scope="col">Nama</th>
      <th scope="col">NIK</th>
      <th scope="col">Nomor HP</th>
      <th scope="col">Alamat</th>
      <th scope="col">email</th>
      <th scope="col>">Tanggal lahir</th>
      <th scope="col>">Aksi</th>
    </tr>
    </thead>
    <tbody>
    <tr>

      <td>alip</td>
      <td>1404132512000007</td>
      <td>081394064142</td>
      <td>jalan durian</td>
      <td>alip@gmail.com</td>
      <td>31 desember 2002</td>
      <td>
        <button type="button" class="btn btn-success me-2">Update</button>
        <button type="button" class="btn btn-danger">Hapus</button>
      </td>
    </tr>
    </tbody>
  </table>
  <section class="modal-card-body">
    <div>
      <form @submit.prevent="update">
        <div class="field">
          <label class="label" for="nama_mk_update">Nama MK</label>
          <div class="control">
            <input class="input" type="text" id="nama_mk_update" placeholder="Nama MK">
          </div>
        </div>
        <div class="field">
          <label class="label" for="sks_update">SKS</label>
          <div class="control">
            <input class="input" type="text" id="sks_update" placeholder="SKS">
          </div>
        </div>
        <div class="field">
          <label class="label" for="semester_update">Semester</label>
          <div class="control">
            <input class="input" type="text" id="semester_update" placeholder="Semester">
          </div>
        </div>
        <div class="field">
          <label class="label" for="program_studi_update">Program Studi</label>
          <div class="control">
            <input class="input" type="text" id="program_studi_update" placeholder="Program Studi">
          </div>
        </div>
        <div class="field">
          <label class="label" for="keterangan_update">Keterangan</label>
          <div class="control">
            <input class="input" type="text" id="keterangan_update" placeholder="Keterangan">
          </div>
        </div>
      </form>
    </div>
  </section>
  <footer class="modal-card-foot">
    <button class="button is-success" @click="update">Update</button>
    <button class="button" @click="closeModal('modal-update')">Close</button>
  </footer>
  <div class="modal" id="modal-add">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Add new</p>
      </header>
      <section class="modal-card-body">
        <form @submit.prevent="addNew">
          <div class="field">
            <label class="label" for="kode_mk_insert">Kode Mk</label>
            <div class="control">
              <input class="input" type="text" id="kode_mk_insert" placeholder="Kode Mk">
            </div>
          </div>
          <div class="field">
            <label class="label" for="nama_mk_insert">Nama Mk</label>
            <div class="control">
              <input class="input" type="text" id="nama_mk_insert" placeholder="Nama Mk">
            </div>
          </div>
          <div class="field">
            <label class="label" for="sks_insert">Sks</label>
            <div class="control">
              <input class="input" type="text" id="sks_insert" placeholder="Sks">
            </div>
          </div>
          <div class="field">
            <label class="label" for="semester_insert">Semester</label>
            <div class="control">
              <input class="input" type="text" id="semester_insert" placeholder="Semester">
            </div>
          </div>
          <div class="field">
            <label class="label" for="program_studi_insert">Program Studi</label>
            <div class="control">
              <input class="input" type="text" id="program_studi_insert" placeholder="Program Studi">
            </div>
          </div>
          <div class="field">
            <label class="label" for="keterangan_insert">Keterangan</label>
            <div class="control">
              <input class="input" type="text" id="keterangan_insert" placeholder="Keterangan">
            </div>
          </div>
        </form>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" @click="addNew">Save</button>
        <button class="button" @click="closeModal('modal-add')">Close</button>
      </footer>
    </div>
  </div>
</template>