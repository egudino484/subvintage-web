<template>
    <div>
      <h2>Create User</h2>
      <form @submit.prevent="handleSubmit">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required>
        <button type="submit">Create User</button>
      </form>
    </div>
  </template>
  
  <script>
  // Importar el ABI del contrato
  import userManagementABI from '@/contracts/UserManagement.json';
  
  export default {
    data() {
      return {
        username: '',
      };
    },
    methods: {
      async handleSubmit() {
        try {
          const web3 = this.$web3; // Acceder a la instancia de Web3.js desde Vue prototype
          const contractAddress = '0x49e909B90FBbf4f1852b9384E3c3801331aC160E' // Dirección del contrato en la red Ethereum
          const contract = new web3.eth.Contract(userManagementABI, contractAddress);
  
          // Obtener la cuenta actual conectada en MetaMask
          const accounts = await web3.eth.getAccounts();
          const account = accounts[0]; // Tomar la primera cuenta conectada
  
          // Llamar a la función createUser en el contrato
          await contract.methods.createUser(this.username).send({ from: account });
  
          alert('User created successfully!');
        } catch (error) {
          console.error('Error creating user:', error);
          alert('Failed to create user.');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos para el componente */
  </style>
  