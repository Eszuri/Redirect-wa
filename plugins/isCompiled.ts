import { Compiler } from 'webpack';

class isCompiled {
    apply(compiler: Compiler) {
        // Hook into the 'compile' event to log before the build starts
        compiler.hooks.compile.tap('LoggingPlugin', () => {
            console.log('Build process is starting...');
        });

        // Hook into the 'done' event to log after the build completes
        compiler.hooks.done.tap('LoggingPlugin', (stats) => {
            console.log('Build process has completed!');
        });
    }
}

export default isCompiled;
