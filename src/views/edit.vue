<template>
  <form @submit.prevent="update">
    <div class="field">
      <label class="label" for="judul_update">Judul</label>
      <div class="control">
        <input class="input" type="text" id="judul_update" placeholder="Judul" required v-model="formEdit.judul">
      </div>
    </div>
    <div class="field">
      <label class="label" for="pengarang_update">Pengarang</label>
      <div class="control">
        <input class="input" type="text" id="pengarang_update" placeholder="Pengarang" required v-model="formEdit.pengarang">
      </div>
    </div>
    <div class="field">
      <label class="label" for="kategori_update">Kategori</label>
      <div class="control">
        <div class="select is-primary">
          <select name="kategori_update" id="kategori_update" v-model="formEdit.kategori">
            <option v-for="val in kategori" :value="val.id">{{val.nama}}</option>
          </select>
        </div>
      </div>
    </div>
    <div class="field">
      <label class="label" for="jumlah_update">Jumlah</label>
      <div class="field has-addons">
        <p class="control is-expanded">
          <input class="input" type="number" id="jumlah_update" placeholder="Jumlah" required v-model="formEdit.jumlah" min="1" max="10000">
        </p>
        <p class="control">
          <a class="button is-static">
            item
          </a>
        </p>
      </div>
    </div>
    <div class="field">
      <label class="label" for="tanggal_update">Tanggal buku</label>
      <div class="control">
        <input class="input" type="date" id="tanggal_update" placeholder="Tanggal" required v-model="formEdit.tanggal">
      </div>
    </div>
    <div class="field">
      <label class="label" for="abstrak_update">Abstrak</label>
      <div class="control">
        <textarea id="abstrak_update" class="textarea" placeholder="Abstrak" v-model="formEdit.abstrak"></textarea>
      </div>
    </div>
  </form>
  <footer class="modal-card-foot">
    <button class="button is-success" @click="update">Update</button>
    <button class="button" @click="closeModal('modal-update')">Close</button>
  </footer>
  <div class="modal" id="edit2">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Add new</p>
      </header>
      <section class="modal-card-body">
        <form @submit.prevent="addNew">
          <div class="field">
            <label class="label" for="isbn_insert">ISBN</label>
            <div class="control">
              <input class="input" type="text" id="isbn_insert" placeholder="ISBN" required v-model="formAdd.isbn">
            </div>
          </div>
          <div class="field">
            <label class="label" for="judul_insert">Judul</label>
            <div class="control">
              <input class="input" type="text" id="judul_insert" placeholder="Judul" required v-model="formAdd.judul">
            </div>
          </div>
          <div class="field">
            <label class="label" for="pengarang_insert">Pengarang</label>
            <div class="control">
              <input class="input" type="text" id="pengarang_insert" placeholder="Pengarang" required v-model="formAdd.pengarang">
            </div>
          </div>
          <div class="field">
            <label class="label" for="kategori_insert">Kategori</label>
            <div class="control">
              <div class="select is-primary">
                <select name="kategori_insert" id="kategori_insert" v-model="formAdd.kategori">
                  <option value="0" disabled>---Kategori---</option>
                  <option v-for="val in kategori" :value="val.id">{{val.nama}}</option>
                </select>
              </div>
            </div>
          </div>
          <div class="field">
            <label class="label" for="jumlah_insert">Jumlah</label>
            <div class="field has-addons">
              <p class="control is-expanded">
                <input class="input" type="number" id="jumlah_insert" placeholder="Jumlah" required v-model="formAdd.jumlah" min="1" max="10000">
              </p>
              <p class="control">
                <a class="button is-static">
                  item
                </a>
              </p>
            </div>
          </div>
          <div class="field">
            <label class="label" for="tanggal_insert">Tanggal buku</label>
            <div class="control">
              <input class="input" type="date" id="tanggal_insert" placeholder="Tanggal" required v-model="formAdd.tanggal">
            </div>
          </div>
          <div class="field">
            <label class="label" for="abstrak_insert">Abstrak</label>
            <div class="control">
              <textarea id="abstrak_insert" class="textarea" placeholder="Abstrak" v-model="formAdd.abstrak"></textarea>
            </div>
          </div>
        </form>
      </section>
    </div>
  </div>
</template>