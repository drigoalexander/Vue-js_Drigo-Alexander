class Kendaraan {
    constructor() {
      this.Roda = 0;
      this.Kecepatan = 0;
    }
  }
  
  class Mobil extends Kendaraan {
     tambahKecepatan(kecepatanBaru) {
      this.Kecepatan = this.Kecepatan + kecepatanBaru;
    }

    Berjalan() {
        this.tambahKecepatan(10);
      }
  }
  
  function main() {
    const Mobil = new Mobil();
    Mobil.berjalan();
    Mobil.berjalan();
    Mobil.berjalan();
  
    console.log(Mobil.Kecepatan);
  }
  