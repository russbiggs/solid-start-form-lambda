import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
    start: {
        server: {
            preset: 'aws-lambda',
            serveStatic: true
        }
    }
});
