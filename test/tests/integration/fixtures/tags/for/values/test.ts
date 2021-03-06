import TwingTestIntegrationTestCase from "../../../../../../integration-test-case";

export = class extends TwingTestIntegrationTestCase {
    getDescription() {
        return '"for" tag iterates over item values';
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
            items: [
                'a',
                'b'
            ]
        };
    }
};