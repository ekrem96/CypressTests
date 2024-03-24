pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
    }

  }
  stages {
    stage('Test') {
      steps {
        sh 'sh \'node_modules/.bin/cypress run\''
      }
    }

  }
}