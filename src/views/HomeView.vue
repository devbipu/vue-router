<template>
  <main>
    <div class="container">
      <h2>All Places</h2>
      <div class="row">
        <template v-for="ds in destinations" :key="ds.id">
          <div class="col-md-3">
            <router-link :to="{name: 'DestinationDetails', params: {slug: ds.slug, id: ds.id}}">
              <div class="card">
                <img :src="`./img/${ds.image}`" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">{{ds.name}}</h5>
                </div>
            </div>
            </router-link>
          </div>
        </template>
      </div>
    </div>
  </main>
</template>



<script>
  import storeData from '@/store.js';
  export default{
    name: "HomePage",
    data(){
      return{
        destinations: storeData.destinations
      }
    },
    
  }

</script>