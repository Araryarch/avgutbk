const getInput = async (title, label) => {
  const { value: input } = await Swal.fire({
    title: title,
    input: 'number',
    inputLabel: label,
    inputPlaceholder: 'Masukkan nilai',
    inputAttributes: {
      min: 0,
      step: 1
    },
    showCancelButton: true,
    confirmButtonText: 'Submit',
    cancelButtonText: 'Cancel',
    inputValidator: (value) => {
      if (!value) {
        return 'Anda harus memasukkan nilai.'
      }
      if (isNaN(value) || value < 0) {
        return 'Masukkan angka yang valid.'
      }
    }
  })

  return input ? parseInt(input) : null
}

const getValues = async () => {
  const pu = await getInput('Masukkan nilai PU', 'Nilai Penalaran Umum')
  const pk = await getInput(
    'Masukkan nilai PK',
    'Nilai Pengetahuan Kuantitatif'
  )
  const ppu = await getInput(
    'Masukkan nilai PPU',
    'Nilai Pengetahuan dan Pehamaan Umum'
  )
  const pbm = await getInput(
    'Masukkan nilai PBM',
    'Nilai Pengetahuan Bacaan dan Menulis'
  )
  const lbi = await getInput(
    'Masukkan nilai Lit.BI',
    'Nilai Literasi Bahasa Indonesia'
  )
  const lbing = await getInput(
    'Masukkan nilai Lit.BIng',
    'Nilai Literasi Bahasa English'
  )
  const pm = await getInput('Masukkan nilai PM', 'Nilai Penalaran Matematika')

  const avgUtbk = calculateAvgUTBK(pu, pk, ppu, pbm, lbi, lbing, pm)
  const avgNormal = calculateAvgNormal(pu, pk, ppu, pbm, lbi, lbing, pm)

  document.querySelector('.avgUtbk').innerHTML = avgUtbk.toFixed(2)
  document.querySelector('.avgNormal').innerHTML = avgNormal.toFixed(2)
  document.querySelector('.keteranganUtbk').innerHTML = getUtbkMessage(avgUtbk)
  document.querySelector('.keteranganNormal').innerHTML =
    getNormalMessage(avgNormal)
}

const calculateAvgUTBK = (pu, pk, ppu, pbm, lbi, lbing, pm) => {
  const skolastik =
    (isNaN(pu) ? 0 : pu) +
    (isNaN(pk) ? 0 : pk) +
    (isNaN(ppu) ? 0 : ppu) +
    (isNaN(pbm) ? 0 : pbm)
  const literasi = (isNaN(lbi) ? 0 : lbi) + (isNaN(lbing) ? 0 : lbing)
  const matematika = isNaN(pm) ? 0 : pm

  const skolastikAvg = skolastik !== 0 ? skolastik / 4 : 0
  const literasiAvg = literasi !== 0 ? literasi / 2 : 0

  return (skolastikAvg + literasiAvg + matematika) / 3
}

const calculateAvgNormal = (pu, pk, ppu, pbm, lbi, lbing, pm) => {
  const total =
    (isNaN(pu) ? 0 : pu) +
    (isNaN(pk) ? 0 : pk) +
    (isNaN(ppu) ? 0 : ppu) +
    (isNaN(pbm) ? 0 : pbm) +
    (isNaN(lbi) ? 0 : lbi) +
    (isNaN(lbing) ? 0 : lbing) +
    (isNaN(pm) ? 0 : pm)

  const count =
    (isNaN(pu) ? 0 : 1) +
    (isNaN(pk) ? 0 : 1) +
    (isNaN(ppu) ? 0 : 1) +
    (isNaN(pbm) ? 0 : 1) +
    (isNaN(lbi) ? 0 : 1) +
    (isNaN(lbing) ? 0 : 1) +
    (isNaN(pm) ? 0 : 1)

  return count > 0 ? total / count : 0
}

const getUtbkMessage = (avg) => {
  if (isNaN(avg)) {
    return 'Nilainya diisi dulu.'
  } else if (avg < 450) {
    return 'Lu dongo anjing.'
  } else if (avg >= 450 && avg <= 520) {
    return 'Daftar Politeknik aja sih'
  } else if (avg > 520 && avg <= 620) {
    return 'Daftar ke Kampus top 10 + Test'
  } else if (avg > 620 && avg <= 710) {
    return 'Cari yang jurusannya ga terlalu gede aja lah ini'
  } else if (avg > 710 && avg <= 1000) {
    return 'Lu Pinter cuy, jangan salah strategi'
  } else {
    return 'Ini sih lu diluar nalar jir'
  }
}

const getNormalMessage = (avg) => {
  if (isNaN(avg)) {
    return 'Nilainya diisi dulu.'
  } else if (avg < 440) {
    return 'Lu dongo anjing.'
  } else if (avg >= 440 && avg <= 510) {
    return 'Daftar Politeknik aja sih'
  } else if (avg > 510 && avg <= 610) {
    return 'Daftar ke Kampus top 10 + Test'
  } else if (avg > 610 && avg <= 690) {
    return 'Cari yang jurusannya ga terlalu gede aja lah ini'
  } else if (avg > 690 && avg <= 1000) {
    return 'Lu Pinter cuy, jangan salah strategi'
  } else {
    return 'Ini sih lu diluar nalar jir'
  }
}
