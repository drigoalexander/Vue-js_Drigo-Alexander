export const penjumlahan = (variabelSatu, variabelDua) => {
  return variabelSatu + variabelDua;
};

export const pengurangan = (variabelSatu, variabelDua) => {
  return variabelSatu - variabelDua;
};

export const pembagian = (variabelSatu, variabelDua) => {
  return variabelSatu / variabelDua;
};

export const perkalian = (variabelSatu, variabelDua) => {
  return variabelSatu * variabelDua;
};

export const ratarata = (
  variabelSatu,
  variabelDua,
  variabelTiga,
  variabelEmpat,
  variableLima
) => {
  return (
    (variabelSatu + variabelDua + variabelTiga + variabelEmpat + variableLima) /
    5
  );
};

export const luasPersegi = (sisiSatu, sisiDua) => {
  return sisiSatu * sisiDua;
};

export const luasLingkaran = (phi = 3.14, r) => {
  return phi * r * r;
};

export const luasKubus = (banyakSisi = 6, sisi1, sisi2) => {
  return banyakSisi * sisi1 * sisi2;
};

export const volumeKubus = (sisi1, sisi2, sisi3) => {
  return sisi1 * sisi2 * sisi3;
};
