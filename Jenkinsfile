pipeline {
    agent any

    parameters {
        string(
            name: 'APP_URL',
            defaultValue: '',
            description: 'Application URL used by the Playwright tests'
        )
    }

    environment {
        CI = 'true'
        APP_URL = "${params.APP_URL}"
    }

    stages {
        stage('Install dependencies') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'npm ci'
                        sh 'npx playwright install --with-deps chromium'
                    } else {
                        bat 'npm ci'
                        bat 'npx playwright install chromium'
                    }
                }
            }
        }

        stage('Run Playwright tests') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'npx playwright test --project=chromium'
                    } else {
                        bat 'npx playwright test --project=chromium'
                    }
                }
            }
        }
    }

    post {
        always {
            junit testResults: 'test-results/results.xml', allowEmptyResults: true
            archiveArtifacts artifacts: 'playwright-report/**, test-results/**', allowEmptyArchive: true
        }
    }
}
