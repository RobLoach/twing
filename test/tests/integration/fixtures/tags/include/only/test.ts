import TwingTestIntegrationTestCase from "../../../../../../integration-test-case";

export = class extends TwingTestIntegrationTestCase {
    getTemplates() {
        let templates = super.getTemplates();

        templates.set('index.twig', require('./index.twig'));
        templates.set('foo.twig', require('./foo.twig'));

        return templates;
    }

    getData() {
        return {
            foo: 'bar'
        };
    }

    getExpected() {
        return require('./expected.html');
    }
};