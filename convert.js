const colors = JSON.parse('[{"id":"0","color":[181,122,30]},{"id":"1","color":[78,26,19]},{"id":"2","color":[40,78,25]},{"id":"3","color":[180,240,241]},{"id":"4","color":[121,49,145]},{"id":"5","color":[252,222,144]},{"id":"6","color":[56,33,136]},{"id":"7","color":[222,169,64]},{"id":"8","color":[89,22,69]},{"id":"9","color":[255,173,84]},{"id":"10","color":[66,144,129]},{"id":"11","color":[239,201,144]},{"id":"12","color":[34,66,119]},{"id":"13","color":[206,218,231]},{"id":"14","color":[141,41,26]},{"id":"15","color":[247,191,70]},{"id":"16","color":[107,213,220]},{"id":"17","color":[238,214,144]},{"id":"18","color":[174,195,130]},{"id":"19","color":[195,195,195]},{"id":"20","color":[213,215,212]},{"id":"21","color":[231,236,214]},{"id":"22","color":[234,238,239]},{"id":"23","color":[127,107,96]},{"id":"24","color":[150,126,126]},{"id":"25","color":[182,171,167]},{"id":"26","color":[231,211,186]},{"id":"27","color":[234,225,218]},{"id":"28","color":[217,219,206]},{"id":"29","color":[223,214,205]},{"id":"30","color":[202,193,186]},{"id":"31","color":[236,232,221]},{"id":"32","color":[224,220,217]},{"id":"33","color":[239,236,229]},{"id":"34","color":[234,233,229]},{"id":"35","color":[245,245,245]},{"id":"36","color":[245,179,101]},{"id":"37","color":[245,179,101]},{"id":"38","color":[230,140,54]},{"id":"39","color":[220,172,70]},{"id":"40","color":[255,255,255]},{"id":"41","color":[238,231,212]},{"id":"42","color":[233,226,197]},{"id":"43","color":[235,220,187]},{"id":"44","color":[240,224,165]},{"id":"45","color":[224,199,142]},{"id":"46","color":[205,168,124]},{"id":"47","color":[249,213,117]},{"id":"48","color":[228,68,52]},{"id":"49","color":[230,144,119]},{"id":"50","color":[231,156,125]},{"id":"51","color":[201,75,78]},{"id":"52","color":[230,176,166]},{"id":"53","color":[228,200,199]},{"id":"54","color":[242,176,162]},{"id":"55","color":[218,108,109]},{"id":"56","color":[226,188,175]},{"id":"57","color":[189,126,117]},{"id":"58","color":[209,199,197]},{"id":"59","color":[151,91,67]},{"id":"60","color":[230,165,127]},{"id":"61","color":[123,94,78]},{"id":"62","color":[172,145,136]},{"id":"63","color":[215,150,122]},{"id":"64","color":[230,201,187]},{"id":"65","color":[147,65,101]},{"id":"66","color":[211,158,176]},{"id":"67","color":[100,73,116]},{"id":"68","color":[127,101,138]},{"id":"69","color":[167,147,174]},{"id":"70","color":[197,5,124]},{"id":"71","color":[113,0,131]},{"id":"72","color":[0,102,127]},{"id":"73","color":[0,160,186]},{"id":"74","color":[83,183,198]},{"id":"75","color":[161,177,239]},{"id":"76","color":[127,140,192]},{"id":"77","color":[89,96,168]},{"id":"78","color":[193,88,154]},{"id":"79","color":[163,79,175]},{"id":"80","color":[208,142,84]},{"id":"81","color":[147,155,217]},{"id":"82","color":[234,79,0]},{"id":"83","color":[210,45,51]},{"id":"84","color":[253,226,23]},{"id":"85","color":[255,164,221]},{"id":"86","color":[203,131,213]},{"id":"87","color":[137,93,94]},{"id":"88","color":[2,255,25]},{"id":"89","color":[1,150,120]},{"id":"90","color":[158,196,0]},{"id":"91","color":[163,68,2]},{"id":"92","color":[113,66,20]},{"id":"93","color":[255,195,195]},{"id":"94","color":[133,95,168]},{"id":"95","color":[126,110,74]},{"id":"96","color":[58,51,33]},{"id":"97","color":[61,47,34]},{"id":"98","color":[66,44,46]},{"id":"99","color":[69,62,56]},{"id":"100","color":[51,44,77]},{"id":"101","color":[81,82,103]},{"id":"102","color":[108,114,162]},{"id":"103","color":[139,147,186]},{"id":"104","color":[166,213,219]},{"id":"105","color":[164,177,194]},{"id":"106","color":[197,188,209]},{"id":"107","color":[216,174,197]},{"id":"108","color":[206,218,218]},{"id":"109","color":[210,214,213]},{"id":"110","color":[202,204,203]},{"id":"111","color":[223,222,220]},{"id":"112","color":[93,91,68]},{"id":"113","color":[114,107,61]},{"id":"114","color":[205,204,124]},{"id":"115","color":[143,209,221]},{"id":"116","color":[11,12,17]},{"id":"117","color":[245,179,101]},{"id":"118","color":[227,102,100]},{"id":"119","color":[69,109,255]},{"id":"120","color":[95,189,114]},{"id":"121","color":[244,211,46]},{"id":"122","color":[169,116,53]},{"id":"123","color":[65,40,27]},{"id":"124","color":[65,40,27]},{"id":"125","color":[169,116,53]},{"id":"126","color":[52,103,30]},{"id":"127","color":[243,243,243]},{"id":"128","color":[243,243,243]},{"id":"129","color":[52,103,30]},{"id":"130","color":[119,57,167]},{"id":"131","color":[241,194,50]},{"id":"132","color":[241,194,50]},{"id":"133","color":[119,57,167]},{"id":"134","color":[90,164,173]},{"id":"135","color":[255,233,212]},{"id":"136","color":[255,233,212]},{"id":"137","color":[90,164,173]},{"id":"138","color":[58,98,152]},{"id":"139","color":[217,217,217]},{"id":"140","color":[217,217,217]},{"id":"141","color":[58,98,152]},{"id":"142","color":[131,8,8]},{"id":"143","color":[244,202,20]},{"id":"144","color":[244,202,20]},{"id":"145","color":[131,8,8]},{"id":"146","color":[44,77,134]},{"id":"147","color":[149,80,102]},{"id":"148","color":[108,21,18]},{"id":"149","color":[33,31,31]},{"id":"150","color":[204,196,191]},{"id":"151","color":[239,155,155]},{"id":"152","color":[181,208,253]},{"id":"153","color":[168,206,171]},{"id":"154","color":[141,92,68]},{"id":"155","color":[233,167,77]},{"id":"156","color":[179,164,145]},{"id":"157","color":[95,79,68]}]')
let image = document.createElement('img')
let canvas = document.getElementById('canvas')
let out = document.getElementById('out')
let range = document.getElementById('range')
let removeWhiteBackground = document.getElementById('removeWhiteBackground')
let imageOffsetX = document.getElementById('offsetX')
let imageOffsetY = document.getElementById('offsetY')
let backgroundColor = colors.find(c => c.id == '40')
range.value = 20
let ctx = canvas.getContext('2d')
ctx.imageSmoothingEnabled = false;
let colorSelector = document.getElementById('colors')

