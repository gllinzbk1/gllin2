import * as path from 'node:path'
import * as fs from 'node:fs'

export default defineEventHandler(async (event) => {
  //获取数据
  const body = await readBody(event)
  const filePath = path.join(process.cwd(), 'public', body.category+'.json')
  const data = await fs.promises.readFile(filePath, 'utf-8')
  return data
})