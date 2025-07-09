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
                    image 'selenium/standalone-chrome'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    export CHROME_BIN=/usr/bin/google-chrome
                    npm test -- --watch=false --browsers=ChromeHeadless
                '''
            }
        }
    }
}
