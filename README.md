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
Generate app.yaml from app.tmp.yaml
- workflow.yml
```yaml
uses: yuzuy/gha-secrets@v1
with:
  tmp-file: 'app.tmp.yaml'
  out-file: 'app.yaml'
env:
  FOO_API_KEY: ${{ secrets.FOO_API_KEY }}
```

- app.tmp.yaml
```yaml
runtime: nodejs12
env_variables:
  FOO_API_KEY: ${{FOO_API_KEY}}
```
