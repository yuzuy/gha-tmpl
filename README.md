# gha-secrets action
This action generates a config file using GitHub secrets.

## Inputs

### tmp-file
- **Required**
- Specify the template file name.

### out-file
- **Required**
- Specify the output file name.

## Usage

### Example
Generate .env from .env.tmp
- workflow.yml
```yaml
uses: yuzuy/gha-secrets@v1.1
with:
  tmp-file: '.env.tmp'
  out-file: '.env'
env:
  FOO_API_KEY: ${{ secrets.FOO_API_KEY }}
```

- .env.tmp
```env
FOO_API_KEY=${{FOO_API_KEY}}
```
