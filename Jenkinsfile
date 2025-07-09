pipeline {
    agent any

    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:22-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    ls -la
                    node --version
                    npm --version
                    npm ci
                    npm run build
                    ls -la
                '''
            }
        }

        stage('Test') {
            agent {
                docker {
                    image 'node:22-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    apk add --no-cache chromium
                    export CHROME_BIN=/usr/bin/chromium-browser
                    test -f dist/learnlink/browser/index.html
                    npm test -- --watch=false --browsers=ChromeHeadless
                '''
            }
        }
    }
}
