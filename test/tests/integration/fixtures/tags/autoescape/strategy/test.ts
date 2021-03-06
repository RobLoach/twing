import TwingTestIntegrationTestCase from "../../../../../../integration-test-case";

export = class extends TwingTestIntegrationTestCase {
    getDescription() {
        return '"autoescape" tag accepts an escaping strategy';
    }

    getTemplates() {
        let templates = super.getTemplates();

        templates.set('index.twig', require('./index.twig'));

        return templates;
    }

    getExpected() {
        return require('./expected.html');
    }

    getData() {
        return {
            'var': '<br />"'
        };
    }
};