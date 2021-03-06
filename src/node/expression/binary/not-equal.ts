import TwingNodeExpressionBinary from "../binary";
import TwingCompiler from "../../../compiler";

class TwingNodeExpressionBinaryNotEqual extends TwingNodeExpressionBinary {
    compile(compiler: TwingCompiler) {
        compiler
            .raw('!Twing.twingCompare(')
            .subcompile(this.getNode('left'))
            .raw(', ')
            .subcompile(this.getNode('right'))
            .raw(')')
        ;
    }
}

export default TwingNodeExpressionBinaryNotEqual;