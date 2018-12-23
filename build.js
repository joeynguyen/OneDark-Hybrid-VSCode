const fs = require('fs')
const editorConfig = require('./src/editor.json')
const { classic } = require('./src/syntax')

fs.writeFileSync(
  './themes/OneDark-Hybrid2.json',
  JSON.stringify(
    {
      ...editorConfig,
      ...classic
    },
    '',
    2
  )
)
