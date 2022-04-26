## Yang di pelajari - GraphQL Mutation & Subscription

    1. Insert / Create Data
    2. Update Data
    3. Delete Data

### Essay

    Menggunakan mutation pada graphql memungkinkan kita untuk melakukan CUD atau Create Update Delete pada database dengan input yang kita masukan pada web dan kita kirimkan ke endpoint graphql kita. dengan menggunakan bantuan IDE pada hasura, kita bisa melakukan testing pada syntax mutation kita untuk memanggilnya pada aplikasi kita.

    untuk dapat menggunakan mutation pada nuxt kita harus mengimport dulu gql from 'graphql-tag' , kemudian kita buat methods yang akan mem-mutate dengan cara

            ```this.$apollo.mutate({
                mutation: gql`syntax mutation kita`
            })
            ```
    dengan begitu kita bisa melakukan insert, update dan juga delete pada database kita melalui aplikasi.

    subscription membantu kita untuk mendapatkan data secara realtime jika terjadi perubahan pada database kita.
