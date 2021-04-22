# gha-tmpl action

This is a simple template engine can be used in GitHub Actions.

## Inputs

### tmpl-file

- **Required**
- Specify the template file name.

### out-file

- **Required**
- Specify the output file name.

## Usage

### Example

Generate .env from .env.tmpl
- workflow.yml
```yaml
uses: yuzuy/gha-tmpl@v1.1.0
with:
  tmpl-file: '.env.tmpl'
  out-file: '.env'
env:
  FOO_API_KEY: ${{ secrets.FOO_API_KEY }}
  BAR_API_KEY: 'barbarbar'
```

- .env.tmpl
```dotenv
FOO_API_KEY=${{FOO_API_KEY}}
BAR_API_KEY=${{BAR_API_KEY}}
```

- .env
```dotenv
FOO_API_KEY=foofoofoo # this value is set in repository secrets with the name FOO_API_KEY
BAR_API_KEY=barbarbar
```
