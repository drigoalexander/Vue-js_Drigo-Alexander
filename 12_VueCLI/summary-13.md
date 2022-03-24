### Summary

## Yang di pelajari - Vue Component

    1. Export Import
    2. Props & Emit
    3. Lifecycle

### Essay

    Import dan Export akan sering digunakan ketika developing karena kita mengexport sebuah componen ataupun mengimport component, utils, dsbnya. export terbagi menjadi 2 : 1. Export const ( ekspor 0 atau lebih per modul) 2. Default Exports (1 / Module). import memiliki 4 tipe :
    1. import default untuk mengimport 1 module.
    2. Import multiple untuk mengimport lebih dari 1 module.
    3. Rename multiple untuk mengimport dan memberi alias pada module tersebut
    4. import default + multiple untuk mengimport target dan multiple import

    vue juga memberikan fasilitas untuk mengekspos data dari induk ke child baik itu data ataupun event dengan menggunakan props dan emits

    lifecycle memiliki hok yang memiliki fungsi masing-masing. siklus lifecycle pada vue berawal ari inisiasi dan berakhir ketika destroy.

    3 lifecycle utama dalam vue adalah :
    1. Created
    2. Mounted
    3. Destroyed
