<template>
    <div class="container">
        <h1>SubVintage Marketplace</h1>

        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Search items..." v-model="searchTerm">
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" @click="clearSearch">Clean</button>
            </div>
        </div>

        <div class="row">

            <div class="row">
                <div class="col-md-4 mb-4" v-for="product in products" :key="product.id">
                    <router-link :to="'/product/' + product.id" class=" routerLink card-link">
                        <div class="card">
                            <img :src="product.image" class="card-img-top" alt="Producto">
                            <div class="card-body">
                                <h5 class="card-title">{{ product.name }}</h5>
                                <p class="card-text">{{ product.description }}</p>
                                <p class="card-text"><strong>Precio:</strong> {{ product.price }} $</p>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                    <button class="btn btn-outline-primary" @click="likeProduct(product.id)">
                                        <i class="fa fa-heart"></i> Like <span class="badge badge-primary">{{ product.likes
                                        }}</span>
                                    </button>
                                    <button class="btn btn-success" @click="buyProduct(product.id)">
                                        <i class="fa fa-shopping-cart"></i> Comprar
                                    </button>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>

        </div>

        <div v-if="filteredProducts.length === 0 && searchTerm.length > 0">
            <p>No se encontraron productos que coincidan con "{{ searchTerm }}".</p>
        </div>
        <div v-else-if="filteredProducts.length === 0">
            <p>No se encontraron productos.</p>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            searchTerm: '',
            products: [
                {
                    id: 1,
                    name: 'Nike Shoes',
                    description: 'Descripción del Producto 1',
                    price: 10,
                    image: 'https://via.placeholder.com/200x150',
                    likes: 0
                },
                {
                    id: 2,
                    name: 'Adidas Shoes',
                    description: 'Descripción del Producto 2',
                    price: 20,
                    image: 'https://via.placeholder.com/200x150',
                    likes: 0
                },
                {
                    id: 3,
                    name: 'Tommy Hoodie',
                    description: 'Descripción del Producto 3',
                    price: 30,
                    image: 'https://via.placeholder.com/200x150',
                    likes: 0
                }
            ]
        };
    },
    computed: {
        filteredProducts() {
            if (!this.searchTerm) {
                return this.products;
            }
            const lowerCaseTerm = this.searchTerm.toLowerCase();
            return this.products.filter(product =>
                product.name.toLowerCase().includes(lowerCaseTerm) ||
                product.description.toLowerCase().includes(lowerCaseTerm)
            );
        }
    },
    methods: {
        likeProduct(productId) {
            const product = this.products.find(p => p.id === productId);
            if (product) {
                product.likes++;
            }
        },
        buyProduct(productId) {
            alert(`Producto ${productId} comprado!`);
            // Aquí puedes implementar la lógica para la compra del producto
        },
        clearSearch() {
            this.searchTerm = '';
        }
    }
};
</script>
  
<style>
/* Estilos adicionales según necesidades */
</style>
  