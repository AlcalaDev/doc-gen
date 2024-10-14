# Doc gen package

How to use:

- Enter in pokemon-example
- Run `yarn build` to generate a dist folder to consume
- Run `yarn doc`, this will create **doc_report** folder with JSON, transform this JSON into MD inside **docusaurus/docs** folder, and go back to remove doc_report

How to see:

- [Documentation deployed](https://alcaladev.github.io/doc-gen/)

// TODO:

- Automatize documentation generation on push
- Send documentation of the project no another project in same organization:
  - [Example here](https://stackoverflow.com/questions/65997950/how-let-github-actions-workflow-push-generated-documentation-to-other-repository)
