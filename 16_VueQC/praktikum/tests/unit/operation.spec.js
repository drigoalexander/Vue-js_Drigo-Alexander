import { penjumlahan } from "@/utils/operation.js";
import { pengurangan } from "@/utils/operation.js";
import { pembagian } from "@/utils/operation.js";
import { perkalian } from "@/utils/operation.js";
import { ratarata } from "@/utils/operation.js";
import { luasPersegi } from "@/utils/operation.js";
import { luasLingkaran } from "@/utils/operation.js";
import { luasKubus } from "@/utils/operation.js";
import { volumeKubus } from "@/utils/operation.js";

describe("Melakukan Penjumlahan", () => {
  test("Penjumlahan dua bilangan positif", () => {
    expect(penjumlahan(2, 4)).toBe(6);
  });
  test("Penjumlahan dua bilangan negatif", () => {
    expect(penjumlahan(-10, -2)).toBe(-12);
  });
  test("Penjumlahan dua bilangan non numerik", () => {
    expect(penjumlahan("1", "0")).toBe("10");
  });
});

describe("Melakukan Pengurangan", () => {
  test("pengurangan dua bilangan positif", () => {
    expect(pengurangan(1, 1)).toBe(0);
  });
  test("pengurangan dua bilangan negatif", () => {
    expect(pengurangan(-10, -4)).toBe(-6);
  });
  test("pengurangan dua bilangan non numerik", () => {
    expect(pengurangan("2", "4")).toBe(-2);
  });
});

describe("Melakukan pembagian", () => {
  test("pembagian dua bilangan positif", () => {
    expect(pembagian(2, 2)).toBe(1);
  });
  test("pembagian dua bilangan negatif", () => {
    expect(pembagian(-10, -5)).toBe(2);
  });
  test("pembagian dua bilangan non numerik", () => {
    expect(pembagian("10", "5")).toBe(2);
  });
});

describe("Melakukan perkalian", () => {
  test("perkalian dua bilangan positif", () => {
    expect(perkalian(2, 2)).toBe(4);
  });
  test("perkalian dua bilangan negatif", () => {
    expect(perkalian(-10, -4)).toBe(40);
  });
  test("perkalian dua bilangan non numerik", () => {
    expect(perkalian("10", "5")).toBe(50);
  });
});

describe("Menghitung Rata Rata", () => {
  test("ratarata dua bilangan positif", () => {
    expect(ratarata(10, 2, 4, 6, 7)).toBe(5.8);
  });
  test("ratarata dua bilangan negatif", () => {
    expect(ratarata(-10, -4, -3, -22, -44)).toBe(-16.6);
  });
  test("ratarata dua bilangan non numerik", () => {
    expect(ratarata("10", "5", "2", "4", "5")).toBe(21049);
  });
});

describe("Menghitung Luas Persegi", () => {
  test("luasPersegi dua bilangan positif", () => {
    expect(luasPersegi(4, 4)).toBe(16);
  });
  test("luasPersegi dua bilangan negatif", () => {
    expect(luasPersegi(-3, -3)).toBe(9);
  });
  test("luasPersegi dua bilangan non numerik", () => {
    expect(luasPersegi("10", "10")).toBe(100);
  });
});

describe("Menghitung Luas Lingkaran", () => {
  test("luasLingkaran dua bilangan positif", () => {
    expect(luasLingkaran(undefined, 4)).toBe(50.24);
  });
  test("luasLingkaran dua bilangan negatif", () => {
    expect(luasLingkaran(undefined, -9)).toBe(254.34);
  });
  test("luasLingkaran dua bilangan non numerik", () => {
    expect(luasLingkaran(undefined, "10")).toBe(314);
  });
});

describe("Menghitung Luas Kubus", () => {
  test("luasKubus dua bilangan positif", () => {
    expect(luasKubus(undefined, 4, 4)).toBe(96);
  });
  test("luasKubus dua bilangan negatif", () => {
    expect(luasKubus(undefined, -9, -9)).toBe(486);
  });
  test("luasKubus dua bilangan non numerik", () => {
    expect(luasKubus(undefined, "10", "10")).toBe(600);
  });
});

describe("Menghitung Luas Kubus", () => {
  test("luasKubus dua bilangan positif", () => {
    expect(luasKubus(undefined, 4, 4)).toBe(96);
  });
  test("luasKubus dua bilangan negatif", () => {
    expect(luasKubus(undefined, -9, -9)).toBe(486);
  });
  test("luasKubus dua bilangan non numerik", () => {
    expect(luasKubus(undefined, "10", "10")).toBe(600);
  });
});

describe("Menghitung Volume Kubus", () => {
  test("volumeKubus dua bilangan positif", () => {
    expect(volumeKubus(4, 4, 4)).toBe(64);
  });
  test("volumeKubus dua bilangan negatif", () => {
    expect(volumeKubus(-9, -9, -9)).toBe(-729);
  });
  test("volumeKubus dua bilangan non numerik", () => {
    expect(volumeKubus("10", "10", "10")).toBe(1000);
  });
});
