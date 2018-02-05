import TwingTestIntegrationTestCase from "../../../../../../integration-test-case";

export = class extends TwingTestIntegrationTestCase {
    getDescription() {
        return '"for" tag iterates over iterable objects';
    }

    getTemplates() {
        let templates = super.getTemplates();

        templates.set('index.twig', require('./index.twig'));

        return templates;
    }

    getExpected() {
        return `
  * bar
  * 1/0
  * 1

  * foo
  * 2/1
  * 


  * foo/bar
  * bar/foo

  * foo
  * bar
`;
    }

    getData() {
        return {
            items: new Map([
                ['foo', 'bar'],
                ['bar', 'foo']
            ])
        };
    }
};