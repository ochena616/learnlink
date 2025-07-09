pipeline {
    agent any

    stages {
        stage('Build') {
            agent {
                docker {
                    image 'circleci/node:22-browsers'
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
                    image 'circleci/node:22-browsers'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    test -f dist/learnlink/browser/index.html
                    npm test
                '''
            }
        }
    }
}
