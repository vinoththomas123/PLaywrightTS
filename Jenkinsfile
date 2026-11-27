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
                    def appUrl = params.APP_URL?.trim()

                    if (!appUrl) {
                        error 'APP_URL is not set. Provide it when starting the Jenkins build.'
                    }

                    withEnv(["APP_URL=${appUrl}"]) {
                        if (isUnix()) {
                            sh 'npx playwright test --project=chromium'
                        } else {
                            bat 'npx playwright test --project=chromium'
                        }
                    }
                }
            }
        }        
    }

    post {
        always {
            junit(
                testResults: 'test-results/results.xml',
                allowEmptyResults: true
            )

            archiveArtifacts(
                artifacts: 'playwright-report/**, test-results/**',
                allowEmptyArchive: true
            )

            publishHTML([
                allowMissing: true,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright HTML Report'
            ])
        }
    }
}
