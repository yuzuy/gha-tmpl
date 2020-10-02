import * as core from '@actions/core'
import * as fs from 'fs'

async function run() {
    try {
        const tmplFileName = core.getInput('tmpl-file')
        const tmpl = fs.readFileSync(tmplFileName).toString()
        let out = tmpl

        const matches = tmpl.match(/\${{([A-Z_]*)}}/g)
        if (matches === null) {
            core.info('It not found match with /${{([A-Z_]*)}}/g in ' + tmplFileName)
            return
        }
        for (const match of matches) {
            const envName = match.replace(/[${}]/g, '')
            out = out.replace(match, `'${process.env[envName]}'`)
        }

        const outFileName = core.getInput('out-file')
        fs.writeFileSync(outFileName, out)

        core.info(`Successfully generated ${outFileName}!`)
    } catch (e) {
        core.setFailed(e.message)
    }
}

run()
