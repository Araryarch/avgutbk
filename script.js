// const getInput = async (title, label) => {
//   const { value: input } = await Swal.fire({
//     title: title,
//     input: 'number',
//     inputLabel: label,
//     inputPlaceholder: 'Masukkan nilai',
//     inputAttributes: {
//       min: 0,
//       step: 1
//     },
//     showCancelButton: true,
//     confirmButtonText: 'Submit',
//     cancelButtonText: 'Cancel',
//     inputValidator: (value) => {
//       if (!value) {
//         return 'Anda harus memasukkan nilai.'
//       }
//       if (isNaN(value) || value < 0) {
//         return 'Masukkan angka yang valid.'
//       }
//     }
//   })

//   return input ? parseInt(input) : null
// }

// const getValues = async () => {
//   const pu = await getInput('Masukkan nilai PU', 'Nilai Penalaran Umum')
//   const pk = await getInput(
//     'Masukkan nilai PK',
//     'Nilai Pengetahuan Kuantitatif'
//   )
//   const ppu = await getInput(
//     'Masukkan nilai PPU',
//     'Nilai Pengetahuan dan Pehamaan Umum'
//   )
//   const pbm = await getInput(
//     'Masukkan nilai PBM',
//     'Nilai Pengetahuan Bacaan dan Menulis'
//   )
//   const lbi = await getInput(
//     'Masukkan nilai Lit.BI',
//     'Nilai Literasi Bahasa Indonesia'
//   )
//   const lbing = await getInput(
//     'Masukkan nilai Lit.BIng',
//     'Nilai Literasi Bahasa English'
//   )
//   const pm = await getInput('Masukkan nilai PM', 'Nilai Penalaran Matematika')

//   const avgUtbk = calculateAvgUTBK(pu, pk, ppu, pbm, lbi, lbing, pm)
//   const avgNormal = calculateAvgNormal(pu, pk, ppu, pbm, lbi, lbing, pm)

//   document.querySelector('.avgUtbk').innerHTML = avgUtbk.toFixed(2)
//   document.querySelector('.avgNormal').innerHTML = avgNormal.toFixed(2)
//   document.querySelector('.keteranganUtbk').innerHTML = getUtbkMessage(avgUtbk)
//   document.querySelector('.keteranganNormal').innerHTML =
//     getNormalMessage(avgNormal)
// }

// const calculateAvgUTBK = (pu, pk, ppu, pbm, lbi, lbing, pm) => {
//   const skolastik =
//     (isNaN(pu) ? 0 : pu) +
//     (isNaN(pk) ? 0 : pk) +
//     (isNaN(ppu) ? 0 : ppu) +
//     (isNaN(pbm) ? 0 : pbm)
//   const literasi = (isNaN(lbi) ? 0 : lbi) + (isNaN(lbing) ? 0 : lbing)
//   const matematika = isNaN(pm) ? 0 : pm

//   const skolastikAvg = skolastik !== 0 ? skolastik / 4 : 0
//   const literasiAvg = literasi !== 0 ? literasi / 2 : 0

//   return (skolastikAvg + literasiAvg + matematika) / 3
// }

// const calculateAvgNormal = (pu, pk, ppu, pbm, lbi, lbing, pm) => {
//   const total =
//     (isNaN(pu) ? 0 : pu) +
//     (isNaN(pk) ? 0 : pk) +
//     (isNaN(ppu) ? 0 : ppu) +
//     (isNaN(pbm) ? 0 : pbm) +
//     (isNaN(lbi) ? 0 : lbi) +
//     (isNaN(lbing) ? 0 : lbing) +
//     (isNaN(pm) ? 0 : pm)

//   const count =
//     (isNaN(pu) ? 0 : 1) +
//     (isNaN(pk) ? 0 : 1) +
//     (isNaN(ppu) ? 0 : 1) +
//     (isNaN(pbm) ? 0 : 1) +
//     (isNaN(lbi) ? 0 : 1) +
//     (isNaN(lbing) ? 0 : 1) +
//     (isNaN(pm) ? 0 : 1)

//   return count > 0 ? total / count : 0
// }

// const getUtbkMessage = (avg) => {
//   if (isNaN(avg)) {
//     return 'Nilainya diisi dulu.'
//   } else if (avg >= 580 && avg <= 600) {
//     return 'Lu biasa aja sih'
//   } else if (avg < 580) {
//     return 'Lu dongo anjing.'
//   } else {
//     return 'Lu pinter gilak.'
//   }
// }

// const getNormalMessage = (avg) => {
//   if (isNaN(avg)) {
//     return 'Nilainya diisi dulu.'
//   } else if (avg >= 550 && avg <= 600) {
//     return 'Lu biasa aja sih'
//   } else if (avg < 550) {
//     return 'Lu dongo anjing.'
//   } else {
//     return 'Lu pinter gilak.'
//   }
// }
