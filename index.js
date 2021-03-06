const { getHtml, getDeOfHet } = require('./lib/scraper')

async function go() {
    const html = await getHtml(`https://www.welklidwoord.nl/${process.argv[2] || ''}`)
    console.log((await getDeOfHet(html)) + ' ' + process.argv[2] || '')
}

go()
