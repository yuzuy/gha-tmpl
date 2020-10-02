# gha-secrets action

This action generates a config file using GitHub secrets.

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
uses: yuzuy/gha-secrets@v1.1
with:
  tmpl-file: '.env.tmp'
  out-file: '.env'
env:
  FOO_API_KEY: ${{ secrets.FOO_API_KEY }}
```

- .env.tmpl
```env
FOO_API_KEY=${{FOO_API_KEY}}
```
