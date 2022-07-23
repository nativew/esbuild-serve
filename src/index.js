import { build } from 'esbuild';
import serve, { error, log } from 'create-serve';

export const isWatch = process.argv.includes('-w');

const esbuildServe = async (options = {}, serveOptions = {}) => {
	build({
		...options,
		watch: isWatch && {
			onRebuild(err) {
				serve.update();
				err ? error('× Failed') : log('✓ Updated');
			}
		}
	})
		.then(() => {
		  if (isWatch) {
			serve.start(serveOptions)
		  }
		})
		.catch(() => process.exit(1));
};

export default esbuildServe;
