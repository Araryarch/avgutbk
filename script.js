const pu = parseInt(prompt('Masukkan nilai pu'))
const pk = parseInt(prompt('Masukkan nilai pk'))
const ppu = parseInt(prompt('Masukkan nilai ppu'))
const pbm = parseInt(prompt('Masukkan nilai pbm'))

const lbi = parseInt(prompt('Masukkan nilai lit.bi'))
const lbing = parseInt(prompt('Masukkan nilai lit.bing'))

const pm = parseInt(prompt('Masukkan nilai pm'))

const avgUTBK = () => {
  const skolastik =
    (isNaN(pu) ? 0 : pu) +
    (isNaN(pk) ? 0 : pk) +
    (isNaN(ppu) ? 0 : ppu) +
    (isNaN(pbm) ? 0 : pbm)
  const literasi = (isNaN(lbi) ? 0 : lbi) + (isNaN(lbing) ? 0 : lbing)
  const matematika = isNaN(pm) ? 0 : pm

  const skolastikAvg = skolastik !== 0 ? skolastik / 4 : 0
  const literasiAvg = literasi !== 0 ? literasi / 2 : 0

  const result = (skolastikAvg + literasiAvg + matematika) / 3
  return result
}

const avgNormal = () => {
  const total = pu + pk + ppu + pbm + lbi + lbing + pm
  const count =
    (isNaN(pu) ? 0 : 1) +
    (isNaN(pk) ? 0 : 1) +
    (isNaN(ppu) ? 0 : 1) +
    (isNaN(pbm) ? 0 : 1) +
    (isNaN(lbi) ? 0 : 1) +
    (isNaN(lbing) ? 0 : 1) +
    (isNaN(pm) ? 0 : 1)

  const result = count > 0 ? total / count : 0
  return result
}

const getUtbkMessage = () => {
  const avg = avgUTBK()
  if (isNaN(avg)) {
    return 'Nilainya diisi dulu.'
  } else if (avg >= 550 && avg <= 600) {
    return 'Lu biasa aja sih'
  } else if (avg <= 600) {
    return 'Lu dongo anjing.'
  } else {
    return 'Lu pinter gilak.'
  }
}

const getNormalMessage = () => {
  const avg = avgNormal()
  if (isNaN(avg)) {
    return 'Nilainya diisi dulu.'
  } else if (avg >= 550 && avg <= 600) {
    return 'Lu biasa aja sih'
  } else if (avg <= 600) {
    return 'Lu dongo anjing.'
  } else {
    return 'Lu pinter gilak.'
  }
}

document.querySelector('.avgUtbk').innerHTML = avgUTBK().toFixed(2)
document.querySelector('.avgNormal').innerHTML = avgNormal().toFixed(2)
document.querySelector('.keteranganUtbk').innerHTML = getUtbkMessage()
document.querySelector('.keteranganNormal').innerHTML = getNormalMessage()
