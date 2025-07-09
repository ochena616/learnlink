pipeline {
    agent {
        docker {
            image 'circleci/node:22-browsers'
        }
    }

    stages {
        stage('Install & Build') {
            steps {
                sh '''
                    echo "--- Environment Info ---"
                    node --version
                    npm --version
                    
                    echo "--- Installing Dependencies ---"
                    npm ci
                    
                    echo "--- Building Project ---"
                    npm run build
                    
                    echo "--- Build Artifacts ---"
                    ls -la dist/learnlink/browser/
                '''
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}