removeWhiteBackground.addEventListener('change', () => process())

colors.forEach(color => {
  let el = document.createElement('div')
  el.className = 'color'
  el.style.backgroundColor = `rgb(${color.color[0]},${color.color[1]},${color.color[2]})`
  colorSelector.appendChild(el)
  el.addEventListener('click', () => {
    backgroundColor = color
    process()
  })
})

let string = `11.40.${backgroundColor.id}.1836.1836.764.764.0.0.0`
let pixels = []
let bannerWidth = 1028
let bannerHeight = 600
let scale = 30
let outWidth = Math.floor(bannerWidth / scale)
let outHeight = Math.floor(bannerHeight / scale)
canvas.width = outWidth
canvas.height = outHeight
let pxlSize = Math.floor(bannerWidth / outWidth)
let offsetX, offsetY

const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = error => reject(error);
});

async function onUpload() {
  const file = document.querySelector('#upload').files[0];
  image.src = await toBase64(file)
  document.getElementById('afterSelection').style.display = 'block'
}

range.addEventListener('input', e => process())
imageOffsetX.addEventListener('input', e => process())
imageOffsetY.addEventListener('input', e => process())

const colorToString = (color) => `rgb(${color[0]},${color[1]},${color[2]})`

const addPixel = (x, y, colour, sX, sY) => {
  let w = Math.floor(sX * (pxlSize - 3))
  let h = Math.floor(sY * (pxlSize - 3))
  x = x + sX / 2
  x = Math.floor(offsetX + (x * scale))
  y = y + sY / 2
  y = Math.floor(offsetY + (y * scale))
  
  string += `.505.${colour}.116.${w}.${h}.${x}.${y}.0.0.0`
}

const process = () => {
  canvas.width = 1
  canvas.height = 1
  scale = range.value
  outWidth = Math.floor(bannerWidth / scale)
  outHeight = Math.floor(bannerHeight / scale)
  canvas.width = outWidth
  canvas.height = outHeight
  pxlSize = Math.round(bannerWidth / outWidth) + 4
  let scaling = image.naturalWidth / outWidth

  offsetX = 400
  string = `11.40.${backgroundColor.id}.1836.1836.764.764.0.0.0`
  pixels = []
  offsetX = Math.floor(764 - ((image.naturalWidth / scaling) / 2) * scale / 2)
  offsetY = Math.floor(764 - ((image.naturalHeight / scaling) / 2) * scale / 2)
  
  let aspectRatio = image.naturalWidth / image.naturalHeight

  let width, height

  if (aspectRatio < bannerWidth / bannerHeight) {
    height = canvas.height
    width = canvas.height * aspectRatio
  } else {
    width = canvas.width
    height = canvas.width / aspectRatio
  }
  
  ctx.drawImage(image, imageOffsetX.value, imageOffsetY.value, image.naturalWidth, image.naturalHeight, 0, 0, width, height)

  let data = ctx.getImageData(0, 0, canvas.width, canvas.height)

  for (let i = 0; i < data.data.length; i+= 4) {
    let rgb = [data.data[i], data.data[i + 1], data.data[i + 2], data.data[i + 3]]
    pixels.push(rgb)
  }
  
  pixels = pixels.map(p => {
    if (p[3] < 100) return false
    let color
    let bestDiff = Infinity

    colors.forEach(_color => {
      let diff = Math.abs(_color.color[0] - p[0]) + Math.abs(_color.color[1] - p[1]) + Math.abs(_color.color[2] - p[2])
      if (diff < bestDiff) {
        bestDiff = diff
        color = _color
      }
    })
    return {sX: 1, sY: 1, ...color}
  })

  let total = 0

  ctx.fillStyle = colorToString(backgroundColor.color)
  ctx.fillRect(0,0,canvas.width, canvas.height)

  for (let i in pixels) {
    i = parseInt(i)
    let x = i % outWidth
    let y = Math.floor(i / outWidth)
    if (pixels[i] === false) continue

    let toJoinX = []

    for (let j = 1; j < (outWidth - x); j++) {
      if (x === outWidth - 1) break

      let left = pixels[i + j]
      if (left && left.id === pixels[i].id) {
        toJoinX.push(left)
      } else break
    }

    pixels[i].sX = toJoinX.length + 1
    toJoinX.forEach(p => {
      let index = pixels.indexOf(p)
      pixels[index] = false
    })

    let toJoinY = []

    for (let j = 1; j < (outHeight - y); j++) {
      let directlyDown = pixels[i + (outWidth * j)]
      if (!directlyDown || directlyDown.id !== pixels[i].id) break
      let layer = [directlyDown]
      for (let m = 1; m < pixels[i].sX; m++) {
        let p = pixels[i + (outWidth * j) + m]
        if (p && p.id === pixels[i].id) layer.push(p)
      }
      if (layer.length === pixels[i].sX) toJoinY.push(layer)
      else break
    }

    pixels[i].sY = toJoinY.length + 1
    toJoinY.forEach(layer => {
      layer.forEach(p => {
        let index = pixels.indexOf(p)
        pixels[index] = false
      })
    })
  }

  pixels.forEach((p, i) => {
    let x = i % outWidth
    let y = Math.floor(i / outWidth)
    if (p !== false && (!removeWhiteBackground.checked || ['40', '35', '127', '128'].indexOf(p.id) === -1)) {
      total += 1
      addPixel(x, y, p.id, p.sX, p.sY)
      ctx.fillStyle = colorToString(p.color)
      ctx.fillRect(x, y, p.sX, p.sY)
    }
  })

  out.value = string
}


image.onload = () => {
  process()
  imageOffsetX.value += 1
  process()
  imageOffsetX.value -= 1
  process()
}
